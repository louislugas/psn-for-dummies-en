
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/iframe";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/iframe": Record<string, never>
		};
		Pathname(): "/" | "/iframe" | "/iframe/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/audio/psn-audio-beep.mp3" | "/audio/psn-audio-button.mp3" | "/audio/psn-audio-game-over.mp3" | "/audio/psn-audio-page-flip.mp3" | "/audio/psn-audio-success.mp3" | "/audio/psn-audio-swoosh.mp3" | "/favicon.png" | "/images/avatar-ngobrol.png" | "/images/avatar-pejabat.png" | "/images/joko-widodo.png" | "/images/petani-01.svg" | "/images/petani-02.svg" | "/images/petani-03.svg" | "/images/petani-04.svg" | "/images/petani-05.svg" | "/images/petani-06.svg" | "/images/prabowo-subianto.png" | string & {};
	}
}