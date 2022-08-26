import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducer'

const store = configureStore( {

    reducer: {  
        state: globalReducer
    }
}) 

export default store

