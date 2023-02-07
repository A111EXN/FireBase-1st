import React,{useEffect,useState} from 'react'
import { db } from '../../config/firebaseConfig'
import { getDocs,collection,query,limit,orderBy } from 'firebase/firestore'
import './banner.css'
import { useNavigate } from 'react-router-dom'


function Banner() {

    let navigate=useNavigate()
    const[mainArticle,setMainArticle]=useState([])
    const[otherArticle,setOtherArticle]=useState([])
    


    useEffect(() => {
        
        const articleRef = collection(db,"articles")
        const q = query(articleRef,orderBy("createdAt","desc"),limit(5))
        getDocs(q,articleRef)
        .then(res=>{
            const articles = res.docs.map(item=>({
                id:item.id,
                ...item.data()
            }))
            setMainArticle (articles[0])
            setOtherArticle (articles.splice(1))
            console.log(otherArticle)

        })
        .catch(err=>console.log(err))
    }, [])
    



  return (
    <div className='banner-container'>
        <div onClick={()=>navigate(`/article/${mainArticle?.id}`)} className='main-article-container' style={{backgroundImage:`url(${mainArticle?.imageUrl})`}}>
            <div className="banner-info">
                <h2>{mainArticle?.title}...</h2>
                <small>{mainArticle?.createdAt?.toDate().toDateString()}</small>
             </div>
        </div>
        <div className='other-articles-container'>
            {
                otherArticle?.map(item=>{
                    return <div  onClick={()=>navigate(`/article/${item?.id}`)} className='other-article-item' style={{backgroundImage:`url(${item?.imageUrl})`}}>
                          <div className="banner-info">
                            <h3>{item?.title.slice(0,15)}...</h3>
                            <small>{item?.createdAt?.toDate().toDateString()}</small>
                         </div>
                    </div>

                })
            }
        </div>
    </div>
  )
}

export default Banner