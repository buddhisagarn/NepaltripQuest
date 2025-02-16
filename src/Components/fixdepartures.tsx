import Fix_First_One from "./fix-first-1";
import Fix_First_Two from "./fix-first-2";
import Fix_First_Three from "./fix-first-3";
import Fix_First_Four from "./fix-first-4";
import Fix_First_Five from "./fix-first-five";
import "../index.css";
function Fixdepartures() {
  return (
    <>
      <div className="departure-head">
        <h1>
          <span style={{ color: "green" }}>F</span>ixed Departure
        </h1>
        <p>
          We have calibrated the fixed departure dates for most of its trek and
          tour packages.
        </p>
      </div>
      <div className="first-departure">
        <Fix_First_One />
        <Fix_First_Two />
        <Fix_First_Three />
        <div className="sec-dep">
          <Fix_First_Four />
          <Fix_First_Five />
        </div>
      </div>
    </>
  );
}
export default Fixdepartures;

/*




*/
