import React from "react";
import { useEffect, useState } from 'react'
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { favoritesSlice } from "./store";


const Cocktails = ({ ingredient, drinkName }) => {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                if (drinkName == "") {
                    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                    let result = await response.json()
                    setCocktails(result.drinks)
                }
                else {
                    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)  
                    let result = await response.json()
                    setCocktails(result.drinks)
                }
            }
            catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [ingredient])

    const dispatch = useDispatch()

    const favorites = useSelector(state => state.favorites)

    const { addCocktailToFavorite } = favoritesSlice.actions

    const addToFav = (cocktail) => {
        const alreadyExists = favorites.find((fav) => fav.idDrink === cocktail.idDrink)!== undefined
        
        if (alreadyExists) {
            console.log('exists')
        }
        else {
            dispatch(addCocktailToFavorite(cocktail))
        }
    }

    return (
        <>
            {cocktails && cocktails.map((cocktail) => {
                return (
                    <Box
                        sx={{
                            mx: 'auto',
                            mb: 1,
                            p: 1,
                            width: 300,
                            borderRadius: 4,
                            bgcolor: 'primary.main'
                        }}
                        key={cocktail.idDrink}
                    >
                        <Box sx={{ height: '100%', width: '100%', textAlign:'center' }}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    color: 'white'
                                }}>
                                {cocktail.strDrink}
                            </Box>
                            <Box
                                component="img"
                                sx={{
                                    width: '94%',
                                    m: 1,
                                    borderRadius: 4
                                }}
                                alt="cocktail image"
                                src={cocktail.strDrinkThumb}
                            />
                            <Button 
                                sx={{ bgcolor:'white', mb:1 }}
                                variant='outlined'
                                color='error'
                                onClick={() => addToFav(cocktail)}
                            >
                                Add to fav!
                            </Button>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}

export default Cocktails 