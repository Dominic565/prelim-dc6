import React from 'react'


export const View = ({animes, deleteAnime}) => {
    return animes.map(anime=>(
        <tr key={anime.name}>
            <td>{anime.name}</td>
            <td>{anime.description}</td>
            <td>{anime.released}</td>
            <td>{anime.episode}</td>
            <td className='delete-btn' onClick={()=>deleteAnime(anime.name )}>
               Delete
            </td>
        </tr>
    ))
}