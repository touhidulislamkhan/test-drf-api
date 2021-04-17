// Get Request

// axios.get('http://127.0.0.1:8000/apiV1/status/list/')
//     .then(res => console.log(res))

// axios.get('http://127.0.0.1:8000/apiV1/status/detail/5/')
//     .then(res => console.log(res))

// Post Request

// axios.post('http://127.0.0.1:8000/apiV1/status/create/', {
//     user: 1,
//     content: "Post using axios",
//     image: null
// }, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(res => console.log(res))
//     .catch(err => console.log(err.message))

// Delete Request
// axios.delete('http://127.0.0.1:8000/apiV1/status/delete/7/')
//     .then(res => console.log(res))

// Put request
// axios.put('http://127.0.0.1:8000/apiV1/status/update/6/', {
//     user: 1,
//     content: 'Hello There',
//     image: null
// }, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(res => console.log(res))

// Patch Request
// axios.patch('http://127.0.0.1:8000/apiV1/status/update/8/', {
//     content: 'using Patch',
// }, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(res => console.log(res))

document.getElementById('myForm').addEventListener('submit', handleSubmit);
document.getElementById('image').addEventListener('change', handleImage);


let myImage = null;

function handleImage(e) {
    myImage = e.target.files[0];
    // console.log(myImage);
}

function handleSubmit(e) {
    e.preventDefault();
    let user = document.getElementById('user').value;
    let content = document.getElementById('content').value;
    let form_data = new FormData();
    form_data.append('user', user);
    form_data.append('content', content);
    form_data.append('image', myImage);

    // for (var [key, value] of form_data.entries()) {
    //     console.log(key, ':', value);
    // }

    // axios.post('http://127.0.0.1:8000/apiV1/status/', form_data, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     }
    // }).then(response => response.data)
    //     .then(data => console.log(data))

    axios.put('http://127.0.0.1:8000/apiV1/status/10/', form_data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(response => response.data)
        .then(data => console.log(data))
}