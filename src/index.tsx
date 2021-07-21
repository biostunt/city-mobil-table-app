import reactDom from 'react-dom';
import './styles/globals.css';
import App from './components'
import { Provider } from 'react-redux';
import Store from './store';

reactDom.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
