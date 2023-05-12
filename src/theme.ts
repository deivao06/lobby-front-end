import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#7CA982",
        contrastText: "#fff",
      },
      secondary: {
        main: "#8D5B4C",
        contrastText: "#fff",
      },
      text: {
        primary: "#F1F7ED",
        secondary: "#000000",
      }
    },
    typography: {
      fontFamily: [
        'Concert One',
        'cursive',
      ].join(','),
    }
});