import HeaderPanel from "./Header/HeaderPanel";
import "./App.css";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderPanel />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
