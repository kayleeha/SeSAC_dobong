import grass from "../practice/grass.png";

export default function Practice2() {
  return (
    <>
      <div className="larva">
        <div className="body body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>

        {/*  /public/images/grass.png 로드 */}
        <img className="grass" src={grass} alt="잔디" />
      </div>
    </>
  );
}
