import { configureStore } from '@reduxjs/toolkit'
import commandReducer from '../component/Command/commandSlice'
import sidebarReducer from '../component/Sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    commandDisplay: commandReducer,
    sidebarDisplay: sidebarReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch