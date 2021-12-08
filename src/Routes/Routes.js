import React from 'react'
import {Routes as AppRouter, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Signup from '../Pages/Signup/Signup'

function Routes() {
    return (
        <AppRouter>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/profile" element={<Profile />} /> 
        </AppRouter>
    )
}

export default Routes
