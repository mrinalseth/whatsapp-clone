import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return {...state, user: action.payload}
        case 'logout':
            return {...state, user: null}
        default:
            return state
    }
}

const login = (dispatch) => {
    return async (userInfo) => {
        try{
            await localStorage.setItem('userInfo', JSON.stringify(userInfo))
            dispatch({
                type: 'login',
                payload: userInfo
            })
        }catch (err) {

        }
    }
}

const logout = (dispatch) => {
    return async () => {
        try {
            await localStorage.removeItem('userInfo')
            dispatch({
                type: 'logout',
                payload: null
            })
        }catch(err) {

        }
    }
}

const localSignin = (dispatch) => {
    return async () => {
        const userInfo = await localStorage.getItem('userInfo')
        if(userInfo) {
            dispatch({
                type: 'login',
                payload: JSON.parse(userInfo)
            })
        }
    }
}


export const {Provider, Context} = createDataContext(
    authReducer,
    {
        login,
        localSignin,
        logout
    },
    {
        user: null
    }
)