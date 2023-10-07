import { Filters } from './Filters'
import { type FilterSelected } from './consts'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterSelected
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterSelected) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount}</strong> tareas pendientes
            </span>
        <Filters
         filterSelected={filterSelected}
         onFilterChange={handleFilterChange}
        />
        {
          completedCount > 0 && (<button className='clear-completed' onClick={onClearCompleted}>Borrar Completos</button>)
        }
    </footer>
  )
}
