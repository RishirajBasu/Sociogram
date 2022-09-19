import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
const Rightbar = () => {
  return (
    <Box flex={0.75} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Cindy Baker" src="./img/models/model3.jpg" />
          <Avatar alt="Agnes Walker" src="./img/models/model4.jpg" />
          <Avatar alt="Trevor Henderson" src="./img/models/model5.jpg" />
          <Avatar alt="Trevor Henderson" src="./img/models/model6.jpg" />
          <Avatar alt="Trevor Henderson" src="./img/people/2.png" />
          <Avatar alt="Trevor Henderson" src="./img/people/1.png" />
          <Avatar alt="Trevor Henderson" src="./img/people/3.png" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={3}>
          Last seen
        </Typography>
        <ImageList cols={3} rowHeight={100} mt={1} mb={1}>
          {/* * */}
          <ImageListItem sx={{ marginRight: "2px" }}>
            <img src="./img/banner/b1.jpg" alt="" />
          </ImageListItem>
          {/* * */}
          <ImageListItem sx={{ marginRight: "2px" }}>
            <img src="./img/banner/b2.jpg" alt="" />
          </ImageListItem>
          {/* * */}
          <ImageListItem sx={{ marginRight: "2px" }}>
            {" "}
            <img src="./img/banner/b4.jpg" alt="" />
          </ImageListItem>
          {/* * */}
          <ImageListItem sx={{ marginRight: "2px" }}>
            {" "}
            <img src="./img/banner/b17.jpg" alt="" />
          </ImageListItem>
          {/* * */}
          <ImageListItem sx={{ marginRight: "2px" }}>
            {" "}
            <img src="./img/banner/b18.jpg" alt="" />
          </ImageListItem>
          {/* * */}
          <ImageListItem sx={{ marginRight: "2px" }}>
            {" "}
            <img src="./img/banner/b19.jpg" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={3}>
          Lastest Conversations
        </Typography>
        {/* */}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="./img/people/1.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
