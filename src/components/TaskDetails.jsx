import { useParams} from 'react-router-dom'

const TaskDetails = () => {
    const {taskId} = useParams(); // pega o parâmetro que será dinamico na rota
  return (
    <div>
      <h2>Detalhes da tarefa</h2>
      <p>Tarefa: {taskId}</p>
    </div>
  )
}

export default TaskDetails
