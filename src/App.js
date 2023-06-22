import React, { useState } from "react";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {

  const [Mode, setMode] = useState('light'); // Dark mode unable or not 


  // BackGround Change white to  dark
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <NavBar
        title='TextUtils'
        aboutText='About'
        toggleMode={toggleMode}
        mode={Mode}></NavBar>
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze below" mode={Mode}></TextForm>
        {/* <About></About> */}
      </div>

    </>
  );
}

export default App;
