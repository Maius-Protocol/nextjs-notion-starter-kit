// global styles shared across the entire site
import * as React from 'react'
import {useEffect} from 'react'
import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

import {bootstrap} from '@/lib/bootstrap-client'
import {isServer} from '@/lib/config'
import {analytics} from '../utils/firebase'
import {logEvent as firebaseLogEvent} from 'firebase/analytics'

if (!isServer) {
  bootstrap()
}

export default function App({ Component, pageProps }: AppProps) {
  const routers = useRouter()


  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url: string) => {
        firebaseLogEvent(analytics!, 'page_view', { page_path: url })
      }

      routers.events.on('routeChangeComplete', logEvent)
      logEvent(window.location.pathname)

      return () => {
        routers.events.off('routeChangeComplete', logEvent)
      }
    }
  }, [])

  return <Component {...pageProps} />
}
