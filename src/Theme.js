import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const Theme = ({ mode = "light", children }) => {
	const theme = createTheme({
		palette: {
			mode: mode,
		},
		breakpoints: {
			values: {
				xxs: 0,
				xs: 320,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default React.memo(Theme);
