export const createTask = taskForm => (
    $.ajax({
        method: 'POST',
        url: `/api/tasks`,
        data: taskForm
    })
)

export const deleteTask = task => (
     $.ajax({
        method: 'DELETE',
        url: `/api/tasks/${task.id}`,
    })
)

export const updateTask = task => (
    $.ajax({
        method: 'PATCH',
        url: `api/tasks/${task.id}`,
        data: task
    })
)