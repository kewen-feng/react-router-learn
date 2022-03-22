import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App';
import Expenese from './routes/expenese';
import Invoices from './routes/invoices';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="expenese" element={< Expenese/>} />
      <Route path="invoices" element={< Invoices/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);