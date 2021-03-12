export const createComment = commentForm => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: commentForm
    })
)