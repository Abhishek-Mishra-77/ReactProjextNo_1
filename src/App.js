import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>

      <NavBar title='TextUtils' aboutText='About TextUtils'></NavBar>
      <div className="container my-5">
            <TextForm heading="Enter the text to analyzeb below"></TextForm>
      </div>
      
    </>
  );
}

export default App;
