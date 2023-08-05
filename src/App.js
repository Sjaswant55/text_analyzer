import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="	#042743";
      showAlert("Dark mode Enabled!","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#F5FFFA";
      showAlert("Light mode Enabled!","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode} />
            <Footer/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextAnalyzer - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </Router>
    </> 
  );
}

export default App;
