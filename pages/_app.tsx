import '../css/index.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="site-wrapper text-blue">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
