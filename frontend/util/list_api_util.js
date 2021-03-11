export const fetchLists = () => (
    $.ajax({
        url: '/api/lists',
    })
);