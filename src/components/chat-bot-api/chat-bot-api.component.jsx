const API = (message) => {

    const response = fetch ('https://integrated-backend-api-prod.deltoro.shop/chat', {
                            method : 'post',
                            headers: {
                                'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                input: message
                                })})
                        .then(response => response.json())
                        .then(response => {return response;});

    return response;

}

export default API;


