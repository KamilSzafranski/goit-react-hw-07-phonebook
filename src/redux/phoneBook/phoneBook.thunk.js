import { createAsyncThunk } from "@reduxjs/toolkit";

const Url = {
  API_URL: "https://6408d0ca2f01352a8a9e3aff.mockapi.io/contacts",
};

export const fetchContacts = createAsyncThunk(
  "phoneBook/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${Url.API_URL}`);

      if (!response.ok) return thunkAPI.rejectWithValue(response.status);
      const data = await response.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "phoneBook/deleteContacts",
  async (ids, thunkAPI) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`${Url.API_URL}/${ids}`, options);
      if (!response.ok) return thunkAPI.rejectWithValue(response.status);

      const data = await response.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const addContacts = createAsyncThunk(
  "phoneBook/addContacts",
  async ({ text: name, num: phone, mail: email }, thunkAPI) => {
    try {
      const contactToAdd = {
        name,
        phone,
        email,
      };
      const options = {
        method: "POST",
        body: JSON.stringify(contactToAdd),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${Url.API_URL}`, options);
      if (!response.ok) return thunkAPI.rejectWithValue(response.status);
      const data = await response.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
