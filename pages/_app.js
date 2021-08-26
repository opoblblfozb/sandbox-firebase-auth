import React, { useReducer, useEffect, useState } from "react";

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
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

/*

*/
