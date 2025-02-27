import "../style/Sass.scss";
import img1 from "../assets/dog.jpg";
import img01 from "../assets/practice1.png";
import img02 from "../assets/practice2.png";
import img03 from "../assets/practice3.png";
import img04 from "../assets/practice4.png";

export default function Sass() {
  return (
    <>
      <h4>SASS 사용(.scss)</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>

      {/* minin 사용해보기 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>

      {/* image 불러오기 */}
      <h2>이미지 가져오기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <h5>경로명으로 가져오기 (상대 경로)</h5>
      <img
        src="../assets/dog.jpg"
        alt="src 내부의 사진은 경로명으로 바로 접근 불가"
      />

      <h5>import 후 가져오기</h5>
      <img src={img1} alt="import 후 가져오기" />

      <h5>css에서 background-image 속성으로 접근</h5>
      <div className="src-img img-test"></div>

      <h4>2. public 폴더 내부의 이미지 가져오기</h4>
      <h5>img 태그에 경로명 넣기기</h5>
      <img
        src="/images/dog.jpg"
        alt="public 폴더 내부에서는 경로명으로 접근 가능, 단, / 이후로 접근"
      />

      <img
        src={process.env.PUBLIC_URL + "/images/dog.jpg"}
        alt="process.env.PUBLIC_URL로 접근하면 조금 더 안전함"
      />

      <h5>css에서 background-image 속성으로 접근</h5>
      <div className="public-img img-test"></div>

      <h4>실습 문제</h4>
      <div className="practice">
        {/* {images.map((image, i) => (
          <div key={i}>
            <img src={image} alt={`practice${i + 1}`} />
          </div>
        ))} */}
        <div>{img01}</div>
        <div>{img02}</div>
        <div>{img03}</div>
        <div>{img04}</div>
      </div>
    </>
  );
}
