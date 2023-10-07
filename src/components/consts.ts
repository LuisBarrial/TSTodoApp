export const TODO_FILTER = {
  All: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTER_BUTTONS = {
  [TODO_FILTER.All]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTER.All}`
  },
  [TODO_FILTER.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTER.ACTIVE}`
  },
  [TODO_FILTER.COMPLETED]: {
    literal: 'Completado',
    href: `/?filter=${TODO_FILTER.COMPLETED}`
  }
} as const

export type FilterSelected = typeof TODO_FILTER[keyof typeof TODO_FILTER]
