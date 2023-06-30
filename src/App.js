import React, { useState } from "react";
import TextForm from "./components/TextForm";
import About from './components/About';
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');  // Weather dark mode enable or not
  const [alert, setAlert] = useState(null);


  // Show Alert in the browser

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000)

  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enable', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enable', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }




  return (
    <>
      <Router>
        <NavBar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode}></NavBar>
        <Alert alert={alert} />
        <div className="container my-5">
        </div >
        <Routes>
          <Route etact path="/about" element={<About></About>} />
          <Route etact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}></TextForm>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

