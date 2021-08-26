import { Login, Logout, auth } from "../src/firebase";

function IndexPage() {
  // const authuser = useContext(AuthContext);
  // console.log(authuser);
  console.log(auth.currentUser);
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <div>
        <button onClick={() => Login()}>ログイン</button>
        <button onClick={() => Logout()}>ログアウト</button>
      </div>
      <div>
        <pre>
          {auth.currentUser
            ? auth.currentUser.displayName + "でログインしています"
            : "ログインしていません"}
        </pre>
      </div>
    </div>
  );
}

export default IndexPage;
