import React ,{useState} from "react";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";

function App() {

  const [mode , setMode] = useState('light');  // Weather dark mode enable or not

  const toggleMode = () => {
      if(mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#042743' 
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white' 
      }
  }

  return (
    <>
      <NavBar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode}></NavBar>
      <div className="container my-5">
            <TextForm heading="Enter the text to analyze below"  mode={mode}></TextForm>
      </div>
      
    </>
  );
}

export default App;
