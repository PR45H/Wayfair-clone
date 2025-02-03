import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index:true}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Provider>
        <RouterProvider router={router}/>
      </Provider>
    </ReduxProvider>
  </StrictMode>,
)
