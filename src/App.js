import { Button, styled } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';

function App() {
  // we can create custom elements using this emotion which means txts written within these custom elemnents will have all styles as given
  // NOTE : THE VARIABLE NAMES OUT HERE FOLLOW PASCAL CASING
  const GreenButton = styled(Button)(
    {
      backgroundColor:"green",
      color:"black",
      "&:hover":{
      backgroundColor:"black ",
      color:"green",
      }
    }
  )
  const BeigeButton = styled(Button)({
      backgroundColor:"beige",
      color:"black",
      "&:hover":{
        backgroundColor:"red",
        color:"beige"
      }
  })
  return (
    <div className="App">
      <Button variant="text" size="small" color="secondary" >Text</Button>
      <Button variant="contained" color="secondary" startIcon={<AllInclusiveRoundedIcon/>} size="large" sx={{
        backgroundColor:"black",
        color:"tomato",
        // to give The on hover property
        "&:hover":{
          backgroundColor:"white",
          color:"tomato",
        },
        // on writing the 'disabled' attribute , this style will be applied
        "&:disabled":{
          backgroundColor:"grey",
          color:"white",
        }

      }}>loop</Button>
      <Button variant="contained" color="error" startIcon={<SettingsIcon/>} size="large">settings</Button>
      <Button variant="contained" color="success" startIcon={<FeaturedPlayListRoundedIcon/>} size="large" >Add Project</Button>
      <Button variant="outlined">Outlined</Button>
      <GreenButton>CUSTOM Green</GreenButton>
      <BeigeButton>CUSTOM beige</BeigeButton>
    </div>
  );
}

export default App;
