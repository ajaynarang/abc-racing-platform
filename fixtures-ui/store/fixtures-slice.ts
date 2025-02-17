import { fetchFixturesAPI } from "@/services/fixture-api";
import type { Fixture } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface FixturesState {
  fixtures: Fixture[];
  status: "loading" | "success" | "error" | "";
  error: string | null;
}

const initialState: FixturesState = {
  fixtures: [],
  status: "",
  error: null,
};

export const fetchFixtures = createAsyncThunk(
  "fixtures/fetchFixtures",
  async () => {
    const response = await fetchFixturesAPI();
    console.log(response);
    return response.fixtures;
  }
);

const fixturesSlice = createSlice({
  name: "fixtures",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFixtures.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFixtures.fulfilled, (state, action) => {
        state.status = "success";
        state.fixtures = action.payload;
      })
      .addCase(fetchFixtures.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Failed to fetch fixtures";
      });
  },
});

export default fixturesSlice.reducer;
