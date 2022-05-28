import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CommonCard from '../../components/Card';
import './styles.css'
const Sdata = [
    {
        // imgsrc: web,
        title: "Web Development",
    },
    {
        // imgsrc: app,
        title: "App Development",
    },
    {
        // imgsrc: android,
        title: "Android Development",
    },
    {
        // imgsrc: digital,
        title: "Digital Development",
    },
    {
        // imgsrc: marketing,
        title: "Marketing Development",
    },
    {
        // imgsrc: software,
        title: "Software Development",
    },
    {
        // imgsrc: developer,
        title: "Websites Development",
    },
    {
        // imgsrc: developer,
        title: "Websites Development",
    },

];

const AddressBookList = () => {
    return (
        <>
            <div className='w-25 mx-auto mt-3 main-div-text'>
                <p> Address Book</p>
            </div>
            <div className='address-book-div'>
                <div>
                    <div className='w-100 mt-2 Address-form-div addressSearch'>
                        <i className="fa fa-search fa-search search-icon"></i><Form.Control type="text" className='addressSearch' placeholder="Search address here..." />
                    </div>
                </div>
            </div>
            <div className='books-list'>
                <div className="my-5">
                    <div className="container-fluid mb-5">
                        <div className="row">
                            <div className="col-8 mx-auto">
                                <div className="row gy-4">
                                    {
                                        Sdata.map((val, ind) => {
                                            return <CommonCard key={ind}
                                                imgsrc={val.imgsrc}
                                                title={val.title}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className='add-new-address w-25'>
                        </div> */}

                    </div>
                    <Link to="/AddNewAddress"><Button variant="primary" type="submit" className='add-new-address-btn'>
                        Add New Address
                    </Button></Link>
                </div>
            </div>
        </>
    )
}

export default AddressBookList