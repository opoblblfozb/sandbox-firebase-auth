import { useContext } from "react";
import AuthContext from "../src/AuthContext";
import { Login, Logout, auth } from "../src/firebase";

function IndexPage() {
  const authuser = useContext(AuthContext);
  console.log(authuser);
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <div>
        <button onClick={() => Login()}>ログイン</button>
        <button onClick={() => Logout()}>ログアウト</button>
      </div>
      <div>
        <pre>
          {authuser
            ? authuser.displayName + "でログインしています"
            : "ログインしていません"}
        </pre>
      </div>
    </div>
  );
}

export default IndexPage;
