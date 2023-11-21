import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {addDoc, collection} from 'firebase/firestore'
import { db,auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function CreatePost({isAuth}) {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")

const postsCollectionRef = collection(db,"posts")
let navigate=useNavigate()

  const createPost=async ()=>{

    await addDoc(postsCollectionRef,{
      title,
      postText,
      author :{name:auth.currentUser.displayName ,id:auth.currentUser.uid },
    })
    navigate("/")

  }

  useEffect(()=>{

    if(!isAuth) {
      navigate("/login")


    }

  },[])

  return (
    <div className='createPostPage'>
      {""}
      <div className='cpContainer'>
        <h1> Create A Post</h1>

        <div style={{fontFamily:'Acme',color:'black'}} className='inputGp'>
          <label>Title:</label>
          <input style={{background: "transparent",border:"2px"}} type="text" placeholder='Title...'
            onChange={(event) => { setTitle(event.target.value) }}
          />
        </div>
        <div  style={{fontFamily:'Acme',color:'black'}} className='inputGp'>
          <label >Post:</label>
          <textarea style={{background: "transparent",border:'2px'}} placeholder='post...'
            onChange={(event) => { setPostText(event.target.value) }}
          ></textarea>
        </div>
        <Button style={{fontFamily:"Racing Sans One"}} variant='primary' onClick={createPost}>Submit Post</Button>

      </div>
    </div>
  )
}

export default CreatePost