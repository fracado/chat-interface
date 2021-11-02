export const fetchMessages = (url) => {
    return fetch(url, {method:'GET'})
        .then((response) => response.json())
        .catch((err) => console.log(err));
};
