import { loginConst, logoutConst } from "../action-Type/Constants";

const initialState = {
  token: null,
  authenticate: false,
  authenticating: false,
  loading: false,
  error: '',
  message: ''

};

const reducer = (state = initialState, action) => {
  // console.log('Redux action login user ----', action?.payload)
  switch (action.type) {
    case loginConst.LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true
      }
    case loginConst.LOGIN_SUCCESS:
      return {
        ...state,
        token: action?.payload?.token,
        authenticate: true,
      }
    // case loginConst.LOGIN_FAILED:
    //   return {
    //     ...state,
    //     error: action?.payload,
    //     authenticate: false,
    //   }
    case logoutConst.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case logoutConst.LOGOUT_SUCCESS:
      return {
        ...initialState,
      }
    // case Logout.LOGOUT_USER_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false
    //   }
    default:
      return state;
  }
};

export default reducer;