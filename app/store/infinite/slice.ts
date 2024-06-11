import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// type

interface State {
  infiniteData: Array<number>
  isLoadMore: boolean
  page: number
}

const initialState: State = {
  infiniteData: [],
  isLoadMore: false,
  page: 0
};

export const infiniteSlice = createSlice({
  name: "infinite",
  initialState,
  reducers: {
    setInfiniteData: (state, action: PayloadAction<Array<number>>) => {
      state.infiniteData = action.payload;
    },
    setIsLoadMore: (state, action: PayloadAction<boolean>) => {
      state.isLoadMore = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
});

export const { setInfiniteData, setIsLoadMore, setPage } = infiniteSlice.actions;
export const infiniteReducer = infiniteSlice.reducer;