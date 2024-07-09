import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
    hide: boolean
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        hide: false
    },
    reducers: {
        toggleHide: state => {
            state.hide = !state.hide;
        }
    }
}) 

export const { toggleHide } = sidebarSlice.actions
export default sidebarSlice.reducer
