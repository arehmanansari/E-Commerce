import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
// import Cart from "./Components/Cart";
// import DashboardNavbar from "./Dashboard/DashboardNavbar";
// import DashboardSidebar from "./Dashboard/DashboardSidebar";
// import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route to="/" />
      </Routes>
      <br />
      <br />
      <Footer />
      {/* <DashboardNavbar />
      <DashboardSidebar />   */}
      <h1>difufhdiudf</h1>
    </div>
  );
}

export default App;
