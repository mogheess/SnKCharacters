import React from 'react'
import CharacterItem from './CharacterItem'
import spinner from '../../assets/spinner.gif'

const CharacterGrid = ({items, isLoading}) => {
  return (
    <div>
      {isLoading ? 
      <img src={spinner} alt="Loading" 
      style={{width:'200px', margin:'auto', display:'block'}}
      /> 
      : 
      <section className='cards'>
      {Array.isArray(items) ? (
        items.map((item) => <CharacterItem key={item.character.mal_id} item={item}></CharacterItem>)
      ) : (
        <h1>No items to display</h1>
      )}
    </section>}

    </div>
  )
}

export default CharacterGrid