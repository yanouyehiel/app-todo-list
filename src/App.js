import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
    const [tache, setTache] = useState('');
    const [date, setDate] = useState('');
    const savedTodo = localStorage.getItem('todo')
    const [todos, updateTodos] = useState(savedTodo ? JSON.parse(savedTodo) : [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos])

    const saveTodo = (e) => {
        e.preventDefault()
        
        const currentTodoSaved = todos.find((todo) => todo.tache === tache)
        if (currentTodoSaved) {
            const todoFilteredCurrent = todos.filter(
                (todo) => todo.tache !== tache
            )
            updateTodos([
                ...todoFilteredCurrent, 
                { tache, date }
            ])
            setTache('')
            setDate('')
        } else {
            console.log(tache, date)
            updateTodos([...todos, { tache, date }])
            setTache('')
            setDate('')
        }
    }

    return (
        <div className="container">
            <h3 className="title">TODO LIST</h3>

            <form className="form" onSubmit={(e) => saveTodo(e)}>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Nom de la tâche</label>
                    <div className="input-group has-validation">
                        <input type="text" id="tache" className="form-control" value={tache} onChange={(e) => setTache(e.target.value)} required />
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Date de la tâche</label>
                    <div className="input-group has-validation">
                        <input type="date" id="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                </div>
        
                <div className="col-12">
                    <div className="d-grid gap-2 mt-3">
                        <button type='submit' className="btn btn-primary">ENREGISTRER</button>
                    </div>
                </div>
            </form>

            {todos.length > 0 ? (
                todos.map(({ tache, date }) => (
                    <Todo tache={tache} date={date} />
                )
            )) : (
                <div className="col-12">
                    <h4 className="info">Aucune tache</h4>
                </div>
            )}
        </div>
    );
}

export default App;
