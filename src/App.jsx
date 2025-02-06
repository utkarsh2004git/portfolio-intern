import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import { Toaster, toast } from 'sonner'

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Toaster position="top-center"/>
      <Header />
      <Home />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
