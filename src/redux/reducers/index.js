import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import AddAddressReducer from './AddAddressReducer'
const rootReducer = combineReducers({
    LoginReducer,
    AddAddressReducer
})

export default rootReducer;