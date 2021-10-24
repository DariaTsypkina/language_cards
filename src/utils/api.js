const baseURL = '/api/words';

const _getResponse = (res) => {
    if (res.ok) return res.json();
    else throw new Error("Something went wrong...");
}

export const getWords = () => {
    return fetch(baseURL).then(res => _getResponse(res));
}

export const addWord = (newWord) => {
    newWord.tags = [];
    return fetch(`${baseURL}/add`, {
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(newWord)
    }).then(res => {
        _getResponse(res);
    });
}

export const updateWord = (id, newWord) => {
    newWord.tags = [];
    return fetch(`${baseURL}/${id}/update`, {
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(newWord)
    }).then(res => {
        _getResponse(res);
    });
}

export const deleteWord = (id) => {
    return fetch(`${baseURL}/${id}/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(res => {
        _getResponse(res);
    });
}