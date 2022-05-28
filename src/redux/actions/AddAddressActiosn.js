import { toast } from 'react-toastify';
import { addAddressConst } from '../action-Type/Constants';

export const addNewAddress = (payload,loginSubmit,navigate) => async dispatch => {
    dispatch({ type: addAddressConst.ADDRESSADD_REQUEST })
    try {
        loginSubmit({ variables: { firstname: payload.fname, lastname: payload.lname,city:payload.city,telephone:payload.telephone,country_code:payload.country,street:payload.address } }).then(response => {
            //handle response
            console.log('response----------',response);
            dispatch({
                type: addAddressConst.ADDRESSADD_SUCCESS,
                // payload: response.data.generateCustomerToken
            })
            toast.dark('Data added successfully')
            // navigate('/AddressBookList')
            navigate(-1)
        }).catch(error => {
            console.log('error --', error)
        })
    } catch (e) {
        console.log('error --', e)
    }
};