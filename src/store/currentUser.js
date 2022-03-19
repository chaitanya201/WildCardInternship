import {createSlice} from '@reduxjs/toolkit';
const currentUserSlice = createSlice({
    name:"Set Current User",
    initialState: {
        currentUser : {}
    },
    reducers : {
        updateCurrentUser : (state, action) => {
            state.currentUser = action.payload 
        }
    }
})

export const {updateCurrentUser} = currentUserSlice.actions
export default currentUserSlice.reducer