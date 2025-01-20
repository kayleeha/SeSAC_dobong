import Bank from "./components/Bank";
import { Box1 } from "./components/Box";
import Test from "./components/Test";

function App() {
  return (
    <>
      <h1>Redux</h1>
      {/* <Test /> */}
      <h2>여러 개의 전역 state</h2>
      <Box1 />
      <h3>bank</h3>
      <Bank />
    </>
  );
}

export default App;
