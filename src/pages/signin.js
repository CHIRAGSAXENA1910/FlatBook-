import React from 'react';
import Navbar from '../components/Navbar';
import SignIn from '../components/Signin';
import ScrollToTop from '../components/ScrollToTop';

const SigninPage = () => {
  return (
    <div>
<Navbar/>
    <>
    <ScrollToTop />
    <SignIn />
    </>
    </div>
  );
};

export default SigninPage;