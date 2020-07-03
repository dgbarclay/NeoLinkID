import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet" />
      <Head>
        <title>NeoLinkID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Does the Guardian's phone show a successful connection?</h3>

        <div className="grid">
          <Link href="/connected">
            <div className="card">
            <h3>Yes</h3>
            </div>
          </Link>
          <Link href="/get-qr">
            <div className="cardCancel">
            <h3>No</h3>
            </div>
          </Link>
        </div>
        
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h3{
            text-align: center;
            justify-content: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
  
            max-width: 800px;
            margin-top: 2rem;
        }

        .card {
            margin: 0.1rem;
            flex-basis: 45%;
            padding: 1rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            background-color: white;
            color: black;
          }
  
          .cardCancel {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1rem;
              text-align: center;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
          
          .cardCancel:hover,
          .cardCancel:focus,
          .cardCancel:active {
            color: #73faf5;
            border-color: #73faf5;
          }
  
          .cardCancel h3 {
              margin: 0 0 0rem 0;
              font-size: 1.0rem;
            }
  
            .cardCancel p {
              margin: 0 0 0rem 0;
              font-size: 1.0rem;
            }
  
  
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
  
          .card h3 {
            margin: 0 0 0rem 0;
            font-size: 1.5rem;
          }
  
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        body {
          font-family: 'Quicksand', sans-serif;
          font-weight: 300;
         }
         
         h1, h2, h3, h4, h5, h6 {
          font-weight: 500;
         }

        * {
          box-sizing: border-box;
        }
      
      `}</style>
    </div>
  )
}