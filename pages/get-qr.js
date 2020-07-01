import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';
import Cookie from "js-cookie";



function Home({connectionID, QRCode, failed}) {
  Cookie.set("connectionID", connectionID);
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet" />
      <Head>
        <title>NeoLinkID</title>
      </Head>

      <main>
      {failed && <h2>Server currently offline.</h2> }
      {!failed && <h2>Credential QR Code</h2> }
      {!failed && <p>Scan the QR code with guardian device.</p>  }
        <br></br>
        
        <img src={QRCode}/>

        <div className="grid">
            
        {!failed && <Link href="/connected"><div className="card"><h3>Done</h3></div></Link>}
        {failed && <Link href="/get-qr"><div className="card"><h3>Retry</h3></div></Link>}
          

          <Link href="/">
            <div className="cardCancel">
            <p>Cancel</p>
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

        img{
          width: 80%;
          max-width: 600px
        }

        main {
          padding: 5rem 0;
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
          font-size: 4rem;
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
          margin-top: 3rem;
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
          height: 0em;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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

export async function getServerSideProps() {
  try{
    const res = await fetch('https://iwsg2020.crc.nd.edu:3000/DCR/v1/connectionInvitation')
    console.log("getting qr")
    const json = await res.json()
    console.log(json)
    return {
      props: {
        connectionID : json.connectionId,
        QRCode : json.QRCode,
        failed: false
      },
    }
  } catch (e){
    console.log("server offline")
    return {
      props: {
        failed: true
      },
    }
  }
}

export default Home
