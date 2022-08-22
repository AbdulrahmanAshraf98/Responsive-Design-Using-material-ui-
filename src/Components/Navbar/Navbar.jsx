import { Mail, Notifications } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Icons, Logo, Search, StyledToolBar, UserBox } from "./NavBar.style";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuOpenTogglerHandler = () => {
		setMenuOpen((prvState) => !prvState);
	};
	return (
		<AppBar position="sticky">
			<StyledToolBar>
				<Logo variant="h6">NavBar</Logo>
				<Search>
					<InputBase placeholder="Search"></InputBase>
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
						sx={{ width: "30px", height: "30px" }}
						onClick={menuOpenTogglerHandler}
					/>
				</Icons>
				<UserBox onClick={menuOpenTogglerHandler}>
					<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
						sx={{ width: "30px", height: "30px" }}
					/>
					<Typography variant="span">Remy</Typography>
				</UserBox>
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					open={menuOpen}
					onClose={menuOpenTogglerHandler}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					sx={{
						top: { xxs: "2%", xs: "7%", md: "8%" },
					}}>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem>Logout</MenuItem>
				</Menu>
			</StyledToolBar>
		</AppBar>
	);
};

export default Navbar;
