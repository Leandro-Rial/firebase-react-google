import React from "react";
import { useContext } from "react";
import { AuthPage } from "./components/AuthPage";
import { UserContext } from "./components/UserContext";

function App() {
  const currentUser = useContext(UserContext)

  return (
    <>
      {currentUser && <>
          <img
            src={currentUser.photoURL}
            width="300"
            height="300"
            alt="Avatar"
          />
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
        </>}
      <AuthPage />
    </>
  );
}

export default App;
