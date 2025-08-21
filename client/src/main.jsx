import { createRoot } from 'react-dom/client';
import App from './App'; // Add this line
import "./index.css"; // Import your CSS file if needed


createRoot(document.getElementById('root')).render(<App />);