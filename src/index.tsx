//todo allow custom icon component on web
//todo allow fill, outlined etc

import {Platform} from "react-native";

export {Icon} from "./Icon";

export const icon = (
	iosIcon: string,
	androidIcon = iosIcon,
	webIcon = iosIcon
) =>
	Platform.select({
		ios: iosIcon,
		android: androidIcon,
		default: webIcon
	});

export const icons = {
	edit: icon("pencil"),
	delete: icon("trash"),
	mail: icon("envelope")
};
