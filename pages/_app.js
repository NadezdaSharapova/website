import Layout from '../components/Layout'
// import { AuthContextProvider } from '../context/AuthContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    // <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </AuthContextProvider>
  )
}