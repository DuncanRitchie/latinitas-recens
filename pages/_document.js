import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <Html>
      <Head>
        <link href="https://www.duncanritchie.co.uk/css/main.css" rel="stylesheet" key="main"/>
        <link href="https://www.duncanritchie.co.uk/velut-json-generator/main.css" rel="stylesheet" key="json-generator"/>
        {!isDev && <base href="https://latinitas-recens.netlify.app/latinitas-recens/"/>}
      </Head>
      <body>
        <Main />
        {isDev && <NextScript />}
      </body>
    </Html>
  )
}