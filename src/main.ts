import { createApp } from './components/App';
import './index.css';

const root: HTMLElement | null = document.getElementById('root');
if (root) {
    const app = createApp();
    app.mount(root);
}
