import { loginConst } from "../action-Type/Constants";

export const getUserLogin = (payload, loginSubmit, navigate) => async dispatch => {
    dispatch({ type: loginConst.LOGIN_REQUEST })
    try {
        loginSubmit({ variables: { email: payload.EMAIL, password: payload.PASSWORD } }).then(response => {
            //handle response
            // console.log('response---------', response.data.generateCustomerToken);
            localStorage.setItem('security_token', response.data.generateCustomerToken.token);
            localStorage.setItem('user_details', payload);
            dispatch({
                type: loginConst.LOGIN_SUCCESS,
                payload: response.data.generateCustomerToken
            })
            navigate('AddressBookList')
        }).catch(error => {
            console.log('error --', error)
        })
    } catch (e) {
        console.log('error --', e)
    }
};
