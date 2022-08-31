import React from "react";
import AppTitle from "./AppTitle";
import AppMotto from "./AppMotto";
import AppContainer from "./AppContainer";
import AppContact from "./AppContact";
import AppExperience from "./AppExperience";
import AppGraphic from "./AppGraphic";
import AppBook from "./AppBook";

function App() {
  return (
    <div className="app">
      <AppBook />
      <AppContainer
        items={
          <>
            <AppTitle />
            <AppMotto />
            <AppContact />
            <AppExperience />
          </>
        }
      />
      <AppGraphic />
    </div>
  );
}

export default App;
