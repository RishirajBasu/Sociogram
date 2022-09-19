import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import { Add as AddIcon, CalendarMonth } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
const Add = () => {
  const ModalBox = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    gap: "10px",
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: "10px",
          left: { xs: "50%", sm: "91px" },
        }}
      >
        <Fab aria-label="add"  >
          <AddIcon
          sx={{color:"#510219"}}
            onClick={() => {
              setOpen(true);
            }}
          />
        </Fab>
      </Tooltip>
      <ModalBox
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={400} bgcolor={"background.default"} color={"text.primary"} p={5} borderRadius={5}>
          <Typography variant="h6" color="Grey" textAlign={"center"} mb={2}>
            Create Posts
          </Typography>
          <UserBox>
            <Avatar src="./img/rishirajbasu.jpeg">RB</Avatar>
            <Typography variant="h6">Rishiraj Basu</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
            sx={{ width: "100%" }}
            mt={2}
          />
          <Stack direction="row" gap={2} mt={2} mb={2}>
            <SentimentVerySatisfiedIcon sx={{ color: "#edad0c" }} />
            <ImageIcon sx={{ color: "#720404" }} />
            <VideoCallIcon sx={{ color: "#094b00" }} />
            <PersonAddAlt1Icon sx={{ color: "#06709f" }} />
            <GroupAddIcon sx={{ color: "#022b3d" }} />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button   sx={{backgroundColor:"#510219", "&:hover":{
                backgroundColor:"#f47405"
            }}}>Post</Button>
            <Button sx={{width:"100px", backgroundColor:"#a2081d", "&:hover":{
                backgroundColor:"#f47405"
            }}}><CalendarMonth /></Button>
          </ButtonGroup>
        </Box>
      </ModalBox>
    </>
  );
};

export default Add;
