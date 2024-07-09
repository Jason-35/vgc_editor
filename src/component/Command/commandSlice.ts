import { createSlice } from '@reduxjs/toolkit'

const commands = {
    "Help": "Ctrl + H",
    "Test": "Ctrl + Z + 4",
    "Map": "Ctrl + M",
}

export const commandSlice = createSlice({
    name: 'command',
    initialState: {
        isOpen: false,
        commandList: commands,
        currentHover: 0,
        executeCommand: Object.keys(commands)[0],
    },
    reducers: {
        open: state => {
            state.isOpen = true;
        },
        close: state => {
            state.isOpen = false;
        },
        hoverUp: state => {
            // Account for react rendering
            if (state.currentHover < 1) {
                state.currentHover = 0
            } else {
                state.currentHover -= 1
            }
            state.executeCommand = Object.keys(commands)[state.currentHover]
        },
        hoverDown: state => {
            // Account for react rendering
            const offset = 2
            if (Object.keys(state.commandList).length-offset < state.currentHover) {
                state.currentHover = Object.keys(state.commandList).length-1
            } else {
                state.currentHover += 1
            }
            state.executeCommand = Object.keys(commands)[state.currentHover]
        }

    }
})

export const { open, close, hoverUp, hoverDown } = commandSlice.actions
export default commandSlice.reducer