import { buildLegacyTheme } from "sanity"

const props = {
    "--brand": "#AA1945", // Rose red
    "--my-text": "#F9CCD3", // Rose Quartz
    "--my-bg": "#67595E", // Coffee Pot
    "--my-button": "#E8B4B8",
    "--my-hover-bg": "#EED6D3",
    "--my-focus": "#F9CCD3",
    "--my-red": "#E42256",  // red error
    "--my-yellow": "#FEC84D", //yellow warning
    "--my-green": "#00B1B0" // success

}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-bg"],
    "--white": props["--my-text"],
  
    "--gray": "#FFF",
    "--gray-base": "#fff",
  
    "--component-bg": props["--my-bg"],
    "--component-text-color": props["--my-text"],
  
    /* Brand */
    "--brand-primary": props["--brand"],
  
    // Default button
    "--default-button-color": props["--my-hover-bg"],
    "--default-button-primary-color": props["--my-button"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],
  
    /* State */
    "--state-info-color": props["--brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],
  
    /* Navbar */
    "--main-navigation-color": props["--my-bg"],
    "--main-navigation-color--inverted": props["--my-text"],
  
    "--focus-color": props["--my-focus"],
  }); 