import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/counter/campsites/campsitesSlice';
import { commentsReducer } from '../features/counter/comments/commentsSlice';
import { partnersReducer } from '../features/counter/partners/partnersSlice';
import { promotionsReducer } from '../features/counter/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
