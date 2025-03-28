import {Routes,Route } from 'react-router-dom';
import Header from "./Layout/Header/Header";
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
