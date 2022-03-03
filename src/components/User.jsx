import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedPost } from '../features/user/user.api';
import { useEffect } from 'react'


export default function User() {
    const dispatch = useDispatch();
    const {posts} = useSelector(state=>state.users);
    useEffect(() => {
      dispatch(fetchedPost())
    },[])

  return (
    <div>
        {posts.map((post) => {
            return (
                <div key = {post.id}>
                    <h1>{post.post}</h1>
                    <p>{post.author_username}</p>
                </div>
            )
        })}

    </div>
  )
}
