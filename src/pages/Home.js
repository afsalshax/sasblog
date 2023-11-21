import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc,doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { Trash2 } from 'react-feather'
import { Button } from 'react-bootstrap'



function Home({isAuth}) {



  // const [postLists, setPostLists] = useState([])
  // const postsCollectionRef = collection(db, "posts")


  // const deletePost =async(id)=>{
  //   const postDoc = doc(db,"posts",id)
  //     await deleteDoc(postDoc)
  
  //   }
  

  // useEffect(() => {

  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef)
  //     setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   }
  //   getPosts()

  // } ,[])

  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  const deletePost = async (id) => {
    try {
      const postDoc = doc(db, 'posts', id);
      await deleteDoc(postDoc);
      // After deleting the post, you may want to refresh the posts list
      const updatedData = await getDocs(postsCollectionRef);
      setPostLists(updatedData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);



//   return (
//     <div className='homePage'>{postLists.map((post) => {
//       return 
//       <div className='post'>
//         <div className='postHeader'>
//           <div className='title'>
//             <h1>{post.title}</h1>
//           </div>
//           <div className='deletePost'>
// {       isAuth &&   post.author.id === auth.currentUser.uid && (  
// <Button onClick={()=>{deletePost(post.id)}} variant='outline-danger' > <Trash2></Trash2></Button>
//     )}            </div>
//         </div>
//         <div className='PostTextContainer'> {post.postText}</div>
//         <h5>@{post.author.name}</h5>
//       </div>
//     })}
//     </div>
//   )
// }

return (
  <div className='homePage'>
    {postLists.map((post) => {
      return (
        <div className='post' key={post.id}>
          <div className='postHeader'>
            <div className='title'>
              <h1>{post.title}</h1>
            </div>
            <div className='deletePost'>
              {isAuth && post.author && post.author.id === auth.currentUser.uid && (
                <Button onClick={() => { deletePost(post.id) }} variant='outline-danger' >
                  <Trash2 />
                </Button>
              )}
            </div>
          </div>
          <div className='PostTextContainer'> {post.postText}</div>
          <h5>{post.author?.name}</h5>
        </div>
      );
    })}
  </div>
)};

export default Home

