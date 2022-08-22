import { Box, CssBaseline, Stack } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Sidebar from "./Components/Sidebar/Sidebar";

import Theme, { theme } from "./Theme";
function App() {
	const [theme, setTheme] = useState("light");
	const switchThemeHandler = () => {
		setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
	};
	return (
		<Theme mode={theme}>
			<CssBaseline />
			<Box bgcolor={"background.default"} color={"text.primary"}>
				<Navbar />
				<Stack direction="row" spacing={2} justify="space-between">
					<Sidebar switchThemeHandler={switchThemeHandler} />
					<Feed />
					<Rightbar />
				</Stack>
			</Box>
		</Theme>
	);
}

export default App;
