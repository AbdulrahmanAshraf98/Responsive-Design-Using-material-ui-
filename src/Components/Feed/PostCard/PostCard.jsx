import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
	Typography,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Avatar,
	CardActions,
	Checkbox,
} from "@mui/material";
import { red } from "@mui/material/colors";
const PostCard = () => {
	return (
		<Card sx={{ margin: 2 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVert />
					</IconButton>
				}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
			<CardMedia
				component="img"
				height="10%"
				image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

				<IconButton aria-label="share">
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default PostCard;
