import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Gap = () => {
  return <div className="gap"></div>;
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gap />
      <Outlet />
      <Gap />
      <Footer />
    </div>
  );
};

export default App;
