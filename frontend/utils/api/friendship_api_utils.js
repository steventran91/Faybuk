export const createFriendship = (friendship) => {
  return $.ajax({
    url: `/api/friendships`,
    method: "POST",
    data: { friendship },
  });
};

export const deleteFriendship = (friendship) => {
  return $.ajax({
    url: `/api/friendships/${friendship.id}`,
    method: "DELETE",
    data: { friendship },
  });
};
