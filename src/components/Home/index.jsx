/* eslint-disable */

import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetchJobs from '../../customhooks/fetchJob';
// import Nav from 'react-bootstrap/Nav';
// import { LinkContainer } from 'react-router-bootstrap';
import { auth } from '../Firebase/firebase';

import CompanyHome from '../CompanyHome';
import AdminHome from '../AdminHome';
import UserHome from '../UserHome';
import VisiterHome from '../VisiterHome';
import * as ROUTES from '../../constants/routes';

function Home() {
  useFetchJobs();
  const { user } = useSelector((state) => state.userInfo);
  const { role, isLogined } = user;
  const isAdmin = role === 'admin';
  const isUser = role === 'user';
  const isCompany = role === 'company';

  const email = auth?.currentUser?.email;
  console.log('visiter?', !(isUser || isCompany || isAdmin));
  return (
    <div className="container-fluid">
      {isUser && isLogined && (
        <nav>
          <h2 className='wd-greeting'>
            Welcome to LeanIn, <span className="text-primary">{email}</span> 
            {/*<br/>You're logged in as a Job Seeker.*/}
          </h2>
          <UserHome />
        </nav>
      )}
      {isCompany && isLogined && (
        <nav>
          <h2 className='wd-greeting'>
            Welcome to LeanIn, <span className="text-primary">{email}</span>
            {/*<br/>You're logged in as a Company.*/}
          </h2>
          <CompanyHome />
        </nav>
      )}
      {isAdmin && isLogined && (
        <nav>
          <h2 className='wd-greeting'>
            Welcome to LeanIn, <span className="text-primary">{email}</span>
            {/*<br/>You're logged in as an Admin.*/}
          </h2>
          <AdminHome />
        </nav>
      )}

      {!isLogined && (
        <nav>
          <h2>Hi, LeanIn Visiter</h2>
          <h6>
            Welcome to LeanIn, <Link to={ROUTES.SIGN_UP}>Sign up</Link> or{' '}
            <Link to={ROUTES.SIGN_IN}>Sign in </Link>
          </h6>
          <VisiterHome />
        </nav>
      )}
    </div>
  );
}

export default Home;