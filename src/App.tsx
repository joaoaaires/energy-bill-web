import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Root from './pages/Root'
import Dashboard from './pages/Dashboard'
import Bills from './pages/Bills'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/bills',
          element: <Bills />,
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
