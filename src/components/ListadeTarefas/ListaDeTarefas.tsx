render(< tarefas={[]} onExcluir={() => {}} />);
export function ListaDeTarefas({ Tarefas, onExcluir }) {
    return (
        <div>
            <h2>Minhas Tarefas</h2>
            {Tarefas.length && (
                <ul>
                    {Tarefas.map((Tarefas) => (
                        <li key={Tarefas.id}>
                            <span>{Tarefas.titulo}</span>
                            <button onClick={onExcluir(Tarefa.id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            )}

            {Tarefas.length === 0 && (
                <p>Nenhuma tarefa pendente!</p>
            )}
        </div>
    )
}