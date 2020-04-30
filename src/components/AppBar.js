import * as React from "react";
import { AppBar } from "react-native-paper";
import { DrawerActions } from "react-navigation-drawer";

const Header = ({ menu, title, navigation }) => (
	<AppBar.Header>
		{menu === true ? (
			<AppBar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
		) : (
			<AppBar.BackAction onPress={() => navigation.goBack(null)} />
		)}

		<AppBar.Content
			titleStyle={{
				fontWeight: "bold",
				fontSize: 20,
			}}
			title={title}
			subtitle={null}
		/>
	</AppBar.Header>
);

export default Header;
