import { Provider } from 'react-redux';
import { createStore } from './store';

interface ReduxProviderProps {
    children: React.ReactNode;
    preloadedState?: any;
}

export function ReduxProvider({ children, preloadedState }: ReduxProviderProps) {
    const store = createStore(preloadedState);
    return <Provider store={store}>{children}</Provider>;
}