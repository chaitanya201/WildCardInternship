import {createSlice} from '@reduxjs/toolkit';
const postsSlice = createSlice({
    name:"All Posts",
    initialState: {
        allPosts : []
    },
    reducers : {
        updateAllPosts : (state, action) => {
            state.allPosts = action.payload 
        }
    }
})

export const {updateAllPosts} = postsSlice.actions
export default postsSlice.reducer