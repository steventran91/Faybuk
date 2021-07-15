

export const getAuthors = (posts, comments) => {
    let res = [];
    for (let id in posts) {
        if (!res.includes(posts[id].author_id)){
            res(posts[id].author_id);
        }
    }
    for (let id in comments) {
        if (!res.includes(comments[id].author_id)) {
            res.push(posts[id].author_id);
        }
    }
    return res; 
}

export const getRequesters = (requests) => {
    let res = [];
    requests.forEach(request => {
        if(!res.includes(request.sender_id)){
            res.push(request.sender_id)
        }
    })
    return res; 

}

export const getUsersfromQuery = (users, queryString) => {
    if (!queryString.length) this.setState({results: []});
    else {
        const result = [];
        for (let key in users){
            const user = users[key];
            const firstName = user.first_name.toLowerCase();
            const lastName = user.last_name.toLowerCase();
            if (
                queryString.includes(firstName) ||
                queryString.includes(lastName) ||
                firstName.slice(0, queryString.length) === queryString ||
                lastName.slice(0, queryString.length) === queryString
            ){
                result.push(user);
            }
        }
        return result; 
    }
}