import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Record from '../components/Record'
import { getRecords } from '../lib/getRecords'

export default function Home({ isHomepage, query, records, error }) {
  if (isHomepage) {
    return (
      <div>
        <Head>
          <title>Latinitas Recens</title>
          <meta name="description" content="Lexicon of Neo-Latin compiled by Florus" />
          <link rel="icon" href="https://www.duncanritchie.co.uk/favicon.ico" />
        </Head>
  
        <main>
          <h1>Latinitas Recens</h1>
          <Form q=''/>
          <About/>
        </main>
  
        <Footer/>
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>Latinitas Recens — Records matching “{query.q}”</title>
        <meta name="description" content={`Results for ${query.q} in Florus’s Neo-Latin dictionary Latinitas Recens`} />
        <link rel="icon" href="https://www.duncanritchie.co.uk/favicon.ico" />
      </Head>

      <main>
        <h1>Latinitas Recens</h1>
        <Form q={query.q}/>
        <h2>{records.length} results for “{query.q}”</h2>
        {records.map((record: string) => <Record record={record} q={query.q} key={record}/>)}
        <About/>
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
    // Make /?q= redirect to / because it’s tidier
    if (query.q === "") {
      res.writeHead(301, { Location: '/' });
      res.end()
    }
    return { props: {
      isHomepage: true,
      query,
    }}
  }
}
