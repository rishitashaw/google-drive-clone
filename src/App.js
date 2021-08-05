import "./App.css";
import googleAuth from "./services/auth";
import { googleProvider } from "./services/authMethods";

function App() {
  const handleGoogleAuth = async (provider) => {
    const res = await googleAuth(provider);
    console.log(res);
  };
  return (
    <div className="App">
      <button onClick={() => handleGoogleAuth(googleProvider)}>
        Sign In using Google!
      </button>
    </div>
  );
}

export default App;
