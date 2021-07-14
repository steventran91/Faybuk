export const sendRequest = (request) => {
  return $.ajax({
    url: `/api/requests`,
    method: "POST",
    data: { request },
  });
};

export const deleteRequest = (requestId) => {
  return $.ajax({
    url: `/api/requests/${requestId}`,
    method: "DELETE"
  });
};
