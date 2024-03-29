import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <Html>
      <Head>
        <link href="https://www.duncanritchie.co.uk/css/main.css" rel="stylesheet" key="main"/>
        <link href="https://www.duncanritchie.co.uk/css/subsites.css" rel="stylesheet" key="subsites"/>
        <link href="https://fonts.duncanritchie.co.uk/subsites.css" rel="stylesheet" key="fonts">
        {!isDev && <base href="https://latinitas-recens.netlify.app/latinitas-recens/"/>}
      </Head>
      <body>
        <Main />
        {isDev && <NextScript />}
      </body>
    </Html>
  )
}
