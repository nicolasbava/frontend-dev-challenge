import { createSlice } from "@reduxjs/toolkit"

// creo el estado inicial y las props
const initialState = {
    isModalOpen: false,
}


export const globalState = createSlice({

    name: "state",
    initialState,
    reducers: {

        setMobileMenuOpen: function(state){
            state.isModalOpen = !state.isModalOpen
        },

    }
})

console.log('STATE', globalState.isModalOpen)

export const { setMobileMenuOpen } = globalState.actions
export default globalState.reducer