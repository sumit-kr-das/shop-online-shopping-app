import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      background: {
          primary: "#ffff",
        paper: '#fff',
      },
      text: {
        primary: '#fffff',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
    },
  });

  export default theme