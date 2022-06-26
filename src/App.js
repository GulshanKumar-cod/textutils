import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        // about="About Us"
        mode={mode}
        toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
{/* <Routes> */}
  {/* <Route exact path="/about" element={<About />} /> */}
  {/* <Route exact path="/" element= */}
  <TextForm showAlert={showAlert} heading="Try Text Utils - Word counter, Character counter, Remove extra spaces" mode={mode}/>
{/* </Routes> */}
       </div>
         {/* </BrowserRouter> */}
       </>
  );
}

export default App;
