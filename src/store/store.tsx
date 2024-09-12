import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/slices'; // Здесь подключаете все редьюсеры

export function createStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    preloadedState, // Если есть предварительно загруженное состояние
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];