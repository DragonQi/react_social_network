import reportWebVitals from './reportWebVitals';
import './index.css'
import {rerenderEntireTree} from "./render";
import state from "./redux/state";

rerenderEntireTree(state);

reportWebVitals();