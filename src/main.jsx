import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
