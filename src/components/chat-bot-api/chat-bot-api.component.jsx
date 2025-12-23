const API = (message) => {

    const response = fetch ('http://136.113.93.41/chat', {
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


