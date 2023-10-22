import * as React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {Icon, icons} from "@react-native-ui-components/icons";
import {colors} from "@react-native-ui-components/color";

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	largeIcon: {
		width: 48,
		height: 48
	},
	smallIcon: {
		width: 24,
		height: 24
	}
});

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Icon name={icons.edit} size={32} style={styles.largeIcon} />

			<Icon
				name={icons.delete}
				color={colors.dynamic.red}
				size={32}
				style={styles.largeIcon}
			/>

			<Icon
				name={icons.delete}
				weight="bold"
				style={styles.largeIcon}
			/>

			<Icon
				name={icons.delete}
				color={colors.dynamic.green}
				style={styles.smallIcon}
			/>
		</SafeAreaView>
	);
}
