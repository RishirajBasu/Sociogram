import {
  Avatar,
  Box,
  FormControlLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';

const sidebar = (props) => {
  // shortcuts list
  // p=padding
  // bgcolor= backgroundColor
  return (
    <Box flex={0.5} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      {/* home */}
      <Box sx={{ position:'fixed' }}>
      <List sx={{ width: "100%", borderRadius:"5px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
               <HomeRoundedIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      {/* pages */}
      <List sx={{ width: "100%",  borderRadius:"5px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
               <MenuBookRoundedIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Pages" />
        </ListItem>
      </List>
       {/* Maketplace */}
      
      <List sx={{ width: "100%",  borderRadius:"5px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
               <StorefrontRoundedIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Marketplace" />
        </ListItem>
      </List>
      {/* groups */}
      <List sx={{ width: "100%",  borderRadius:"5px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
               <GroupsRoundedIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Groups" />
        </ListItem>
      </List>
      {/* Settings */}
      <List sx={{ width: "100%",  borderRadius:"5px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
               <SettingsRoundedIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      {/* darkmode */}
      <List sx={{ width: "100%",  borderRadius:"5px" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
               <NightlightRoundRoundedIcon/>
            </Avatar>
          </ListItemAvatar>
          <FormControlLabel control={<Switch color="error" onChange={(e)=>{props.setMode(props.mode==='light'?'dark':'light')}} />} label="DarkMode" />
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default sidebar;
