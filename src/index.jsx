import { createRoot } from 'react-dom/client';
import { HomePage } from './HomePage';
import './global.css';

createRoot(document.querySelector('#app')).render(<HomePage />);
