import HeaderPanel from "./components/Header/HeaderPanel";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderPanel />
      </header>
      <main className="main">
        <Board />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
