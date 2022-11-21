import "./App.css";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
