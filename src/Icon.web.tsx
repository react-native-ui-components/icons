//todo this file needs implementing

import {StyleSheet, View} from "react-native";
import {type IconProps} from "./types";

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export const Icon = (props: IconProps) => {
	return (
		<View {...props}>
			<View
				style={[styles.container, {backgroundColor: props.color}]}
			/>
		</View>
	);
};
