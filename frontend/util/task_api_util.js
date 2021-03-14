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

export const updateTask = taskForm => (
    $.ajax({
        method: 'PATCH',
        url: `api/tasks/${taskForm.id}`,
        data: taskForm
    })
)

export const fetchTask = task_id => (
    $.ajax({
        method: 'GET',
        url: `api/tasks/${task_id}`
    })
)