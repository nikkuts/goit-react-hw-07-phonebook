import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
        reducer(state, action) {

          if(state.contacts.some(contact => contact.name === action.payload.name)) {
            alert(`${action.payload.name} is already in contacts`);
            return;
          } 
            state.contacts.push(action.payload);
        },
        prepare(name, number) {
            return {
                payload: {
                    name,
                    number,
                    id: nanoid(),
                } 
            }
        },
    },
    deleteContact(state, action) {
        const index = state.contacts.findIndex(contact => contact.id === action.payload);
        state.contacts.splice(index,1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;