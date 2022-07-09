import React from "react";
import { Global } from "@emotion/react";

export const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face{
            font-family: 'Overpass';
            src: url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap')
        `}
    />
  );
};
