import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import UserDetails from "../user";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const data = useContext(UserContext);
  const [userId, setUserId] = useState(0);

  const handleViewDetails = async (userId) => {
    setShowModal(true);
    setUserId(userId);
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

      <UserDetails
        showModal={showModal}
        setShowModal={setShowModal}
        userId={userId}
      />
    </div>
  );
};

export default Table;
