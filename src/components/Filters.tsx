import { FILTER_BUTTONS, type FilterSelected as FilterValue } from './consts'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
        {
          Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
            const isSelected = key === filterSelected
            const className = isSelected ? 'selected' : ''
            return (
                <li key={key}>
                    <a
                    href={href}
                    onClick={(event) => {
                      event.preventDefault()
                      onFilterChange(key as FilterValue)
                    }
                     }
                    className={className}>
                    {literal}
                    </a>
                </li>
            )
          }
          )}
    </ul>
  )
}
