function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

function fetchAPI(url, options) {
    return fetch(url, options)
            .then(checkStatus)
            .then(parseJSON)
}

export function loginAPI({username, password}) {
    return fetchAPI('/api/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username, password})
    })
}
