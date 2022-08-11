import Hero from "../components/_home/Hero";
import WeDo from "../components/_home/WeDo";
import Otherfield from "../components/_home/Otherfiled";
import Subscribe from "../components/_home/Subscribe";
import OurClients from "../components/_home/OurClients";
import { useValues } from "../Context";

import { useEffect } from "react";

function Home() {
  let { homeData, purify, loading } = useValues();

  useEffect(() => {
    document.documentElement.querySelector("title").textContent =
      "Workceptive | IT and IT enabled Service Provider";
  }, []);

  return !loading && homeData.success ? (
    <>
      <Hero data={homeData.data.Section1} purify={purify} />
      <WeDo data={homeData.data.Section2} purify={purify} />
      <Otherfield data={homeData.data.Section3} purify={purify} />
      <Subscribe />
      <OurClients data={homeData.data.Section5} />
    </>
  ) : (
    <div style={{ height: "100vh" }}></div>
  );
}

export default Home;
