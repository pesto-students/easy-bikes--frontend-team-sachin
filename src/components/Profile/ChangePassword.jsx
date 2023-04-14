import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import { updateUserPassword } from "../../Actions/userAction";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [updateState, setUpdateState] = useState(true);
  const navigate = useNavigate();
  const onInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onUpdatePasswordHandler = (e) => {
    e.preventDefault();
    const data = {
      ...values,
    };

    dispatch(updateUserPassword(data));
  };
  const changeStateHandler = () => {
    setUpdateState(!updateState);
    navigate("/my-profile");
  };
  return(

    <>
    <div className="flex max-w-lg mx-auto items-center shadow-new justify-center p-10 fade-in-bottom">
      <div className="ml-20">
        <div className="flex justify-between">
          <text className="text-2xl font-bold">Change Password</text>
        </div>
        <form
          className="flex flex-col mt-6 border  my-10  space-y-2 "
          onSubmit={(e) => onUpdatePasswordHandler(e)}
        >
          <div className=" flex flex-col  space-y-5 mb-5">
            <label className="font-bold">
            <p class="font-medium text-slate-700 pb-2">Current Password</p>
            <input
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              type="password"
              label={"Current Password"}
              name="passwordCurrent"
              value={values.name}
              placeholder='Enter Current Password'
              onChange={onInputChange}
              required
            />
            </label>
            
          </div>
          <div className="flex flex-col space-y-5 mb-5">
            <label className="font-bold">
                <p class="font-medium text-slate-700 pb-2">New Password</p>
                <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"

              type="password"
              label={"New"}
              name="password"
              value={values.email}
              placeholder='Enter New Password'
              onChange={onInputChange}
              required
            />
                </label>
            
          </div>
          <div className="flex flex-col space-y-5 mb-5">
            <label className="font-bold w-full  ">
            <p class="font-medium text-slate-700 pb-2">Confirm New Password</p>
            <input
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"

              type="password"
              label={"Confirm New Password"}
              name="passwordConfirm"
              value={values.mobileNumber}
              placeholder='Confirm New Password'
              onChange={onInputChange}
              required
            />
            </label>
            
          </div>
          <div className="flex mt-10 ">
            <button
              type="submit"
              className="text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400"
            >
              {" "}
              Submit{" "}
            </button>
            <button
              className="text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400"
              onClick={changeStateHandler}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </>

  )
  
};

export default ChangePassword;
