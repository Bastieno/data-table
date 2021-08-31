import React, { useState, createContext, useContext } from 'react'

interface Props {
  children: React.ReactNode
}

const menuLinks = [
  {
    id: 1,
    text: 'simple',
    headerText: 'Simple Table',
  },
  {
    id: 2,
    text: 'right-align',
    headerText: 'Table with numeric text right-aligned',
  },
  {
    id: 3,
    text: 'with-checkboxes',
    headerText: 'Table with checkboxes',
  },
  {
    id: 4,
    text: 'infinite-scroll',
    headerText: 'Table with infinite scroll',
  },
  {
    id: 5,
    text: 'large-data',
    headerText: 'Table that renders large amount of data',
  },
]

const MenuContext = createContext(null)

export const useMenuContext = (): any => useContext(MenuContext)

export const MenuContextProvider: React.FC<Props> = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState(1)
  const addActiveClass = (id: number) => {
    if (id === activeLinkId) return 'active'
    else return ''
  }

  const value = {
    menuLinks,
    activeLinkId,
    setActiveLinkId,
    addActiveClass,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
