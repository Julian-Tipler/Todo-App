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
    console.log('ping')
    return (
    $.ajax({
        method: 'DELETE',
        url: `/api/lists/${list.id}`,
    })
    )
}