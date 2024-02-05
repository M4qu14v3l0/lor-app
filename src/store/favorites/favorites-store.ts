import { Character } from '@/interfaces'
import { create } from 'zustand'

interface FavoriteStoreState {
  favorites: Character[];

}

interface FavoriteStoreAction {
  addFavorite: (newFavorite: Character) => void;
}

export const useFavoriteStore = create<FavoriteStoreState & FavoriteStoreAction>((set) => ({
  favorites: [],
  addFavorite: (newFavorite) => set((state) => {
    const { _id } = newFavorite
    const existingIndex = state.favorites.findIndex((fav) => fav._id === _id)
    if (existingIndex !== -1) {
      const updatedFavorites = [...state.favorites]
      updatedFavorites.splice(existingIndex, 1)
      return { favorites: updatedFavorites }
    } else {
      return { favorites: [...state.favorites, newFavorite] }
    }
  })
}))
