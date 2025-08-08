import React, { Component, useState } from "react";
import "./App.css";

// ----------- 함수형 컴포넌트 ------------
function App() {
  const [counter, setCounter] = useState(0)
  return (
  <>
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} />
      <MinusButton setCounter={setCounter} />
  </>
  )
}

function PlusButton({setCounter}) {
  return (
    <button 
      onClick={() => {
        setCounter((prev) => prev + 1);
      }}
    >
      +
    </button>
  );
}


function MinusButton({setCounter}) {
  return (
    <button 
      onClick={() => {
        setCounter((prev) => prev - 1);
      }}
    >
      -
    </button>
  );
}

function Count ({counter}) {
  return <div>counter : {counter}</div>
}
// ----------------------------------------

// ----------------- 클래스형 컴포넌트 ---------------
// class App extends Component {
//   state = { counter: 2 }

//   incrementCounter = () => {
//     this.setState({ counter: this.state.counter + 1});
//   }
//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1});
//   }

  
//   render() {
//     return (
//       <>
//         <Count counter={ this.state.counter }/>
//         <PlusButton incrementCounter={this.incrementCounter}
//         />
//         <MinusButton decrementCounter={this.decrementCounter}/>
//       </>
//     );
//   }
// }
// class PlusButton extends Component {
//   render() {
//     return <button onClick={this.props.incrementCounter}>+</button>
//   }
// }
// class MinusButton extends Component {
//   render() {
//     return <button onClick={this.props.decrementCounter}>-</button>
//   }
// }

// class Count extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log("props", this.props);
//     return <div>counter: {this.props.counter}</div>;
//   }
// }
// --------------------------------------------------

export default App;