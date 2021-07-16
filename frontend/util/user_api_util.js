// export const requestAllUsers = () => (
//     $.ajax({
//         url: `/api/users`,
//         method: "GET"
//     })
// );

// export const requestUser = userId => (
//     $.ajax({
//         url: `/api/users/${userId}`,
//     })
// );

export const getUser = (id) => {
    return (
        $.ajax({
            url: `/api/users/${id}`,
            method: 'GET'
        })
    )
}

export const getUsers = (data) => {
    return (
        $.ajax({
            url: `/api/users`,
            method: 'GET',
            data 
        })
    )
}

export const updateUserPhoto = (formData) => (
    $.ajax({
        url: `/api/users/${formData.get('user[id]')}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false 
    })
)

export const updateUser = (user) =>
  $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user },
  });