// import { useState } from 'react';
import './App.css';
import Hooks from './customHooks/Index';
// import RenderLoop from './useEffect/RenderLoop';
// import DepedencyState from './useEffect/DepedencyState';
// import DepedencyKosong from './useEffect/DepedencyKosong';
// import CleanupFunction from './useEffect/CleanupFunction';
// import UseCallbackComponent from './useCallback/Index';
// import Identity from './useCallback/Identity';
// import CleanUp1 from './useEffect/cleanUpFunction/CleanUp1';
// import TanpaDepedency from './useEffect/TanpaDepedency';
// import FunctionalApp from './useEffect/FunctionalApp';
// import Counter from './useState/Counter';
// import FoodsList from './useState/Foods';

function App() {
  // const [level, setLevel] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <Hooks />
        {/* <Identity /> */}
        {/* <UseCallbackComponent /> */}
        {/* <CleanupFunction /> */}
        {/* <RenderLoop /> */}
        {/* <DepedencyState /> */}
        {/* <DepedencyKosong /> */}
        {/* <TanpaDepedency /> */}
        {/* <CleanUp1 /> */}
        {/* <FunctionalApp level={level} />
        <br />
        <button onClick={() => setLevel(level + 1)}>Add Level</button> */}
        {/* <FoodsList /> */}
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
