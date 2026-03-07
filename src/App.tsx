
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { AppRoutes } from "./routes/AppRoutes";
import Footer from "./common/layouts/footer";
import Header from "./common/layouts/main-navbar";

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
