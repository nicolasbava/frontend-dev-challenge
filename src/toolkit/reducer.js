/********** GLOBAL STATE - redux toolkit ***********/

import { createSlice } from "@reduxjs/toolkit"

// I create the initial state, keys and props
const initialState = {
    isModalOpen: false,
    isAlertOpen: false
}


export const globalState = createSlice({        // I create slice and actions, configurations

    name: "state",
    initialState,
    reducers: {

        setMobileMenuOpen: function(state){
            state.isModalOpen = !state.isModalOpen
        },

        setAlertOpen: function(state){
            state.isAlertOpen = !state.isAlertOpen
        }

    }
})


export const { setMobileMenuOpen, setAlertOpen } = globalState.actions
export default globalState.reducer