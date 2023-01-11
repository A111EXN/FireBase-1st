import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryArticles() {
   
  const {categoryName}= useParams()

  return (
    <div>
      {categoryName}
    </div>  
  )
}

export default CategoryArticles