import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type mapPlacesProps = {
    id: string
    lat: number
    lng: number
    iconUrl: string
}

const initialState: mapPlacesProps[] = []

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMap: (state, action: PayloadAction<mapPlacesProps>) => {
            const newMapPlace = action.payload

            if (state.find((place) => place.id === newMapPlace.id)) {
                
            } else {
                state.push(action.payload)
            }

        }
    }
})

export const { setMap } = mapSlice.actions

export default mapSlice.reducer
