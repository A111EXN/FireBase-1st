import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArticleDetails() {

  const {articleId}=useParams()
  const [article,setArticle]=useState('')

  useEffect(() => {
    const docRef =doc(db,"articles",articleId)
  }, [])
  
  return (
  <div>{articleId}</div>
  )
}

export default ArticleDetails