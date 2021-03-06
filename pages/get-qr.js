import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';
import Cookie from "js-cookie";
import Modal from 'react-modal';
import { useRouter } from "next/router";
import ModalConfirm from "./components/modalConfirm";
import Header from "./components/Header";


Modal.setAppElement("#__next");



function Home({connectionID, QRCode, failed}) {
  
  Cookie.set("connectionID", connectionID);
  const router = useRouter(); 
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <Head>
        <title>NeoLinkID</title>
        <link rel="icon" href="/mHBS.png" />
      </Head>
      <Header/>
      

      <main>
      {failed && <h2>Server currently offline.</h2> }
      {!failed && <h1>Credential QR Code</h1> }
      {!failed && <p>Scan QR code with guardian's device.</p>  }
        <br></br>
        
        <img src={QRCode}/>

        <div className="grid">
            
        {!failed && <Link href={'/get-qr/?modalConfirm=${true}'} as={'/components/modalConfirm'}><div className="card"><h3>Next</h3></div></Link>}
        {failed && <Link href="/get-qr"><div className="card"><h3>Retry</h3></div></Link>}
           

          <Link href="/">
            <div className="cardCancel">
            <h3>Cancel</h3>
            </div>
          </Link>
        </div>
        <Modal
        style={{
          content: {
            backgroundColor: '#00B2FF',
            backgroundImage: 'linear-gradient(to bottom right, rgb(128, 229, 255) ,rgb(0, 22, 221))'
          }
        }} 
          isOpen={!!router.query.modalConfirm }
          onRequestClose={() => router.push("/get-qr")}>
            <ModalConfirm/>
      </Modal>
      </main>

      

      <style jsx>{`

        h1{
          line-height: 1;
          margin-bottom: 0.2rem;
        }
        p {
          color: rgba(0,163,255,0.7);
          margin-top: 0rem;
        }

        .container {
          min-height: 100vh;
          padding: 0 0rem;
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
          background-color: #00A3FF ;
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
          }

          .cardCancel p {
            margin: 0 0 0rem 0;
            font-size: 1.0rem;
            color: #00A3ff;
          }


        .card:hover,
        .card:focus,
        .card:active {
          color: #0016DD;
          border-color: #0016DD;
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
