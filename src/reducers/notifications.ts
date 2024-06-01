import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Notification = {
  id: string;
  title: string;
  message: string;
  duration?: number;
};

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications = [...state.notifications, action.payload];
    },
    deleteNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },
  },
});

export const { addNotification, deleteNotification } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
