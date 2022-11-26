import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import DeletConfirmModal from "./DeletConfirmModal";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }

          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl p-4 font-bold">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.ProductName}</td>
                <td>{order.Quantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs px-4 font-bold btn-success">
                        Pay
                      </button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <span className="text-success  font-bold">Paid</span>
                  )}
                </td>
                <td>
                  {!order.paid && (
                    <label
                      onClick={() => setDeletingOrder(order)}
                      htmlFor="delete-confirm-modal"
                      className="btn btn-xs btn-error"
                    >
                      Cancel
                    </label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deletingOrder && (
          <DeletConfirmModal
            deletingOrder={deletingOrder}
            // refetch={refetch}
            setDeletingOrder={setDeletingOrder}
          ></DeletConfirmModal>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
