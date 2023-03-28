
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <SecondComponent/>
      <ThrirdComponent/>
      <FourthComponent/>
    </div>
  );
}

function SecondComponent(){
  return(
    <div className="SecondComponent">SecondComponent</div>
  )
}

class ThrirdComponent extends Component{
  render(){
    return(
      <div className="ThirdComponent">ThirdComponent</div>
    )   
  }
}

class FourthComponent extends Component{
  render(){
    return(
      <div className="FourthComponent">FourthComponent</div>
    )   
  }
}


export default App;
