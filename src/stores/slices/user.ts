import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/interfaces';

interface UserState {
    user: IUser | null;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    user: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser | null>) => {
            state.user = action.payload;
            state.isLoggedIn = state.user != null;
        },
        clearUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
    },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
