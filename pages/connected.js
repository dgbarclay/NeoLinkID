import Head from 'next/head'
import Link from 'next/link'
import DynamicCards from "./components/DynamicCards.js";
import fetch from 'node-fetch'
import React from 'react'



function Home({jsonArray, failed}) {

  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet" />
      <Head>
        <title>NeoLinkID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!failed && <h1 className="title">NeoLinkID</h1> }

        {failed && <h2>Server currently offline.</h2> }
        
        {!failed && <h3 className="newTitle">Issue Credential:</h3>}

        <div className="grid">
        {!failed && <DynamicCards model= {jsonArray}/>}

        {failed && <Link href="/connected"><div className="card"><h3>Retry</h3></div></Link>}
        {!failed && <Link href="/"><div className="cardFinish"><h3>Finish</h3></div></Link>}

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

        .specialTitle{
            padding-bottom: 0rem;
        }

        .buttons { 
            width: 60%;
            max-width: 300px;
            table-layout: fixed;
            border-collapse: collapse;
            margin: 0.3rem;
            flex-basis: 45%;
            padding: 1rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;  
        }

        .buttons button { 
          width: 100%;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 0rem;
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

        .cardFinish {
          margin: 3rem;
          width: 60%;
          flex-basis: 45%;
          padding: 1rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .cardFinish:hover,
        .cardFinish:focus,
        .cardFinish:active {
          color: #73faf5;
          border-color: #73faf5;
        }

        .card h3 {
          margin: 0 0 0rem 0;
          font-size: 1.2rem;
        }

        .cardFinish h3 {
            margin: 0 0 0rem 0;
            font-size: 1.2rem;
          }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .newTitle {
            padding-top: 5rem;
            padding-bottom: 0rem;
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

export async function getStaticProps() {
  try{
    const res = await fetch('http://iwsg2020.crc.nd.edu:3000/DCR/v1/credentialSchema')
    const json = await res.json()

    const fieldArray = [];

    console.log(json)
    console.log(json.length);
    for( var i=0; i < json.length; i++){
        var id = json[i].credentialId;
        const res = await fetch('http://iwsg2020.crc.nd.edu:3000/DCR/v1/credentialSchema/'+id)
        const fields = await res.json()
        fieldArray.push(fields)
    }
    console.log(fieldArray)
  
    return {
      props: {
        jsonArray: json,
        fieldArray: fieldArray,
        failed: false
      },
    }
  }
  catch (e){
    return {
      props: {
        failed: true
      },
    }
  }
}


export default Home