import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void

}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <div className='view'>

        <input
          className="toggle"
          checked={completed}
          type="checkbox"
          onChange={(e) => {
            onToggleCompletedTodo({ id, completed: e.target.checked })
          }}
        />
        <label>{title}</label>
        <button
        className='destroy'
        onClick={() => { onRemoveTodo({ id }) }}
        ></button>
    </div>

  )
}
