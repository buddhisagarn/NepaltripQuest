import ButtonLearnMore from "./buttonlearnmore";
import "../index.css";
function AboutHimal() {
  return (
    <>
      <div className="abouthimal">
        <h1>
          <span style={{ color: "green" }}>A</span>bout US
        </h1>
        <br />
        <p>
          Nepal Trip Quest stands as your premier partner for trekking
          adventures across the breathtaking landscapes of Nepal. Formed by a
          team of experienced and highly qualified professionals, Nepal Trip
          Quest offers unparalleled expertise in navigating the trails and peaks
          of this majestic country. Our team’s extensive knowledge of local
          destinations ensures that each journey is both safe and unforgettable.
          Our services are deeply rooted in a comprehensive understanding of
          Nepal’s culture and geography. With a robust network and strong local
          connections, we deliver exceptional trekking experiences tailored to
          both novice trekkers and seasoned adventurers. Our offerings range
          from classic treks like Everest Base Camp and Annapurna Circuit to
          off-the-beaten-path treks in Manaslu Circuit and Upper Mustang. For
          those with limited time, our short treks in regions like Ghorepani
          Poon Hill offer breathtaking views and rich cultural encounters.
          Additionally, we provide customized treks to suit specific interests
          and fitness levels. At Nepal Trip Quest, our commitment to quality and
          safety is unwavering. We focus on small group sizes to ensure
          personalized service and a high standard of care.
        </p>
        <ButtonLearnMore />
      </div>
    </>
  );
}
export default AboutHimal;
