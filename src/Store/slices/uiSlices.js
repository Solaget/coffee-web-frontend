import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    searchModalIsOpen: false,
};

const uiSlices = createSlice({
    name: 'uiSlices',
    initialState,
    reducers:{
        openSearchModal(state, action){
            state.searchModalIsOpen = true
        },
        closeSearchModal(state, action){
            state.searchModalIsOpen = false
        }
    }
})


export default uiSlices;

export const {openSearchModal, closeSearchModal} = uiSlices.actions;