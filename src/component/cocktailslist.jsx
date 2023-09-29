// About.js
import React, { useState } from 'react';
import Cocktails from './cocktails';
import { Input, Box } from '@mui/material';


function CocktailsList() {
    const [ingredient, setIngredient] = useState("vodka")
    const [drinkName, setDrinkName] = useState("")

    const search = (e) => {
        setIngredient(e.target.value)
        setDrinkName(e.target.value)
    }

    return (
        <>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <h2>Cocktails</h2>
                <Box sx={{ m:2 }}>
                    Search for a cocktail by ingredient:
                    <br></br>
                    <Input 
                        placeholder="search..." 
                        variant="outlined" 
                        onChange={search}
                    />
                </Box>
            </div>
            <Cocktails ingredient={ingredient} drinkName={drinkName} />
        </>
    )
}
export default CocktailsList;