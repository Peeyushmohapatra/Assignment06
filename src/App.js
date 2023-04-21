import './App.css';
import Bottomcontainer from './Components/Bottomcontainer/Bottomcontainer';
import Header from './Components/Header/Header';
import Uppercontainer from './Components/Uppercontainer/Uppercontainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Uppercontainer/>
      <Bottomcontainer/>
    </div>
  );
}

export default App;
