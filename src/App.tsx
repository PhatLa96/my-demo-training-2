import "./App.css";
import Header from "./component/Header";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    </div>
  );
}

export default App;
