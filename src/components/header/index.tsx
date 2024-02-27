import React from "react";
import { HeaderContent, LogoImage } from "./styles";

export function Header() {
  return (
    <HeaderContent>
      <LogoImage source={require("../../assets/images/fisiculturista.png")} />
    </HeaderContent>
  );
}
