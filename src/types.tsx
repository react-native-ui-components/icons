import {type ColorValue, type ViewProps} from "react-native";

export type IconScale = "small" | "medium" | "large";

export type IconWeight =
	| "ultralight"
	| "light"
	| "thin"
	| "regular"
	| "medium"
	| "semibold"
	| "bold"
	| "heavy";

export type IconContentMode =
	| "scale-to-fill"
	| "scale-aspect-fit"
	| "scale-aspect-fill"
	| "redraw"
	| "center"
	| "top"
	| "bottom"
	| "left"
	| "right"
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right";

export interface IconProps extends ViewProps {
	name: string;
	color?: ColorValue;
	multicolor?: boolean;
	size?: number;
	scale?: IconScale;
	weight?: IconWeight;
	contentMode?: IconContentMode;
}
