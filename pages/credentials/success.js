import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { Component } from "react";
import Header from "../components/Header";


class Success extends Component {

    render(){
  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <Head>
        <title>NeoLinkID</title>
        <link rel="icon" href="/mHBS.png" />
      </Head>
      <Header/>

      <main>
      <svg xmlns="http://www.w3.org/2000/svg" height="150" viewBox="0 0 24 24" width="150"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
          <h1>Credential Issued</h1>
          <p>The credential has been successfully issued.</p>
        
        <div className="grid">

          <Link href="/connected">
            <div className="card">
            <h3>Home</h3>
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
        
        svg{
          fill: blue;
        }
        

        h1{
          line-height: 1;
          margin-bottom: 0.2rem;
        }
        p {
          color: rgba(0,163,255,0.7);
          margin-top: 0rem;
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
            border: 1px solid #00A3FF;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            background-color: white;
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
}


export default withRouter(Success);



