import Head from 'next/head'
import Link from 'next/link'
import Header from "./Header";



export default function Home() {
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <Head>
        <title>NeoLinkID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main>
        <h1>Confirmation</h1>
        <p>Does the Guardian's device show a successful connection?</p>

        <div className="grid">
          <Link href="/connected">
            <div className="card">
            <h3>Confirm</h3>
            </div>
          </Link>
          <Link href="/get-qr">
            <div className="cardCancel">
            <h3>Cancel</h3>
            </div>
          </Link>
        </div>
        
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1{
          line-height: 0;

        }
        p {
          color: rgba(0,163,255,0.7);
          line-height: 1;
          text-align: center;
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
            background-color: #00A3FF;
            color: white;
          }
  
          .cardCancel {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1rem;
              text-align: center;
              color: inherit;
              text-decoration: none;
              border: 1px solid #00A3FF;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
          
          .cardCancel:hover,
          .cardCancel:focus,
          .cardCancel:active {
            color: #0016DD;
            border-color: #0016DD;
          }
  
          .cardCancel h3 {
              margin: 0 0 0rem 0;
              font-size: 1.0rem;
              line-height: 12re;
            }
  
            .cardCancel p {
              margin: 0 0 0rem 0;
              font-size: 1.0rem;
              color: #00A3FF;
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
