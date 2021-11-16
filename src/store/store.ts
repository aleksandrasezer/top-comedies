import {ActionType, moviesReducer} from "./movies-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk"

let rootReducer = combineReducers({
    main: moviesReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))


//types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    ActionType
    >
