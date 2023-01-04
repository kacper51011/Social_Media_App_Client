import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface SimplePaletteColorOptions {
    main?: string;
    mediumMain?: string;
    medium?: string;
  }

  interface PaletteColor {
    main?: string;
    mediumMain?: string;
    medium?: string;
  }
}
