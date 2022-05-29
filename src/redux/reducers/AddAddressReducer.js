import { addAddressConst } from "../action-Type/Constants";

const block = {
    loading: false,
    error: '',
    success: false,
};
const initialState = {
    addressBookData: {
        ...block, data: [],
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        // FOR cerate book edit update deelet
        case addAddressConst.GETRESSADD_REQUEST:
            return {
                ...state,
                addressBookData: {
                    ...state.addressBookData,
                    loading: true,
                }
            }
        case addAddressConst.GETRESSADD_SUCCESS:
            return {
                ...state,
                addressBookData: {
                    ...state.addressBookData,
                    data: [...action.payload],
                    loading: false,
                },
            }
        case addAddressConst.GETRESSADD_FAILED:
            return {
                ...state,
                addressBookData: {
                    loading: false,
                },
            }

        // case CreateNewSaleEntry.CREATE_SALE_SUCCESS:
        //     return {
        //         ...state,
        //         addressBookData: {
        //             ...state.addressBookData,
        //             data: [
        //                 ...state.addressBookData.data,
        //                 action.payload
        //             ],
        //         }
        //     }
        // case CreateNewSaleEntry.DELETE_SALE_SUCCESS:
        //     return {
        //         ...state,
        //         addressBookData: {
        //             ...state.addressBookData,
        //             data: [...state.addressBookData.data.filter(d => d.TRN_CODE !== action.payload.TRN_CODE)],
        //         }
        //     }
        // case CreateNewSaleEntry.UPDATE_SALE_SUCCESS:
        //     return {
        //         ...state,
        //         addressBookData: {
        //             ...state.addressBookData,
        //             data: [
        //                 ...state.addressBookData.data.map(salesData => {
        //                     if (salesData?.TRN_CODE === action?.payload?.TRN_CODE) {
        //                         return action?.payload
        //                     }
        //                     return salesData
        //                 }),
        //             ],
        //         }
        //     }
        default:
            return state
    }
}