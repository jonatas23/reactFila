import React from 'react';
import { Provider } from 'react-redux'

import Routes from "./routes";
import Header from "./components/Header";
import store from "./store";

const App = () => (
    <div className="App">
        <Provider store={store}>
            <Header />
            <Routes />
        </Provider>
    </div>
)

export default App;
