import style from "../style/style.module.css";
import classNames from "classnames";
import Names from "classnames/bind";

export default function ModuleCSS() {
  const setting = Names.bind(style);
  return (
    <div className={style.container}>
      <h4>module.css 적용</h4>
      <div className={style.box2}>
        <div>안녕하세요</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>
        클래스를 여러 개 지정하는 방법 1(템플릿 리터럴)
      </div>
      <div className={[style.first, style.second].join(" ")}>
        클래스를 여러 개 지정하는 방법 2(배열과 join 이용)
      </div>
      <div className={classNames(style.first, style.second)}>
        클래스를 여러 개 지정하는 방법 3(classnames 모듈 설치)
      </div>
      <div className={setting("first", "second")}>
        classnames 모듈 사용 더해보기
      </div>
    </div>
  );
}
