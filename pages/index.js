import { Login, Logout, auth } from "../src/firebase";

function IndexPage() {
  // const authuser = useContext(AuthContext);
  // console.log(authuser);
  console.log(auth.currentUser);
  return (
    <div>
      <h1>Hello Next.js π</h1>
      <div>
        <button onClick={() => Login()}>γ­γ°γ€γ³</button>
        <button onClick={() => Logout()}>γ­γ°γ’γ¦γ</button>
      </div>
      <div>
        <pre>
          {auth.currentUser
            ? auth.currentUser.displayName + "γ§γ­γ°γ€γ³γγ¦γγΎγ"
            : "γ­γ°γ€γ³γγ¦γγΎγγ"}
        </pre>
      </div>
    </div>
  );
}

export default IndexPage;
