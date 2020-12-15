
import React from 'react';
import DashboardScreen from './components/screen/DashboardScreen';
import { Provider } from 'react-redux';
import store from './redux';

/**
 * Main App Component for Basic Set Up
 */
const App = () => {
    return (
        <Provider store={store}>
            <DashboardScreen />
        </Provider>
    );
};

export default App;
