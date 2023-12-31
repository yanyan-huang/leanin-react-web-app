/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetchJobs from "../../customhooks/fetchJob";
import ExperienceComponent from './experience/index.jsx';
import EducationComponent from './education/index.jsx';
import JobsSideBar from '../JobsSideBar/index.jsx';
import { findCompany } from '../../services/company-service.js';
import { findCompanyThunk } from '../../services/company-thunk.js';
import { findUser } from '../../services/user-service.js';
import { findUserThunk } from '../../services/user-thunk.js';

function ProfileScreen() {
  useFetchJobs();
  const { userId } = useParams();
  const { user } = useSelector((state) => state.userInfo);
  const { uid } = user;
  const [userInfo, setUserInfo] = useState(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMyProfile = userId === undefined;
  console.log('profile: ', userInfo);
  useEffect(() => {
    async function fetchUserProfile() {
      if (userId) {
        const user = await findUser(userId);
        setUserInfo(user);
      }
    }
    fetchUserProfile();
  }, [uid]);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="list-group">
            <div className="list-group-item p-3">
              <div>
                {isMyProfile && (
                  <button
                    className="btn btn-primary rounded-pill mt-2 float-end"
                    onClick={() => {
                      navigate('/edit-profile');
                    }}
                  >
                    Edit profile
                  </button>
                )}

                <h3 className="fw-bold">{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
              </div>

              <p className="mb-2">{userInfo.bio}</p>
              <p className="mb-2">
                {userInfo.skills
                  ? `Skills: ${userInfo.skills}`
                  : (isMyProfile ? 'Add your skills...' : "")}
              </p>

              {userInfo.jobsApplied && userInfo.jobsSaved && (
                <div className="d-flex justify-content-start text-secondary">
                  <div className="flex-box">
                    <i className="bi bi-clipboard2-check" />
                    <span className="ms-1">{`Applied ${userInfo.jobsApplied} jobs`}</span>
                  </div>
                  <div className="flex-box ms-3">
                    <i className="bi bi-bookmark" />
                    <span className="ms-1">{`Saved ${userInfo.jobsSaved} jobs`}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          <ExperienceComponent />
          <br />
          <EducationComponent isMyProfile={isMyProfile} />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div className="col-12 col-md-3">
        {isMyProfile && (
            <JobsSideBar />
        )}
        </div>

      </div>
    </div>
  );
}

export default ProfileScreen;
