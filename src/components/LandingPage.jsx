import React from "react";
//componets
import SearchBar from "../components/SearchBar";

//media
import SunsetVideo from "../media/trimSunset.mp4";
import SunsetPic from "../media/sunset.png";
//styled components
import { Showcase } from "../styledcomponents/LandingPageStyling";
import { VideoContainer } from "../styledcomponents/LandingPageStyling";
import { Video } from "../styledcomponents/LandingPageStyling";

export default function LandingPage() {
  return (
    <Showcase>
      <VideoContainer img={SunsetPic}>
        <Video autoPlay loop muted>
          <source src={SunsetVideo} type="video/mp4" />
        </Video>
      </VideoContainer>
      <div className="content">

        <SearchBar />
      </div>
    </Showcase>
  );
}