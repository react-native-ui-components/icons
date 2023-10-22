import {
	requireNativeComponent,
	UIManager,
	Platform,
	processColor,
	type ProcessedColorValue
} from "react-native";
import {type IconProps} from "./types";
import type {ViewProps} from "react-native";

const LINKING_ERROR =
	`The package '@react-native-ui-components/icons' doesn't seem to be linked. Make sure: \n\n` +
	Platform.select({ios: "- You have run 'pod install'\n", default: ""}) +
	"- You rebuilt the app after installing the package\n" +
	"- You are not using Expo Go\n";

const ComponentName = "IconsView";

interface IconViewProps extends ViewProps {
	propName: string;
	propColor?: ProcessedColorValue | null;
	propContentMode?: string;
}

const IconView =
	UIManager.getViewManagerConfig(ComponentName) != null
		? requireNativeComponent<IconViewProps>(ComponentName)
		: () => {
				throw new Error(LINKING_ERROR);
		  };

export const Icon = ({name, color, contentMode, ...props}: IconProps) => {
	return (
		<IconView
			propName={name}
			propColor={processColor(color)}
			propContentMode={contentMode}
			{...props}
		/>
	);
};
