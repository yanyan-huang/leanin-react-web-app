/* eslint-disable import/extensions */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { removeUser } from "../Features/Profile/user-reducer";
import { clearExperience } from "../Features/Profile/experience-reducer.jsx";
import { clearEducation } from "../Features/Profile/education-reducer.js";
import { clearSavedJobs } from "../Features/AppliedSavedJobs/saved-jobs-reducer.jsx";
import { clearAppliedJobs } from "../Features/AppliedSavedJobs/applied-jobs-reducer.jsx";

function SignOut() {
  const { isLogined } = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    if (isLogined) {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("userData");
          dispatch(removeUser());
          dispatch(clearExperience());
          dispatch(clearEducation());
          dispatch(clearSavedJobs());
          dispatch(clearAppliedJobs());
          console.log("Signed out successfully");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    signOutHandler();
  }, []);

  return (
    <div className="m-0 p-0 d-flex wd-logout-position bg-primary">
      <div className="position-relative">
        <img src="/images/logout-bg.jpeg" alt="sign out" className="bg-image" />
        <div className="container pt-4 position-absolute top-0 start-0 text-white">
          <h2>Thank you for using LeanIn!</h2>
          <h2>We hope to see you again soon.</h2>
          <p />
        </div>
      </div>
    </div>
  );
}

export default SignOut;
