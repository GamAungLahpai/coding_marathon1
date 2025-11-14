import React from 'react'
import { useState } from 'react'

function RecipeManager() {
  const [cuisine, setCuisine] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [servings, setServings] = useState('')
  const [allergens, setAllergens] = useState('')

  return (
    <div>
      RecipeManager
    </div>

  )
}
 
export default RecipeManager
