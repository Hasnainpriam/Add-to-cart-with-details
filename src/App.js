import './App.css';
import FullShow from './components/FullShow/FullShow';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App' style={{backgroundColor:'aliceblue'}}>
     <Header></Header>
     <FullShow></FullShow>
    </div>
  );
}

export default App;
