import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Products/Products";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Payment from "./Pages/Dashboard/Payment";
import Review from "./Pages/Dashboard/Review";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Contact from "./Pages/Home/Contact";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Products from "./Pages/Home/Products";

function App() {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <div className="mx-4 lg:mx-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="purchase/:id"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />

          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="review" element={<Review></Review>}></Route>
            {/* <Route path="users" element={<Users></Users>}></Route> */}

            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users></Users>
                </RequireAdmin>
              }
            ></Route>

            <Route
              path="orders"
              element={
                <RequireAdmin>
                  <ManageOrders></ManageOrders>
                </RequireAdmin>
              }
            ></Route>

            <Route
              path="addProduct"
              element={
                <RequireAdmin>
                  <AddProduct></AddProduct>
                </RequireAdmin>
              }
            ></Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
