import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './About';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const [alert, setAlert] =useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(()=>{
      setAlert(null);
      }  ,2000);
    
  }
  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
      setInterval(() => {
      document.title="TextUtils - Dark Mode is Amazing";
        
      }, 2000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
      // setInterval(() => {
      //   document.title="TextUtils - install is now";
          
      //   }, 1500);
    }
  };
  return (
<><Router>
<Navbar title='TEXTUTILS' about='About' home='Home' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my=3">
<Routes>
          <Route excat path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route excat path="/" element={<TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
</div>
</Router>
</>
  );
} 

export default App;
