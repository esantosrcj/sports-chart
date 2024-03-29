interface SBTeam {
	teamId: number;
	teamTricode: string;
}

export interface SBGame {
	gameId: string;
	gameTimeUTC: string;
	homeTeam: SBTeam;
	awayTeam: SBTeam;
}

export interface GameDetail {
	gameId: string;
	gameDate: string;
	gameTimeUTC: string;
	startTime: string;
	homeTeamId: number;
	homeTeam: string;
	awayTeamId: number;
	awayTeam: string;
}

export interface LUPlayer {
	personId: number;
	teamId: number;
	firstName: string;
	lastName: string;
	playerName: string;
	position: string;
	lineupStatus: string;
	rosterStatus: string;
}

export interface LUTeam {
	teamId: number;
	teamAbbreviation: string;
	players: LUPlayer[];
}

export interface LUGame {
	gameId: string;
	homeTeam: LUTeam;
	awayTeam: LUTeam;
}

export interface PlayerStats {
	PLAYER_ID: number;
	PLAYER_NAME: string;
	MIN: number;
	PTS: number;
	FGM: number;
	FGA: number;
	FG_PCT: number;
	FG3M: number;
	FG3A: number;
	FG3_PCT: number;
	FTM: number;
	FTA: number;
	FT_PCT: number;
	OREB: number;
	DREB: number;
	REB: number;
	AST: number;
	TOV: number;
	STL: number;
	BLK: number;
}

export interface GameLog extends PlayerStats {
	SEASON_YEAR: string;
	TEAM_ID: number;
	TEAM_ABBREVIATION: string;
	GAME_ID: string;
	GAME_DATE: string;
	MATCHUP: string;
}

export interface MatchupData {
	gameId: string;
	matchup: string;
	min: number;
	pts: number;
	fgm: number;
	fga: number;
	fgpct: number;
	fg3m: number;
	fg3a: number;
	fg3pct: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
}

export type Row = (string | number)[];

export interface ResultSet {
	name: string;
	headers: string[];
	rowSet: Row[];
}
