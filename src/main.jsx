import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Container from 'react-bootstrap/Container';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container fluid>
      <App />
    </Container>
  </StrictMode>,
)
