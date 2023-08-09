import {StyleSheet, View, Text} from "react-native";
import {} from "@react-native-ui-components/icons";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Todo</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
