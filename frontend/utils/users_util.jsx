export const requestAllUsers = () => (
    $.ajax({
        url: `/api/users`,
        method: "GET"
    })
);

export const requestUsers = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: "GET",
        data: { user }
    })
);

export const updateUser = user => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH",
        data: { user }
    })
)