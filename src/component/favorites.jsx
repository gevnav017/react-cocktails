// Contact.js
import React from 'react';
import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesSlice } from './store';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites)

    const dispatch = useDispatch()

    const { removeCocktailFromFavorites } = favoritesSlice.actions

    const handleRemove = (removeCocktail) => {
        dispatch(removeCocktailFromFavorites(removeCocktail))
    }

    return (
        <>
            {favorites && favorites.map((fav, idx) => {
                return (
                    <Box
                        key={idx}
                        sx={{
                            mx: 'auto',
                            mt: 2,
                            p: 2,
                            borderRadius: 2,
                            width: '20%',
                            textAlign: 'center',
                            bgcolor: 'primary.main'
                        }}
                    >
                        <Box sx={{
                            color: 'white'
                        }}>
                            {fav.strDrink}
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                width: '94%',
                                m: 1,
                                borderRadius: 4
                            }}
                            alt="cocktail image"
                            src={fav.strDrinkThumb}
                        />
                        <Button 
                            variant='error' 
                            sx={{
                                bgcolor: 'white',
                            }}
                            onClick={() => handleRemove(fav)}
                        >
                            Remove
                        </Button>
                    </Box>
                )
            })}
        </>
    )
}

export default Favorites;