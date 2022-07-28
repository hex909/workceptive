import Clients from "../components/_about/Clients";
import RequsetCallback from "../components/_about/RequsetCallback";
import Tabs from "../components/_about/Tabs";
import WorkCard from "../components/_about/WorkCard";
import { useValues } from "../Context";

function About() {
  let { aboutData } = useValues();

  return (
    aboutData.success && (
      <>
        <article className="about maxWidth">
          <section className="about__hero">
            {/* <h1 className="title">
            About <span className="company">Workceptive</span>
          </h1> */}
            <div className="about__container">
              <div className="img__container">
                <img
                  className="img__container__placeholder"
                  src={aboutData.data.Section1.Image}
                />
              </div>
              <div className="about__content">
                <p className="shot__para">
                  {aboutData.data.Section1["Paragraph 1"]}
                </p>
                <p className="long__para">
                  {aboutData.data.Section1["Paragraph 2"]}
                </p>
              </div>
            </div>
          </section>

          <section className="works">
            <h2 className="title">
              Our{" "}
              <span className="special">{aboutData.data.Section2.Heading}</span>
            </h2>

            <div className="cards">
              {aboutData.data.Section2.slide.map((e, i) => {
                return (
                  <WorkCard
                    key={i}
                    imgSRC={e.Image}
                    heading={e.Heading}
                    paragrah={e.Details}
                  />
                );
              })}
            </div>
          </section>

          <section className="tab__container">
            <Tabs tabs={aboutData.data.Section3} />
          </section>

          <Clients clients={aboutData.data.Section4} />
        </article>
        <RequsetCallback />
      </>
    )
  );
}

export default About;
