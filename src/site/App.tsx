import './styles'
import styles from './Toast.module.styl'
import React, { StrictMode, FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

export const App: FC = () => (
  <>
    <StrictMode>
      <Header />
      <Main />
      <Footer />
    </StrictMode>

    <ToastContainer
      className={styles.toast}
      toastClassName={styles.toastContent}
      position="bottom-center"
      autoClose={false}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
  </>
)
