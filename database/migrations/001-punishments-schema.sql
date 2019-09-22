--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS punishments (
	punishType TEXT NOT NULL,
	userid TEXT NOT NULL,
	ips TEXT NOT NULL,
	userids TEXT NOT NULL,
	expireTime INTEGER NOT NULL,
	reason TEXT NOT NULL,
	PRIMARY KEY (punishType, userid)
);

CREATE TABLE IF NOT EXISTS room_punishments (
	punishType TEXT NOT NULL,
	roomid TEXT NOT NULL,
	userid TEXT NOT NULL,
	ips TEXT NOT NULL,
	userids TEXT NOT NULL,
	expireTime INTEGER NOT NULL,
	reason TEXT NOT NULL,
	PRIMARY KEY (punishType, roomid, userid)
);

CREATE TABLE IF NOT EXISTS shared_ips (
	ip TEXT NOT NULL,
	note TEXT NOT NULL,
	PRIMARY KEY (ip)
);

CREATE TABLE IF NOT EXISTS ip_banlist (
	ip TEXT NOT NULL,
	PRIMARY KEY (ip)
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE punishments;
DROP TABLE room_punishments;
DROP TABLE shared_ips;
DROP TABLE ip_banlist;
