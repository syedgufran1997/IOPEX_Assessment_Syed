import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const data = useContext(UserContext);

  const handleViewDetails = async (userId) => {
    const currentUser = await data.filter((item) => item.id === userId);
    setUserDetails(currentUser);
    setShowModal(true);
  };

  return (
    <div className="flex justify-center">
      <table className="border-2 w-2/4">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
        </thead>

        {data &&
          data?.length &&
          data.map((item, index) => (
            <tbody key={index}>
              <td>{item?.id}</td>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>{item?.company?.name}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleViewDetails(item?.id)}
                >
                  View
                </button>
              </td>
            </tbody>
          ))}
      </table>

      {showModal ? (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <li>Name: {userDetails?.name} </li>

                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setShowModal(false)}
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
