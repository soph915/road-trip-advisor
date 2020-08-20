import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import indexStyles from '../styles/index.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>        
        <title>Road Trip Advisor</title>
      </Head> 
      <div className={indexStyles.pageContainer}>
        <div className={indexStyles.textBody}>
          <h2 className={utilStyles.headingLg}>Road Trip Advisor</h2>
          <div>Want to take a road trip?</div>
          <section className={utilStyles.headingMd}>Click one of the options below to start planning!</section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <Link href="explore">
              <button>
                Explore
              </button>
            </Link>
            {/* <Link href="create">
              <button>
                Create
              </button>
            </Link> */}
          </section>
        </div>
        <div>
          <img src="https://media.cntraveler.com/photos/5edfc029b16364ea435ca862/4:5/w_1600,h_2000,c_limit/Roadtrip-2020-GettyImages-1151192650.jpg" className={indexStyles.homeImage}></img>
        </div>
      </div>
    </div>
  )
