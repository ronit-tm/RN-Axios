import { apiInstance } from "../httpClient/index";

export const getDataUsingSimpleGetCall = async () => {
    try {
        const data = apiInstance.get('/posts');
        return data;
    } catch (error) {
        return error;
    }
    // try {
    //     const response = await axios.get(
    //         'https://jsonplaceholder.typicode.com/posts/1',
    //     );
    //     alert(JSON.stringify(response.data));
    // } catch (error) {
    //     // handle error
    //     alert(error.message);
    // }
};

export const postDataUsingSimplePostCall = async () => {
    try {
        const response = await apiInstance.post('/posts', {
            title: 'foo',
            body: 'bar',
            userID: 1,
        });
        return response;
    } catch (error) {
        return error;
    }

    // axios
    //     .post('https://jsonplaceholder.typicode.com/posts', {
    //         title: 'foo',
    //         body: 'bar',
    //         name: 'krishna',
    //         userId: 1,
    //     })
    //     .then(function (response) {
    //         // handle success
    //         alert(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         alert(error.message);
    //     });
}
