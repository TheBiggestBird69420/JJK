/*
 * Announcements chat plugin
 * By Spandamn
 */
import {Utils} from '../../lib/utils';

const MINUTE = 60000;

export interface AnnouncementData {
	activityId?: 'announcement';
	announcementNumber?: number;
	source: string;
	timeoutMins?: number;
	timerEnd?: number;
}

export class Announcement {
	readonly activityId: 'announcement';
	announcementNumber: number;
	room: Room;
	source: string;
	timeout: NodeJS.Timer | null;
	timeoutMins: number;
	timerEnd?: number;
	constructor(room: Room, options: AnnouncementData) {
		this.activityId = 'announcement';
		this.announcementNumber = options.announcementNumber || room.nextGameNumber();
		this.room = room;
		this.source = options.source;
		this.timeoutMins = options.timeoutMins || 0;
		this.timeout = options.timerEnd ? this.runTimeout((options.timerEnd - Date.now()) / MINUTE) : null;
	}

	generateAnnouncement() {
		return `<div class="broadcast-blue"><p style="margin: 2px 0 5px 0"><strong style="font-size:11pt">${this.source}</strong></p></div>`;
	}

	displayTo(user: User, connection: Connection | null = null) {
		const recipient = connection || user;
		recipient.sendTo(this.room, `|uhtml|announcement${this.announcementNumber}|${this.generateAnnouncement()}`);
	}

	display() {
		const announcement = this.generateAnnouncement();
		for (const id in this.room.users) {
			const thisUser = this.room.users[id];
			thisUser.sendTo(this.room, `|uhtml|announcement${this.announcementNumber}|${announcement}`);
		}
	}

	onConnect(user: User, connection: Connection | null = null) {
		this.displayTo(user, connection);
	}

	end() {
		this.endTimer();
		this.room.send(`|uhtmlchange|announcement${this.announcementNumber}|<div class="infobox">(${this.room.tr`The announcement has ended.`})</div>`);
		delete this.room.settings.minorActivity;
		this.room.minorActivity = null;
		this.room.saveSettings();
	}
	save() {
		const entry: AnnouncementData = {
			source: this.source,
			announcementNumber: this.announcementNumber,
			timeoutMins: this.timeoutMins,
			timerEnd: this.timerEnd,
			activityId: 'announcement',
		};
		this.room.settings.minorActivity = entry;
		this.room.saveSettings();
		return entry;
	}
	runTimeout(timeout: number) {
		this.timeoutMins = timeout;
		this.timerEnd = Date.now() + timeout * 60000;
		this.timeout = setTimeout(() => {
			const room = this.room;
			if (!room) return; // do nothing if the room doesn't exist anymore
			if (room.minorActivity) room.minorActivity.end();
		}, timeout * MINUTE);
		this.save();
		return this.timeout;
	}
	endTimer() {
		if (!this.timeout) return;
		clearTimeout(this.timeout);
		this.timeoutMins = 0;
		delete this.timerEnd;
		return this;
	}
}

for (const room of Rooms.rooms.values()) { // hotpatching!
	if (room.settings.minorActivity?.activityId === 'announcement') {
		room.minorActivity = new Announcement(room, room.settings.minorActivity);
	}
}

export const commands: ChatCommands = {
	announcement: {
		htmlcreate: 'new',
		create: 'new',
		new(target, room, user, connection, cmd, message) {
			room = this.requireRoom();
			if (!target) return this.parse('/help announcement new');
			target = target.trim();
			if (room.battle) return this.errorReply(this.tr`Battles do not support announcements.`);

			const text = this.filter(target);
			if (target !== text) return this.errorReply(this.tr`You are not allowed to use filtered words in announcements.`);

			const supportHTML = cmd === 'htmlcreate';

			this.checkCan('minigame', null, room);
			if (supportHTML) this.checkCan('declare', null, room);
			this.checkChat();
			if (room.minorActivity) {
				return this.errorReply(this.tr`There is already a poll or announcement in progress in this room.`);
			}

			const source = supportHTML ? this.checkHTML(target) : Chat.formatText(target);

			room.minorActivity = new Announcement(room, {source});
			room.minorActivity.display();
			room.minorActivity.save();

			this.roomlog(`${user.name} used ${message}`);
			this.modlog('ANNOUNCEMENT');
			return this.privateModAction(room.tr`An announcement was started by ${user.name}.`);
		},
		newhelp: [`/announcement create [announcement] - Creates an announcement. Requires: % @ # &`],

		timer(target, room, user) {
			room = this.requireRoom();
			if (!room.minorActivity || room.minorActivity.activityId !== 'announcement') {
				return this.errorReply(this.tr`There is no announcement running in this room.`);
			}
			const announcement = room.minorActivity;

			if (target) {
				this.checkCan('minigame', null, room);
				if (target === 'clear') {
					if (!announcement.endTimer()) return this.errorReply(this.tr("There is no timer to clear."));
					return this.add(this.tr("The announcement timer was turned off."));
				}
				const timeout = parseFloat(target);
				if (isNaN(timeout) || timeout <= 0 || timeout > 0x7FFFFFFF) return this.errorReply(this.tr("Invalid time given."));
				announcement.endTimer();
				announcement.runTimeout(timeout);
				room.add(`The announcement timer was turned on: the announcement will end in ${timeout} minute${Chat.plural(timeout)}.`);
				this.modlog('ANNOUNCEMENT TIMER', null, `${timeout} minutes`);
				return this.privateModAction(`The announcement timer was set to ${timeout} minute${Chat.plural(timeout)} by ${user.name}.`);
			} else {
				if (!this.runBroadcast()) return;
				if (announcement.timeout) {
					return this.sendReply(`The announcement timer is on and will end in ${announcement.timeoutMins} minute${Chat.plural(announcement.timeoutMins)}.`);
				} else {
					return this.sendReply(this.tr`The announcement timer is off.`);
				}
			}
		},
		timerhelp: [
			`/announcement timer [minutes] - Sets the announcement to automatically end after [minutes] minutes. Requires: % @ # &`,
			`/announcement timer clear - Clears the announcement's timer. Requires: % @ # &`,
		],

		close: 'end',
		stop: 'end',
		end(target, room, user) {
			room = this.requireRoom();
			this.checkCan('minigame', null, room);
			this.checkChat();
			if (!room.minorActivity || room.minorActivity.activityId !== 'announcement') {
				return this.errorReply(this.tr`There is no announcement running in this room.`);
			}
			const announcement = room.minorActivity;
			announcement.end();
			this.modlog('ANNOUNCEMENT END');
			return this.privateModAction(room.tr`The announcement was ended by ${user.name}.`);
		},
		endhelp: [`/announcement end - Ends a announcement and displays the results. Requires: % @ # &`],

		show: '',
		display: '',
		''(target, room, user, connection) {
			room = this.requireRoom();
			if (!room.minorActivity || room.minorActivity.activityId !== 'announcement') {
				return this.errorReply(this.tr`There is no announcement running in this room.`);
			}
			const announcement = room.minorActivity;
			if (!this.runBroadcast()) return;
			room.update();

			if (this.broadcasting) {
				announcement.display();
			} else {
				announcement.displayTo(user, connection);
			}
		},
		displayhelp: [`/announcement display - Displays the announcement`],
	},
	announcementhelp: [
		`/announcement allows rooms to run their own announcements. These announcements are limited to one announcement at a time per room.`,
		`Accepts the following commands:`,
		`/announcement create [announcement] - Creates a announcement. Requires: % @ # &`,
		`/announcement htmlcreate [announcement] - Creates a announcement, with HTML allowed. Requires: # &`,
		`/announcement timer [minutes] - Sets the announcement to automatically end after [minutes]. Requires: % @ # &`,
		`/announcement display - Displays the announcement`,
		`/announcement end - Ends a announcement. Requires: % @ # &`,
	],
};

process.nextTick(() => {
	Chat.multiLinePattern.register('/announcement (new|create|htmlcreate) ');
});
