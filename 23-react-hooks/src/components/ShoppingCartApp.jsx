import React, { useState, useCallback, useEffect } from "react";

const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback(
    (product) => {
      setCart((prev) => [
        ...prev,
        ...products.filter((el) => el.name === product),
      ]);
    },
    [
      /* 의존성 배열 */
    ]
  );

  const removeFromCart = useCallback(
    (productId) => {
      // 장바구니에서 상품 제거 로직 작성
      console.log(productId);
      setCart((prev) => prev.filter((el) => el.id !== productId));
    },
    [
      /* 의존성 배열 */
      // productId,
    ]
  );

  // addToCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {}, [addToCart]);

  // removeFromCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {}, [removeFromCart]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products?.map((el) => {
          return (
            <div key={el.id}>
              <span>{el.name}</span>
              <button onClick={() => addToCart(el.name)}>Add to Cart</button>
            </div>
          );
        })}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart?.map((el) => {
          return (
            <div key={el.id}>
              <span>{el.name}</span>
              <button onClick={() => removeFromCart(el.id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingCartApp;
