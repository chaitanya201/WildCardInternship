import {createSlice} from '@reduxjs/toolkit';
const commentsSlice = createSlice({
    name:"All Albums",
    initialState: {
        allComments : []
    },
    reducers : {
        updateAllComments : (state, action) => {
            state.allComments = action.payload 
        }
    }
})

export const {updateAllComments} = commentsSlice.actions
export default commentsSlice.reducer