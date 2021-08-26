import React, { useReducer, useEffect, useState } from "react";

import AuthContext from "../src/AuthContext";
import authReducer from "../src/authReducer";
import { listenAuthState } from "../src/firebase";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  );
  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);
  return (
    <AuthContext.Provider value={state}>
      <text>weei</text>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
