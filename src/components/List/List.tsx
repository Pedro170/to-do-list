import React from 'react'
import styles from './List.module.css'
import { Item } from '../../types/Item'

type Props = {
  item: Item,
  onChange: ( id: number, done: boolean ) => void,
}

const List = ({ item, onChange }: Props) => {
  return (
    <div className={ styles.containerList }>
      <input
        type="checkbox"
        name="tarefa"
        id="tarefa"
        checked={ item.done }
        onChange={({ target }) => onChange( item.id, target.checked )}
      />
      <label className={ item.done ? styles.checked : styles.unchecked } htmlFor="tarefa">
        { item.tarefa }
      </label>
    </div>
  )
}

export default List
