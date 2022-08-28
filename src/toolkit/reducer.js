import { createSlice } from "@reduxjs/toolkit"

// creo el estado inicial y las props
const initialState = {
    isModalOpen: false,
    isAlertOpen: false
}


export const globalState = createSlice({

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

// console.log('STATE', globalState.isModalOpen)

export const { setMobileMenuOpen, setAlertOpen } = globalState.actions
export default globalState.reducer