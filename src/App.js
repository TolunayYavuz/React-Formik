
import './App.css';
import {Routes,Route} from 'react-router-dom';
import General from './components/General';
import Portal from './components/Portal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<General/>}></Route>
        <Route path='/Portal' element={<Portal/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
