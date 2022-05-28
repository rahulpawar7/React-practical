import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Footer from '../components/Layout/Footer';
import NavBar from '../components/Layout/NavBar';
import AddNewAddress from '../view/addressBook/AddNewAddress';
import AddressBookList from '../view/addressBook/AddressBookList';
import Sign from '../view/Sign';
import SignUp from '../view/SignUp';

const Router = () => {
    return (
        // <div>Router</div>
        <>
            {/* <Continer /> */}
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