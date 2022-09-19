import { Box, Checkbox } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
const feed = (props) => {
  // bgcolor="#f8f5f5"
  // bgcolor="#021833" -dark
  let modecolor
  if(props.mode==='light'){
    modecolor="#f8f5f5"
  }
  else{
    modecolor="#021833"
  }
  return (
    <Box bgcolor={modecolor} flex={2} p={2}>
      {/* card 1 */}
      <Card sx={{ margin: "20px 10px" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src="./img/models/model6.jpg"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="800px"
          image="./img/models/model6.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" , justifyContent:'space-between'}}>
          <IconButton>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </IconButton>
          <IconButton>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </IconButton>
        </CardActions>
      </Card>

      {/* card 2 */}
      <Card sx={{ margin: "20px 10px" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src="./img/models/model2.jpg"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="800px"
          image="./img/models/model2.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" , justifyContent:'space-between'}}>
          <IconButton>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </IconButton>
          <IconButton>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </IconButton>
        </CardActions>
      </Card>

      {/* card 3 */}
      <Card sx={{ margin: "20px 10px" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src="./img/models/model3.jpg"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="800px"
          image="./img/models/model3.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" , justifyContent:'space-between'}}>
          <IconButton>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </IconButton>
          <IconButton>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </IconButton>
        </CardActions>
      </Card>

      {/* card 4 */}
      <Card sx={{ margin: "20px 10px" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src="./img/models/model4.jpg"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="800px"
          image="./img/models/model4.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" , justifyContent:'space-between'}}>
          <IconButton>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </IconButton>
          <IconButton>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </IconButton>
        </CardActions>
      </Card>

       {/* card 5 */}
       <Card sx={{ margin: "20px 10px" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src="./img/models/model5.jpg"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="800px"
          image="./img/models/model5.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" , justifyContent:'space-between'}}>
          <IconButton>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </IconButton>
          <IconButton>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </IconButton>
        </CardActions>
       </Card>
        {/* card 6 */}
      <Card sx={{ margin: "20px 10px" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src="./img/models/model1.jpg"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="800px"
          image="./img/models/model1.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex" , justifyContent:'space-between'}}>
          <IconButton>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </IconButton>
          <IconButton>
            <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          </IconButton>
        </CardActions>
      </Card>

      

    </Box>
  );
};

export default feed;
