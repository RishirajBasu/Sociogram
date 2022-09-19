import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import React, { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const CustToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  color: "black",
  backgroundColor: "#8d2412",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "25%",
}));
const Icons = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"20px"
});
const Navbar = () => {
  const [open, setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <CustToolbar>
        <EmojiNatureIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography
          variant="h6"
          sx={{ display: { xs: " none ", sm: "block" } }}
        >
          Navbar
        </Typography>
        <Search>
          <InputBase placeholder="Search items" />
        </Search>
        <Icons>
          <Badge color="secondary" badgeContent={5} sx={{display:{xs:"none",sm:"block"}}}>
            <MailIcon sx={{display:{xs:"none",sm:"block"}}} />
          </Badge>
          <Badge color="secondary" badgeContent={0} showZero sx={{display:{xs:"none",sm:"block"}}}>
            <  NotificationAddOutlinedIcon sx={{display:{xs:"none",sm:"block"}}}/>
          </Badge>
          {/* This to give the profile picture */}
          {/* <Avatar alt="" src="" /> */}
          <Avatar sx={{ bgcolor: "lightpink", color:"black" }}
          onClick={(e)=>setOpen(true)} src='./img/rishirajbasu.jpeg'>RB</Avatar>
        </Icons>
      </CustToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        // this will close the menu if we click anywhere outside the avatar  
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
