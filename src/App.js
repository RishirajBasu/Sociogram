import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box, Container, Stack } from "@mui/material";
function App() {
  return (
    <Box>
    <Navbar/>
      <Stack direction="row" spacing={5} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
