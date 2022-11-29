

function DeleteTodo (tache) {
    const handleDelete  = () => {
        localStorage.removeItem('todo', tache)
        window.location.reload()
    }

    return (
        <button onClick={() => {
            if (window.confirm('Voulez-vous supprimer cette tâche ?')) {
                handleDelete(tache);
            }
        }} className="btn btn-success">Accomplie</button>
    )
}

export default DeleteTodo