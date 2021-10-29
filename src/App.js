/* eslint-disable */
// import { Button } from 'antd';
import { useState, useEffect, PureComponent } from 'react';
import './App.css';
import { pop, push, peek } from './react/packages/scheduler/src/SchedulerMinHeap';

window.heap = {
  pop,
  push,
  peek,
};

// function App() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     console.log(1);
//     setCount(count + 1);
//   };
//   return (
//     <div className="App" onClick={handleClick}>
//       <span>Pre Text</span>
//       React Test Text
//     </div>
//   );
// }

// class InnerApp extends PureComponent {
//   render() {
//     return (
//       <div>
//         click here
//       </div>
//     );
//   }
// }

function InnerApp({i, click}) {
  if (i === 2) {
    click(3);
  }
  return (
    <div onClick={() => click(2)}>
      click me
    </div>
  );
}

function App() {
  const [state, setState] = useState(1);
  useEffect(() => {
    console.log('useeffect');
  })
  return (
    <span>{state}</span>
  );
}

export default App;
