import { Box, Stack } from "@mui/material";
import "./App.css";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
	return (
		<>
			<Navbar />
			<Box>
				<Stack direction="row" spacing={2} justify="space-between">
					<Sidebar />
					<Feed />
				</Stack>
			</Box>
		</>
	);
}

export default App;
