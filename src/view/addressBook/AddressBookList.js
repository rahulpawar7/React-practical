import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CommonCard from '../../components/Card';
// import { READ_ADDRESSBOOK } from '../../utils/QueryAndMutations';
import './styles.css'
import { READ_ADDRESSBOOK } from '../../utils/QueryAndMutations';
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
    const token = window.localStorage.getItem('security_token');
    const [searchData, setSearchData] = useState(Sdata)
    // const { loading, error, data } = useQuery(READ_ADDRESSBOOK,{
    //     context: {
    //         headers: {
    //           "Authorization":`Bearer ${token}`,
    //         }
    //       }
    // });

    // if (loading) return <p>loading...</p>;
    // if (error) return <p>ERROR</p>;
    // if (!data) return <p>Not found</p>;
    // if (data) {
    //     console.log(data);
    // }

    const handleSearch = (e) => {
        let searchValue = e.target.value
        if (searchValue) {
            setSearchData(Sdata.filter((item, index) => (JSON.stringify(item)).toLowerCase().includes(searchValue)))
        } else {
            setSearchData(Sdata)
        }
    }

    return (
        <>
            <div className='w-25 mx-auto mt-3 main-div-text'>
                <p> Address Book</p>
            </div>
            <div className='address-book-div'>
                <div>
                    <div className='w-100 mt-2 Address-form-div addressSearch'>
                        <i className="fa fa-search fa-search search-icon"></i><Form.Control type="text" onChange={(e)=>handleSearch(e)} className='addressSearch' placeholder="Search address here..." />
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
                                        searchData.map((val, ind) => {
                                            return <CommonCard key={ind}
                                                // getValue={val}
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