const API = (message) => {

    const apiChatBotEndpoint = import.meta.env.VITE_API_CHAT_BOT_ENDPOINT;
    const response = fetch (apiChatBotEndpoint, {
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


