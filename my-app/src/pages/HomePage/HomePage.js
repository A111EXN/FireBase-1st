import React, { useState,useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import { db } from '../../config/firebaseConfig'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import './homePage.css'
import { useNavigate } from 'react-router-dom'


function HomePage() {
  const [selectedArticle,setSelectedArticle]=useState([])
  let navigate=useNavigate()

  useEffect(() => {
    const articleRef= collection(db,"articles")
    const q = query(articleRef,where("isSelected","==",true),limit(5))
    getDocs(q,articleRef)
    .then(res=>{
      const articles = res.docs.map(item=>({
        id:item.id,
        ...item.data()
    }))
    setSelectedArticle(articles)
    })
  }, [])

  
  return (
    <div>
        <Banner/>
        <div className="selected-articles">
        <h1>Editor's Top Picks</h1>
        {
          selectedArticle?.map(item=>{
             return <div key={item.id}>
             <p>{item.title}</p>
             <img src={item.imageUrl} style={{width:"200px"}}/>
             <p onClick={()=>navigate(`/article/${item.id}`)}>read</p>
           </div>
        })
        }
        </div>
    </div>
  )
}

export default HomePage