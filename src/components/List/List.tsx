import React, { useEffect } from 'react'

type TProps<Item> = {
  items: Item[]
  renderItem: (item: Item) => React.ReactNode
  message: string
  as?: React.ElementType
  classes?: string
  title?: string
  id?: string 
}

function List<Item>({message, items, renderItem, as, classes, title, id}: TProps<Item>): JSX.Element {
  const El = as || "div"

  useEffect(() => {
    console.log(`${message} List`)
  })

  return(
    <El className={classes} id={id}>
      {title && <h4>{title}</h4>}
      {items.map(renderItem)}    
    </El>
  )
}

export default List