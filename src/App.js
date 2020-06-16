import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./Components/mainPage";

function App() {
  const [openbtn, setOpenBtn] = React.useState(false);

  const handleOpen = () => setOpenBtn(!openbtn);
  
  return (
    <>
      {}
      <MainPage
        handleOpen={handleOpen}
       openbtn={openbtn}
      />
    </>
  );
}

export default App;
