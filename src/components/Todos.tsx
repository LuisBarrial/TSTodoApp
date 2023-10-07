import { type TodoId, type ListofTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListofTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
        <ul className='todo-list'>
            {todos.map(todo => (
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        title={todo.title}
                        id={todo.id}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompletedTodo={onToggleCompletedTodo}
                    />
                </li>))}
        </ul>
  )
}
