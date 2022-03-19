import {createSlice} from '@reduxjs/toolkit';
const albumSlice = createSlice({
    name:"All Albums",
    initialState: {
        allAlbums : []
    },
    reducers : {
        updateAllAlbums : (state, action) => {
            state.allAlbums = action.payload 
        }
    }
})

export const {updateAllAlbums} = albumSlice.actions
export default albumSlice.reducer