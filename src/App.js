import Tree from "./Tree";
import Contact from './Contact'
import {Routes, Route,  BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
     
      <Routes>
      <Route path="/" element={<Tree />} />
       <Route path='/Contact' element= {<Contact/>} />
      </Routes>
    
     
    </div>
  );
}

export default App;
