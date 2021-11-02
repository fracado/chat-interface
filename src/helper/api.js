export const fetchMessages = (url) => {
    return fetch(url, {method:'GET'})
        .then((response) => response.json())
        .catch((err) => console.log(err));
};

export const sendMessage = (messageInput) => {
    const url = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': process.env.REACT_APP_CHAT_API_TOKEN
        },
        body: JSON.stringify({
            'message': messageInput,
            'author': 'user'
        })
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));
};
