export const createRequest = (request) => {
  return $.ajax({
    url: `/api/requests`,
    method: "POST",
    data: { request },
  });
};

export const deleteRequest = (request) => {
  return $.ajax({
    url: `/api/requests/${request.id}`,
    method: "DELETE",
    data: { request },
  });
};
