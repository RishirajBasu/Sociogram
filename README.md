<!-- The basic features of MUI as implemented in the project and beyond -->
1. buttons - 
<!-- <Button variant="contained" color="error" startIcon={<SettingsIcon/>} size="large">settings</Button> -->
variant - contains the type of the buttons used
color-error(by default error is red)
StartIcon= the icons are stored which are then imported from @mui/icons-material


<!-- creating out own themes
export const theme = createTheme({
    palette:{
        primary:{
            main:"#17460a5",
            light:"skyblue"
        },
        secondary:{
            main:"#15c630"
        }
    }
}) -->

<!-- incorporating our own themes -->
<!-- <ThemeProvider theme={theme}>
    <App />
</ThemeProvider> -->

 <!-- we can create custom elements using this emotion which means txts written within these custom elemnents will have all styles as given
  NOTE : THE VARIABLE NAMES OUT HERE FOLLOW PASCAL CASING
  const GreenButton = styled(Button)(
    {
      backgroundColor:"green",
      color:"black",
      "&:hover":{
      backgroundColor:"black ",
      color:"green",
      }
    }
  ) -->