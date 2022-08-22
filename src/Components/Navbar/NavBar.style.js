import { Box, styled, Toolbar, Typography } from "@mui/material";

export const StyledToolBar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
	position: "relative",
});

export const Logo = styled(Typography)(({ theme }) => ({
	display: "none",
	[theme.breakpoints.up("xs")]: { display: "block" },
}));
export const Search = styled("div")(({ theme }) => ({
	backgroundColor: "#fff",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

export const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alignItems: "center",
	gap: theme.spacing(2),
	cursor: "pointer",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));
export const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(1),
	cursor: "pointer",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));
