'use client'

import { CharacterGrid } from "@/components";
import { useFavoriteStore } from "@/store";
import { WithOutFavorites } from "./ui/WithOutFavorites";


export default function FavoritesPage() {

  const { favorites } = useFavoriteStore()

  return (
    <div className="pt-10">
        {
          favorites.length == 0
          ?
          <WithOutFavorites />
          :
          <CharacterGrid characters={favorites}/>
        }

    </div>
  );
}