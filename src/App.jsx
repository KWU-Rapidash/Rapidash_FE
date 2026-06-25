import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './components/AppRouter'
import styles from './App.module.css'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={AppRouter} />
      <Toaster
        position='top-center'
        duration={2000}
        richColors
        toastOptions={{
          style: {
            marginTop: '10px',
          },
        }}
      />
    </div>
  )
}

export default App
