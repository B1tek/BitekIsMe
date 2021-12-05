export interface Presance {
	spotify: Spotify | null;
	listening_to_spotify: boolean;
	kv: Record<string, string>;
	discord_user: DiscordUser;
	discord_status: string;
	activities: Activity[];
	active_on_discord_web: boolean;
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
}
export interface Spotify {
	track_id: string;
	timestamps: SpotifyTimestamps;
	song: string;
	artist: string;
	album_art_url: string;
	album: string;
}

export interface SpotifyTimestamps {
	start: number;
	end: number;
}

export interface DiscordUser {
	username: string;
	public_flags: number;
	id: string;
	discriminator: string;
	avatar: string;
}

export interface Activity {
	type: number;
	timestamps: Timestamps;
	state: string;
	name: string;
	id: string;
	details: string;
	created_at: number;
	assets: Assets;
	application_id: string;
	sync_id?: string;
}

export interface Timestamps {
	start: number;
}

export interface Assets {
	small_text: string;
	small_image: string;
	large_text: string;
	large_image: string;
}
