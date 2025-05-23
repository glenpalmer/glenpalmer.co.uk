import React from "react";
import profileImageAboutMe from "../../../../public/images/profileImageAboutMe.png";

const AboutMeProfileImage = () => {
  return (
    <div>
      <img
        src={profileImageAboutMe}
        className="h-[378px] w-[283px] mask-t-from-75% mask-b-from-75% mask-r-from-65% mask-l-from-65%"
      />
    </div>
  );
};

export default AboutMeProfileImage;
