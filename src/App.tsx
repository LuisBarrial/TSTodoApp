import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { type Todo, type TodoId, type TodoTitle } from './types'
import { type FilterSelected as FilterValue, TODO_FILTER, type FilterSelected } from './components/consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodo = [
  {
    id: '1',
    title: 'Ver GTA',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodo)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTER.All)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = (
    { id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    }
    )
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterSelected): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.completed
    return todo
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    if (newTodo.title === '' || newTodo.title === undefined) console.log('Es vacio')
    else {
      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
    }
  }

  return (
    <>
    <div className='todoapp'>
    <Header onAddTodo={handleAddTodo}/>
      <Todos todos={filteredTodos}
        onToggleCompletedTodo={handleComplete}
        onRemoveTodo={handleRemove}
      />
      <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      onClearCompleted={handleRemoveAllCompleted}
      filterSelected={filterSelected}
      handleFilterChange={handleFilterChange}
      ></Footer>
    </div>
    </>
  )
}

export default App
