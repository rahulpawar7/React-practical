import { toast } from 'react-toastify';
import { READ_ADDRESSBOOK } from '../../utils/QueryAndMutations';
import { addAddressConst } from '../action-Type/Constants';

export const addNewAddress = (payload, loginSubmit, navigate) => async dispatch => {
    dispatch({ type: addAddressConst.ADDRESSADD_REQUEST })
    try {
        loginSubmit({ variables: { firstname: payload.fname, lastname: payload.lname, city: payload.city, telephone: payload.telephone, country_code: payload.country, street: payload.address } }).then(response => {
            //handle response
            dispatch({
                type: addAddressConst.ADDRESSADD_SUCCESS,
                // payload: response.data.generateCustomerToken
            })
            toast.dark('Data added successfully')
            // navigate('/AddressBookList')
            navigate(-1)
        }).catch(error => {
            // console.log('error --', error)
        })
    } catch (e) {
        console.log('error --', e)
    }
};

export const getAllAddress = () => async dispatch => {
    dispatch({ type: addAddressConst.GETRESSADD_REQUEST })
    try {
        const token = window.localStorage.getItem('security_token');
        fetch(`https://rjstest.seepossible.link/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                variables: {},
                query: READ_ADDRESSBOOK,
            }),
        })
            .then((result) => result.json())
            .then((result) => {
                dispatch({
                    type: addAddressConst.GETRESSADD_SUCCESS,
                    payload: result?.data?.customer.addresses
                })
            })
            .catch('error------', console.error)
    } catch (e) {
        console.log('error --', e)
        dispatch({
            type: addAddressConst.GETRESSADD_FAILED,
            payload: e
        })
    }
};

export const updateAddress = (payload, updateSubmit, navigate) => async dispatch => {
    dispatch({ type: addAddressConst.UPDATERESSADD_REQUEST })
    try {
        let getId =payload?.id
        console.log('getId:',payload);
        updateSubmit({ variables: { id: getId, input: { firstname: payload.fname, lastname: payload.lname, city: payload.city, telephone: payload.telephone, country_code: payload.country, street: payload.address } } }).then(response => {
            //handle response
            dispatch({
                type: addAddressConst.UPDATERESSADD_SUCCESS,
                // payload: response.data.generateCustomerToken
            })
            toast.dark('Data Update successfully')
            // navigate('/AddressBookList')
            navigate('/AddressBookList')
        }).catch(error => {
            // console.log('error --', error)
        })
    } catch (e) {
        console.log('error --', e)
    }
};