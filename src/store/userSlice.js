import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
    name:"All Users",
    initialState: {
        allUsers : []
    },
    reducers : {
        updateAllUsers : (state, action) => {
            state.allUsers = action.payload 
        }
    }
})

export const {updateAllUsers} = userSlice.actions
export default userSlice.reducer