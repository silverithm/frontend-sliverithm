import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './page/MainPage';
import SignInPage from './page/SignInPage';
import SignUpPage from './page/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
