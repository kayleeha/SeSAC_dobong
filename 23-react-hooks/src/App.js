// import UseCallbackEx1 from "./components/UseCallbackEx1";
// import UseCallbackEx2 from "./components/UseCallbackEx2";
// import CustomHook from "./components/CustomHook";
// import Form from "./components/Form";
// import ProductFilter from "./components/ProductFilter";
// import ReactHookTest from "./components/ReactHookTest";
// import UseReducer from "./components/UseReducer";
import ShoppingCartApp from "./components/ShoppingCartApp";
// import TodoApp from "./components/TodoApp";
import useTitle from "./hooks/useTitle";
// import UseMemo1 from "./components/UseMemo1";
// import UseMemoObj from "./components/UseMemoObj";

function App() {
  useTitle("hook 배워보기");
  return (
    <>
      {/* <UseMemo1 />
      <UseMemoObj /> */}
      {/* <UseCallbackEx1 /> */}
      {/* <UseCallbackEx2 /> */}
      {/* <UseReducer /> */}
      {/* <CustomHook /> */}
      {/* <Form /> */}
      {/* <ReactHookTest /> */}
      {/* <ProductFilter /> */}
      <ShoppingCartApp />
      {/* <TodoApp /> */}
    </>
  );
}

export default App;
