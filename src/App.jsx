import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Home />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
