import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

import "./scss/App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
