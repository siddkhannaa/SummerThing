import logo from './logo.svg';
import './App.css';

function App() {

  const getInputValue = (event) => {
    const userValue = event.target.value;

    console.log(userValue);
  };

  return [
    <header class="topnav">
    </header>,
    <div class="moob" >hi</div>,
    <div className = "boxes"> 
      <input className="rounded" type="text" placeholder="Person 1" onChange={getInputValue} />
      <button className="rounded" />
      <input className="rounded" type="text" placeholder="Person 2" onChange={getInputValue} />
    </div>,
    <div className="container"></div>
  ];
}

export default App;
