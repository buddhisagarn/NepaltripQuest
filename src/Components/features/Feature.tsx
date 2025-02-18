import "./feature.css";
export default function Feature() {
  return (
    <>
      <h2 className="feature-dis">Featured Destinations</h2>
      <div className="feature">
        <div className="feature-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/dhaulagiri-trek1718028360.jpg"
            alt=""
          />
          <p className="paragraph-2">Manaslu</p>
        </div>
        <div className="feature-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/fullsizeoutput-10-e15530024172521715583405.jpg"
            alt=""
          />
          <p className="paragraph-2">Aannapurna Region</p>
        </div>
        <div className="feature-child">
          <img
            src="https://nepaltripquest.com/assets/tenant/uploads/media-uploader/nepaltripquest-com/pexels-nanda-ram-gharti-12798654.jpg"
            alt=""
          />
          <p className="paragraph-2">Everest Region</p>
        </div>
      </div>
    </>
  );
}
