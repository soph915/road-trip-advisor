import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Road Trip Advisor'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Plan a road trip"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/explore">
            <a>← Back to explore</a>
          </Link>
        </div>
      )}
    </div>
  )
}