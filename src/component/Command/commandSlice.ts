import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

export interface CommandState {
    isOpen: boolean
}

export const commandSlice = createSlice({
    name: 'command',
    initialState: {
        isOpen: false
    },
    reducers: {
        open: state => {
            state.isOpen = true;
        },
        close: state => {
            state.isOpen = false;
        }
    }
})


export const { open, close } = commandSlice.actions
export const isOpen = (state: RootState) => state.commandDisplay.isOpen
export default commandSlice.reducer