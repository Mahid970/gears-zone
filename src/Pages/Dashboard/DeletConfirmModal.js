import React from "react";
import { toast } from "react-toastify";

const DeletConfirmModal = ({ deletingOrder, setDeletingOrder }) => {
  const { ProductName, email } = deletingOrder;

  const handleDelete = () => {
    fetch(`http://localhost:5000/Orders/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor ${ProductName} is deleted`);
          setDeletingOrder(null);
          //   refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure? You want to delete doctor {ProductName}?
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletConfirmModal;
