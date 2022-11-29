import DeleteTodo from './DeleteTodo';

function Todo ({ tache, date }) {

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return newDate;
    }

    return (
        <div className="content-list">
            <div className="col-xxl-4 col-md-3">
                <div className="card info-card sales-card">
                    <div className="card-body">
                        <h5 className="card-title">{tache}</h5>

                        <div className="d-flex align-items-center">
                            <div className="ps-3">
                                <span className="small pt-2 ps-1">{dateParser(date)}</span>
                            </div>
                        </div><br/>

                        <DeleteTodo tache={tache} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo