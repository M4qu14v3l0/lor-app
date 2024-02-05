import { CharacterItem } from "./CharacterItem"

import { Character } from "@/interfaces"


interface Props{
  characters: Character[]
}

export const CharacterGrid = ( { characters }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 pb-10 pt-10">
      {
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
