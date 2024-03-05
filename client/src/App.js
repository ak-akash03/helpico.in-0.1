import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";
import About from "./pages/about.page";
import Contact from "./pages/contact.page";
import Login from "./pages/login.page";
import Register from "./pages/register.page";
import Service from "./pages/service.page";
import  Navbar  from "./componants/Navbar";
import Error from "./pages/error";
import Logout from "./pages/logout.page";
import Footer from "./componants/Footer";
import AdminLayouts from './componants/layouts/AdminLayouts'
import AdminContacts from "./pages/Admin-Contacts";
import AdminUsers from "./pages/Admin-User";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayouts />}>
            <Route path="users" element={<AdminUsers />}/>
            <Route path="contacts" element={<AdminContacts />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
