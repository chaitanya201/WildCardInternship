import { configureStore } from '@reduxjs/toolkit'
import allAlbums from './allAlbums'
import commentsSlice from './commentsSlice'
import currentUser from './currentUser'
import postsSlice from './postsSlice'
import userSlice from './userSlice'
export  default configureStore( {

    reducer: {
        allUsers : userSlice,
        allComments : commentsSlice,
        allPosts: postsSlice,
        allAlbums: allAlbums,
        currentUser : currentUser
    }
}
    
)