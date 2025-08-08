import { Component, useState } from "react";
import "./App.css";

// ----------- 함수형 컴포넌트 ------------
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const incrementCounter = () => {
  setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const setCounterNumber = () => {
    setCounter(inputValue)
  }

  return (
    <>
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} incrementCounter={incrementCounter} />
      <MinusButton setCounter={setCounter} decrementCounter={decrementCounter} />
      <CounterInput 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        setCounterNumber={setCounterNumber}
      />
    </>
  )
}

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
  return (
    <>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(event) => 
          setInputValue(event.target.value)}
      />
      <button onClick={setCounterNumber}>입력</button>
    </>
  );
}

function PlusButton({ setCounter, incrementCounter }) {
  return <button onClick={incrementCounter}>+</button>;
}


function MinusButton({ setCounter, decrementCounter }) {
  return <button onClick={decrementCounter}>-</button>;
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