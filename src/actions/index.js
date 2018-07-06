import http from '@utils/http'

export const fetchSignIn = (state) => {
    return { type: "FETCH_SIGN_IN", payload: state }
}

export const ajaxFetchSignIn = (data) => {
    return dispatch => {
        http.get({
            url: ''
        }).then((res) => {
            if (res.status == 0) {
                dispatch(fetchSignIn({ data: res.data }))
            }
        })
    }
}
