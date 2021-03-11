export const fetchLists = () => (
    $.ajax({
        url: '/api/lists',
    })
);

export const createList = todoForm => (
    $.ajax({
        method: 'POST',
        url: '/api/lists',
        data: todoForm
    })
)

export const destroyList = list => {
    return (
    $.ajax({
        method: 'DELETE',
        url: `/api/lists/${list.id}`,
    })
    )
}

export const updateList = list => (
    $.ajax({
        method: 'PATCH',
        url: `api/lists/${list.id}`,
        data: list
    })
)