import "./accordain.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  return (
    <div className="accordian-main">
      <div className="accordion" style={{ border: "none", width: "50%" }}>
        <Accordion style={{ border: "none", margin: "0" }}>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                What is Nepal Trip Quest?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Nepal Trip Quest is a dedicated trekking company formed by a
                team of experienced and highly qualified professionals who
                specialize in trekking adventures across the majestic landscapes
                of Nepal.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                What types of treks does Nepal Trip Quest offer?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                We offer a variety of trekking packages including classic treks
                like Everest Base Camp and Annapurna Circuit,
                off-the-beaten-path treks such as the Manaslu Circuit and Upper
                Mustang, short treks for those with limited time, and customized
                treks tailored to individual interests and fitness levels.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                Are the treks suitable for beginners?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Yes, we have trekking packages designed for all levels of
                experience. Whether you are a novice trekker or a seasoned
                adventurer, we have the perfect trek for you.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                What makes Nepal Trip Quest different from other trekking
                companies?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Our extensive local knowledge, deep-rooted connections, and
                commitment to safety and excellence set us apart. We offer
                personalized service, small group sizes, and competitive pricing
                to ensure a high-quality trekking experience.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                How experienced are the guides at Nepal Trip Quest?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Our guides are highly experienced and knowledgeable, having
                spent years exploring the trails and peaks of Nepal. They are
                well-versed in the local culture and geography, ensuring a safe
                and enriching trekking experience.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                Does it is Worth to spend money on trek?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Nepal Trip Quest is a dedicated trekking company formed by a
                team of experienced and highly qualified professionals who
                specialize in trekking adventures across the majestic landscapes
                of Nepal.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                What's the ratio of trek trip bad vs good ratio?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Nepal Trip Quest is a dedicated trekking company formed by a
                team of experienced and highly qualified professionals who
                specialize in trekking adventures across the majestic landscapes
                of Nepal.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                Does Trekking helps in mental strenght?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Nepal Trip Quest is a dedicated trekking company formed by a
                team of experienced and highly qualified professionals who
                specialize in trekking adventures across the majestic landscapes
                of Nepal.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem style={{ border: "none" }}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ width: "90%", margin: "auto" }}>
                Was you ever been to trek?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ width: "90%", margin: "auto" }}>
                Nepal Trip Quest is a dedicated trekking company formed by a
                team of experienced and highly qualified professionals who
                specialize in trekking adventures across the majestic landscapes
                of Nepal.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="form">
        <form action="">
          <label htmlFor="title" className="label-1">
            Still got Questions ?
          </label>
          <br />
          <br />
          <label htmlFor="name">Yourname</label>
          <br />
          <input type="text" name="name" placeholder="your name" />
          <br />
          <br />
          <label htmlFor="name">Subject</label>
          <br />
          <input type="text" name="name" placeholder="your topic" />
          <br />
          <br />
          <label htmlFor="name">Email</label>
          <br />
          <input type="text" name="name" placeholder="your email" />
          <br />
          <br />
          <label htmlFor="address">Address</label>
          <br />
          <input type="text" name="address" placeholder="your address" />
          <br />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input type="text" name="phone" placeholder="your phone" />
          <br />
          <br />
          <textarea cols={35} rows={9}></textarea>
          <br />
          <br />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
