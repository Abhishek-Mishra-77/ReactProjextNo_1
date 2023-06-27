import React, { useState } from "react";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light');  // Weather dark mode enable or not
  const [alert, setAlert] = useState(null);


  // Show Alert in the browser

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enable', 'success');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enable', 'success');
    }
  }




  return (
    <>
      <NavBar
        title='TextUtils'
        aboutText='About TextUtils'
        mode={mode}
        toggleMode={toggleMode}>
      </NavBar>

      <Alert alert={alert} />

      <div className="container my-5">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}>
        </TextForm>

        
      </div>

    </>
  );
}

export default App;
