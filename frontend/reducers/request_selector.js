export const getIncomingRequests = (requests, receiverId) => {
    let result = [];
    for (let id in requests) {
        if (requests[id].receiver_id === parseInt(receiverId)){
            result.push(requests[id].receiver_id);
        }
    }
    return result;
}

export const getOutgoingRequests = (requests, senderId) => {
    let result = [];
    for (let id in requests) {
        if (requests[id].sender_id === parseInt(senderId)){
            result.push(requests[id].sender_id);
        }
    }
    return result; 
}

export const findRequestId = (requests, receiverId, senderId) => {
    for (let id in requests) {
        let request = requests[id];
        if (request.sender_id === senderId && request.receiver_id === receiverId){
            return id 
        }
    }
}