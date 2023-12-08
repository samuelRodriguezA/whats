import React from 'react';
import Switch from 'react'

import { Routes, Route } from 'react-router-dom';

import Home from './core/Home' 
import Menu from './core/Menu' 
import PeruQuiz from './core/PeruQuiz.jsx';
import ColumbiaQuiz from './core/ColumbiaQuiz.jsx';
import PanamaQuiz from './core/PanamaQuiz.jsx';
import PhilippinesQuiz from './core/PhilippinesQuiz.jsx';


import Users from './user/Users.jsx'
import Signup from './user/Signup.jsx'
import Profile from './user/Profile.jsx'
import EditProfile from './user/EditProfile.jsx'

import Signin from './lib/Signin.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx'

function MainRouter() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/users" element={<Users />} />
        <Route path="/peruQuiz" element={<PeruQuiz />} />
        <Route path="/columbiaQuiz" element={<ColumbiaQuiz />} />
        <Route path="/panamaQuiz" element={<PanamaQuiz />} />
        <Route path="/philippinesQuiz" element={<PhilippinesQuiz />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default MainRouter;
