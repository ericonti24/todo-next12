import { ChakraProvider } from '@chakra-ui/react'
import { Provider as SupabaseProvider } from 'react-supabase'
import {supabase} from './api/test'

function MyApp({ Component, pageProps }) {
  return (
    <SupabaseProvider value={supabase}>
        <ChakraProvider>
          <Component {...pageProps} />
       </ChakraProvider>
    </SupabaseProvider>
  )
}

export default MyApp
