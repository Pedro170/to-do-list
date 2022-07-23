import React from 'react'
import styles from './AddTarefa.module.css'

type Props = {
  onEnter: ( taskName: string ) => void;
}

const AddTarefa = ({ onEnter }: Props ) => {
  const [ add, setAdd ] = React.useState('')

  const handleKeyUp = ( event: React.KeyboardEvent ) => {
    if( event.code === 'Enter' && add !== '' ) {
      onEnter( add );
      setAdd('');
    }
  }

  return (
    <label htmlFor="add" className={ styles.label }>
        <i className="fas fa-plus"></i>
        <input
          id="add"
          type="text"
          name="add"
          value={ add }
          onChange={({ target }) => setAdd( target.value )}
          onKeyUp={ handleKeyUp }
          placeholder="Adicione uma tarefa"
        />
    </label>
  )
}

export default AddTarefa
