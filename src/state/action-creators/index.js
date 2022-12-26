export const addReduxMoney = (storeAmount) => {
    return (dispatch)=> {
        dispatch({
            type: 'Add',
            payload: storeAmount
        })
    }
}

export const withdrawReduxMoney = (storeAmount) => {
    return (dispatch)=> {
        dispatch({
            type: 'Withdraw',
            payload: storeAmount
        })
    }
}