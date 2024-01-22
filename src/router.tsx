import { createBrowserRouter } from 'react-router-dom'
import { Root } from './pages/Root'
import { Dashboard } from './pages/Dashboard'
import { ListBill } from './pages/ListBill'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/bill', element: <ListBill /> },
      { path: '/form', element: <ListBill /> },
    ],
  },
])
