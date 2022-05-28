import { loginConst, logoutConst } from "../action-Type/Constants";
import { toast } from 'react-toastify';

export const getUserLogin = (payload, loginSubmit, navigate) => async dispatch => {
    dispatch({ type: loginConst.LOGIN_REQUEST })
    try {
        loginSubmit({ variables: { email: payload.EMAIL, password: payload.PASSWORD } }).then(response => {
            //handle response
            localStorage.setItem('security_token', response.data.generateCustomerToken.token);
            localStorage.setItem('user_details', JSON.stringify(payload));
            dispatch({
                type: loginConst.LOGIN_SUCCESS,
                payload: response.data.generateCustomerToken
            })
            toast.dark('Login Successfully')
            navigate('AddressBookList')
        }).catch(error => {
            console.log('error --', error)
        })
    } catch (e) {
        console.log('error --', e)
    }
};

export const getUserLogOut = (logoutSubmit, navigate) => async dispatch => {
    dispatch({ type: logoutConst.LOGOUT_REQUEST })
    try {
        const token = window.localStorage.getItem('security_token');
        logoutSubmit({ variables: { revokeCustomerToken: token } }).then(response => {
            //handle response
            dispatch({
                type: logoutConst.LOGOUT_SUCCESS,
                payload: response.data.generateCustomerToken
            })
            localStorage.clear();
            navigate('/')
        }).catch(error => {
            console.log('error --', error)
            let getError = JSON.stringify(error) 
            let getGraphqlEr=JSON.parse(getError)
            console.log('error --', getGraphqlEr.graphQLErrors[0].message)
            // console.log('error --', response.data.errors[0].message)
            toast.dark(getGraphqlEr?.graphQLErrors[0].message)
        })
    } catch (e) {
        console.log('error --', e)
    }
};