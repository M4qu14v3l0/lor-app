'use client'

import { CharacterGrid } from "@/components";
import { useFavoriteStore } from "@/store";


export default function FavoritesPage() {

  const { favorites } = useFavoriteStore()

  return (
    <div>
        <CharacterGrid characters={favorites}/>
    </div>
  );
}