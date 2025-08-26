import React from "react";
import Profile from "./Profile.jsx";

function App() {
  return (
    <>
      {/* Try changing this prop to Ilawan, Umipon, Buta, or Donaire */}
      <Profile isLoggedIn="Buta"/>
    </>
  );
}

export default App;
