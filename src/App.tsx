
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/layouts/Header";
import { AppRoutes } from "./routes/AppRoutes";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <AppRoutes/>
    <Home/>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
