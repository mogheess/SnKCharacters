import React from 'react'

const CharacterItem = ({item}) => {

    const japaneseVoiceActor = item.voice_actors[1]?.person?.name || 'Unknown';


  return (
    <div className='card' onClick={()=> window.open(item.character.url, '_blank')}>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={item.character.images.webp.image_url} alt='' />
      </div>
      <div className='card-back'>
        <h1>{item.character.name}</h1>
        <ul>
          <li>
            <strong>Japanese Voice actor:</strong> {japaneseVoiceActor}
          </li>
          <li>
            <strong>Role:</strong> {item.role}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default CharacterItem