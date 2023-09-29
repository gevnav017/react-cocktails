import { configureStore, createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice ({
    name: "favorites",
    initialState: [],
    reducers: {
        addCocktailToFavorite: (state, action) => {
            state.push(action.payload)
        },
        removeCocktailFromFavorites: (state, action) => {
            let idx
            state.forEach((drink, index) => {
                if (drink.idDrink === action.payload.idDrink) {
                    idx = index
                }
            })
            state.splice(idx, 1)
        },
    }
})

const store = configureStore ({
    reducer: {
        favorites: favoritesSlice.reducer
    }
})

export default store

window.store = store