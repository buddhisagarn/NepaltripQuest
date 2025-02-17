import "./activity.css";
function Activity() {
  return (
    <div className="cls-activity">
      <h2>
        <span style={{ color: "green" }}>O</span>ur Activity
      </h2>
      <p className="crowd">Experience Away From Crowd</p>
      <br />
      <div className="himal-img">
        <div className="hel">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/safari1715506438.png"
            alt=""
            height="50px"
          />
          <p>Safari</p>
        </div>
        <div className="hel">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/trekking1715506298.png"
            alt=""
            height="50px"
          />
          <p>Trekking</p>
        </div>
        <div className="hel">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/expedited1715506328.png"
            alt=""
            height="50px"
          />
          <p>Sightseeing</p>
        </div>
        <div className="hel">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/adventure1715506355.png"
            alt=""
            height="50px"
          />
          <p>Adventure Sports</p>
        </div>
        <div className="hel">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/travel-and-tourism1715506387.png"
            alt=""
            height="50px"
          />
          <p>Tours</p>
        </div>
      </div>
    </div>
  );
}
export default Activity;
