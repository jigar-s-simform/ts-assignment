import {
  AnyAction,
  CombinedState,
  Reducer,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {InitialAuthStateType, authSlice} from './auth';
import {InitialHomeStateType, homeSlice} from './home';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  auth: authSlice,
  home: homeSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
};

type PersistedReducerType = CombinedState<{
  auth: InitialAuthStateType;
  home: InitialHomeStateType;
}>;

const pReducer = persistReducer<PersistedReducerType, AnyAction>(
  persistConfig,
  rootReducer,
);

const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,

      serializableCheck: false,
    }),

  devTools: true,
});

export const persistor = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
