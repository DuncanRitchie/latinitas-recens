import Head from 'next/head'
import Footer from '../components/Footer'
import Form from '../components/Form'
import { getRecords } from '../lib/getRecords'
import styles from '../styles/Home.module.css'

export default function Home({ isHomepage, query, records, error }) {
  if (isHomepage) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Latinitas Recens</title>
          <meta name="description" content="Lexicon of Neo-Latin compiled by Florus" />
          <link rel="icon" href="https://www.duncanritchie.co.uk/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <Form q=''/>
        </main>
  
        <Footer/>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Latinitas Recens — Records matching “{query.q}”</title>
        <meta name="description" content={`Results for ${query.q} in Florus’s Neo-Latin dictionary Latinitas Recens`} />
        <link rel="icon" href="https://www.duncanritchie.co.uk/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Form q={query.q}/>
        {records.map(record => <p key={record}>{record}</p>)}
      </main>

      <Footer/>
    </div>
  )
}

export async function getServerSideProps({ query, res }) {
  if (
    query.q
  ) {
    const results = getRecords(query.q)

    if (!results.records.length) {
      res.statusCode = 404
    }

    return { props: {
      isHomepage: false,
      query,
      ...results,
    }}
  }
  else {
    return { props: {
      isHomepage: true,
      query,
    }}
  }
}
