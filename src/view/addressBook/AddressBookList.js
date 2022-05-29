import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import CommonCard from '../../components/Card';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAddress } from '../../redux/actions/AddAddressActiosn';

const AddressBookList = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const getAllAddressData = useSelector(state => state?.AddAddressReducer);
    const { data, loading } = getAllAddressData?.addressBookData

    const [searchData, setSearchData] = useState([])
    // const { loading, error, data } = useQuery(READ_ADDRESSBOOK,{
    //     context: {
    //         headers: {
    //           "Authorization":`Bearer ${token}`,
    //         }
    //       }
    // });
    useEffect(() => {
        dispatch(getAllAddress())
    }, [])

    useEffect(() => {
        if (data) {
            setSearchData(data)
        }
    }, [data])

    const handleSearch = (e) => {
        let searchValue = e.target.value
        if (searchValue) {
            setSearchData(data.filter((item, index) => (JSON.stringify(item)).toLowerCase().includes(searchValue)))
        } else {
            setSearchData(data)
        }
    }
    const editClick = (getId) => {
        let getEditableValue = searchData && searchData.find(c => c.id === getId)
        navigate('/AddNewAddress', { state: { editData: getEditableValue, isEditable: true } });
    }
    return (
        <>
            <div className='w-25 mx-auto mt-3 main-div-text'>
                <p> Address Book</p>
            </div>
            <div className='address-book-div'>
                <div>
                    <div className='w-100 mt-2 Address-form-div addressSearch'>
                        <i className="fa fa-search fa-search search-icon"></i><Form.Control type="text" onChange={(e) => handleSearch(e)} className='addressSearch' placeholder="Search address here..." />
                    </div>
                </div>
            </div>
            <div className='books-list'>
                <div className="my-5">
                    <div className="container-fluid mb-5">
                        <div className="row">
                            <div className="col-8 mx-auto">
                                <div className="row gy-4">
                                    <p className='text-center'>{loading && 'Lodding...'}</p>
                                    {
                                        searchData.map((val, ind) => {
                                            return <CommonCard key={ind}
                                                getValue={val}
                                                onEditClick={editClick}
                                            />
                                        })
                                    }
                                    <p className='text-center'>{!loading && searchData.length === 0 && 'Address not found!'}</p>
                                </div>
                            </div>
                        </div>
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