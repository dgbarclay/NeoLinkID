import Head from 'next/head';
import Link from 'next/link';
import DynamicForm from "./components/DynamicForm.js";
import { useRouter, createRouter } from 'next/router';
import fetch from 'node-fetch';
import { withRouter } from 'next/router';
import React, { Component } from "react";
import Cookie from 'js-cookie';
import Router from 'next/router';
import Header from "../components/Header";




class Credential extends Component {

    constructor(props) {
        super(props);
        this.state = { something: 0 };
      }

    static async getInitialProps(router) {
    
    const res = await fetch(`https://iwsg2020.crc.nd.edu:3000/DCR/v1/credentialSchema/${router.query.credentialID}/`);
    Cookie.set("credentialID", router.query.credentialID);
    Cookie.set("credentialName", router.query.credentialName)
    try{
        const data = await res.json();
        console.log(`Data is: ${data}`);
        return {
            data: data,
        };
    } catch (e){
        console.log(e);
    }
  }

    onSubmit = (model) => {
        var stringModel = JSON.stringify(model)
        Cookie.set("data",stringModel)
        Cookie.set("session",stringModel)
        const {pathname} = Router
        Router.push('/credentials/confirmation')
    }


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
        <h1 className="title">
            {this.props.router.query.credentialName}
        </h1>
        <p>Enter details below.</p>
        <div className="grid">
        <DynamicForm className = "form"
          title = {this.props.router.query.credentialName}
          model = {this.props.data}
          onSubmit = {(model) => {this.onSubmit(model)}}
          />
    <Link href="/connected">

    <div className="card">
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
          line-height: 1;
          margin-bottom: 0.2rem;
        }
        p {
          color: rgba(0,163,255,0.7);
          margin-top: 0rem;
        }

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
          text-align: center;
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

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 0rem;
        }

        .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 1px solid #00A3FF;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            background-color: none;
          } 

        .card:hover,
        .card:focus,
        .card:active {
          color: #0016DD;
          border-color: #0016DD;
        }

        .card h3 {
          margin: 0 0 0rem 0;
          font-size: 1.2rem;
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


export default withRouter(Credential);



