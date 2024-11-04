import React, { useEffect, useState } from "react";
import LoaderComp from "../Loader";
import axios from "axios";

const UserDetails = ({ showModal, setShowModal, userId }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((response) => setUserDetails(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }, [userId]);

  return (
    <>
      {showModal ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <h1 className="text-lg font-bold text-center mb-2 ">
                    User Details
                  </h1>
                  {loader === true ? "Loading......" : ""}
                  {userDetails
                    ? userDetails?.map((item, index) => (
                        <div key={index} className="min-h-80">
                          <li>Name: {item?.name} </li>
                          <li>Email: {item?.email} </li>
                          <li>phone: {item?.phone} </li>
                          <li>username: {item?.username} </li>
                          <li>website: {item?.website} </li>
                          <li>company: {item?.company?.name} </li>
                          <li>City: {item?.address?.city} </li>
                          <li>Street: {item?.address?.street} </li>
                          <li>Zipcode: {item?.address?.zipcode} </li>
                        </div>
                      ))
                    : "Loading...."}

                  <div className="px-2 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setUserDetails([]);
                      }}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
    </>
  );
};

export default UserDetails;
