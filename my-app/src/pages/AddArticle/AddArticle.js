import React,{useState,useEffect} from 'react'
import './addArticle.css'

function AddArticle({categories}) {



    const [formData,setFormData]=useState({
        title:'',
        summary:"",
        paragraphOne:"",
        paragraphTwo:"",
        paragraphThree:"",
        category:"",
        imageData:"",
    })

    const createArticle=(e)=>{
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div className="add-article-container">
       <form className="add-article-form" onSubmit={createArticle}>
                        <h2>Create Article</h2>
                        <div className="input-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" 
                            placeholder="Maximum 100 characters"
                            maxLength="100"
                            onChange={(e)=>setFormData({...formData,title:e.target.value})}
                            />
                        </div>  
                        <div className="input-group">        
                            <label htmlFor="summary">Summary</label>
                            <textarea name="summary"
                            placeholder="Maximum 120 characters"
                            maxLength="120"
                            onChange={(e)=>setFormData({...formData,summary:e.target.value})}
                            />
                        </div> 
                        <div className="input-group">
                            <label htmlFor="paragraphOne">Paragraph One</label>
                            <textarea name="paragraphOne" 
                            placeholder="Maximum 650 characters"
                            maxLength="650"
                            onChange={(e)=>setFormData({...formData,paragraphOne:e.target.value})}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="paragraphTwo">Paragraph Two</label>
                            <textarea name="paragraphTwo"
                            placeholder="Maximum 650 characters"
                            maxLength="650"
                            onChange={(e)=>setFormData({...formData,paragraphTwo:e.target.value})}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="paragraphThree">Paragraph Three</label>
                            <textarea name="paragraphThree" 
                            placeholder="Maximum 650 characters"
                            maxLength="650"
                            onChange={(e)=>setFormData({...formData,paragraphThree:e.target.value})}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="category">Category</label>
                            <select name="category" onChange={(e)=>setFormData({...formData,category:e.target.value})}
>
                                    <option value="">Select</option>
                                    {
                                        categories.map((item,index)=>{
                                            return <option key={index} value={item}>{item}</option>
                                        })
                                    }
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Upload Image</label>
                            <input type="file" name="image" accept="image/*"
                            onChange={(e)=>setFormData({...formData,imageData:e.target.files[0]})}/>
                        </div>
                        <button type="submit">Submit</button>
              </form>
    </div>

  )
}

export default AddArticle