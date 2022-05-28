import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import Footer from '../components/Layout/Footer';
import NavBar from '../components/Layout/NavBar';
import AddNewAddress from '../view/addressBook/AddNewAddress';
import AddressBookList from '../view/addressBook/AddressBookList';
import Sign from '../view/Sign';
import SignUp from '../view/SignUp';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Router = () => {
    let navigate = useNavigate();

    const auth = useSelector(state => state.LoginReducer);
    const token = window.localStorage.getItem('security_token');
    useEffect(() => {
        if (token || auth?.authenticate) {
            navigate("AddressBookList");
        } else {
            navigate("/");
        }
    }, [])
    return (
        <>
            <ToastContainer autoClose={1200} />
            <NavBar />
            <Routes>
                <Route path="/" element={<Sign />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path="AddressBookList" element={<AddressBookList />} />
                <Route path="AddNewAddress" element={<AddNewAddress />} />
                {/* <Route path="invoices" element={<Invoices />} /> */}
            </Routes>
            <Footer />
        </>
    )
}

export default Router