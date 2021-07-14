export const requestAllUsers = () => (
    $.ajax({
        url: `/api/users`,
        method: "GET"
    })
);

export const requestUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
    })
);

export const updateUser = user => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH",
        data: { user }
    })
);

export const updateUserPhoto = (formData) => (
    $.ajax({
        url: `/api/users/${formData.get('user[id]')}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false 
    })
)