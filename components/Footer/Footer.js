import React from "react";

import SectionWrap from "../SectionWrap";
import SocialIcons from "../SocialIcons";
import Copyright from "../Copyright";

export const Footer = () => {
  return (
    <SectionWrap id="contact" type="secondary">
      <footer>
        <SocialIcons />
        <Copyright />
      </footer>
    </SectionWrap>
  );
};

export default Footer;
