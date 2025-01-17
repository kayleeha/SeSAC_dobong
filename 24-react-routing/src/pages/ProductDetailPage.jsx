import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  const nav = useNavigate();
  console.log(products);
  // params를 통해서 몇 번 id 정보를 찾고 있는 지 확인
  const params = useParams();
  console.log("params", params); // { productID: '1'}
  // key 이름의 출처? Route 컴포넌트의 path props 확인~!

  // 객체 구조 분해 할당
  const { productID } = useParams();
  console.log(productID); // 1

  // id를 기준으로 products에서 원하는 데이터 찾기
  const [targetProduct] = products.filter((pr) => pr.id === Number(productID));

  console.log(targetProduct); // {id, name, body, email} or undefined

  if (!targetProduct) {
    return <main>없는 상품이에요!</main>;
  }

  return (
    <main>
      <p>여기는 상품 디테일 페이지</p>
      <button onClick={() => nav(-1)}>뒤로 가기</button>
      <button onClick={() => nav("/")}> 홈으로</button>
      <ul>
        <li>판매 번호 : {targetProduct.id}</li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.email}</li>
        <li>상세 설명 : {targetProduct.body}</li>
      </ul>
    </main>
  );
}
