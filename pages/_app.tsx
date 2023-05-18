import { DarkModeProvider } from '@/components/DarkModeContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import StyledComponentsRegistry from '../lib/registry';

export default function App({ Component, pageProps }: AppProps) {
  return<StyledComponentsRegistry>
             <DarkModeProvider>
              <Component {...pageProps} />
          </DarkModeProvider>
          </StyledComponentsRegistry>

}
