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
    <div className = "boxes"> 
      <input className="rounded" type="text" placeholder="Person 1" onChange={getInputValue} />
      <input className="rounded" type="text" placeholder="Person 2" onChange={getInputValue} />
      <button className="rounded" />
    </div>,
    <div className="container"></div>
  ];
}

export default App;
