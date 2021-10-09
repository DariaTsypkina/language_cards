import React from "react";

export default function LoadData() {
    fetch('/api/words')
        .then(response => {
            if (response.ok) { //Проверяем что код ответа 200
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then((response) => {
            this.setState({
                words: response,
                isLoading: false
            })
        })
        .catch(error => this.setState({ error, isLoading: false }));
}