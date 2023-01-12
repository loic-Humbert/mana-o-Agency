import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './header'
import CreateAnnonce from './createAnnonce'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps}></Component>
    </div>
  )
}

export default MyApp
