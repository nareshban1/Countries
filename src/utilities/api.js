import axios from "axios";


export const fetchCountries = async (url) => {
    const CancelToken = axios.CancelToken;
    let cancel;
    let response = await axios.get(url, {
        cancelToken: new CancelToken(c => {
            // this function will receive a cancel function as a parameter
            cancel = c;
        })
    }).catch(thrown => {
        if (axios.isCancel(thrown)) {
            console.log(thrown.message);
        } else {
            // handle error
        }
    });
    cancel('Request canceled.');

    return response;

}