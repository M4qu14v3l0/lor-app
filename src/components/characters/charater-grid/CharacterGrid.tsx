import { CharacterItem } from "./CharacterItem"

import { Character } from "@/interfaces"


interface Props{
  characters: Character[]
}

export const CharacterGrid = ( { characters }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-10 pt-20">
      {
        characters.length == 0
        ?
        <p className="text-center text-3xl">No Encontrado</p>
        :
        characters.map( character => (
          <CharacterItem  
            key={character._id}
            character={character}
          />
        ) )
      }
    </div>
  )
}
