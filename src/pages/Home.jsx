import Hero from "../components/_home/Hero";
import WeDo from "../components/_home/WeDo";
import Otherfield from "../components/_home/Otherfiled";
import Subscribe from "../components/_home/Subscribe";
import OurClients from "../components/_home/OurClients";
import { useValues } from "../Context";

import React from "react";

function Home() {
  let { homeData } = useValues();
  return (
    homeData.success && (
      <>
        <Hero data={homeData.data.Section1} />
        <WeDo data={homeData.data.Section2} />
        <Otherfield data={homeData.data.Section3} />
        <Subscribe />
        <OurClients data={homeData.data.Section5} />
      </>
    )
  );
}

export default Home;
