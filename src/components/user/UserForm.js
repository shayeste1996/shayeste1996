import React from "react";
import UserFormContent from "./UserFormContent";

const UserForm = () => {
  return (
    <div className="flex flex-wrap justify-center mt-5">
      <div className="relative w-1/4 hover:bg-gray-100 rounded overflow-hidden shadow-lg m-5">
        <div className="px-6 py-4 text-right">
          <div className="font-bold text-xl mb-2">ورود به فون شاپ </div>
          <hr />
          <UserFormContent />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
