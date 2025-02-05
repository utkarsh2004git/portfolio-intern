import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
