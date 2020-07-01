import Head from 'next/head';
import Link from 'next/link';
import DynamicForm from "./components/DynamicForm.js";
import { useRouter, createRouter } from 'next/router';
import fetch from 'node-fetch';
import { withRouter } from 'next/router';
import React, { Component } from "react";
import Cookie from 'js-cookie';
import Router from 'next/router';

class Confirmation extends Component {
    
    state = {
        loading : false
    }


    onSubmit = () => {

        this.setState({loading : true});

        var credentialID = Cookie.get('credentialID');
        var connectionID = Cookie.get('connectionID');
        var model = Cookie.get('data');
        
        const requestOptions = {          

            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'connectionId':  connectionID,
                'credentialId': credentialID,
                'credentialBody': model
            })
        };
        console.log(requestOptions);
        
        fetch('https://iwsg2020.crc.nd.edu:3000/DCR/v1/credential', requestOptions)
            .then(async response => {
                const data = await response.text();
                console.log(data);

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                else{
                    Cookie.set('data', '');
                    console.log("success")
                    const {pathname} = Router
                    Router.push('/credentials/success')
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
          
    }


    render(){
        let credentialID = Cookie.get('credentialID');
        let connectionID = Cookie.get('connectionID');
        let credentialName = Cookie.get('credentialName');
        let model = Cookie.get('data');
        console.log("THIS IS THE MODEL:");
        console.log(model);
        const obj = model;
        var labelArray = []
        try{
        labelArray = JSON.parse(Cookie.get('credentialLabel'));
        }
        catch (e) {
          console.log(e)
        }

        let content = "";

        function printData(){
            var dataArray = [];
          try{
            const obj = JSON.parse(model);
            console.log(obj)
            console.log(obj.firstName);
            
            var i = 0;
            for (var key in obj){
                var label = labelArray[i];
                var value = obj[key];
                dataArray.push(<tr><td><b>{label}</b></td><td>{value}</td></tr>);
                i++;
            }
            content = dataArray;
          }
          catch (e){
            console.log(e)
          }
        }

        const {loading} = this.state;
        const spinnerStyle = {
            fontSize: "24px",
            color: "#00B2FF"
          };

  return (
    <div className="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet" />
      <Head>
        <title>NeoLinkID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h2>Confirm the following values are correct.</h2>
        {printData()}
        <table id="t01">
            <tbody>
            <tr>
                <th>Field Name</th>
                <th>Value</th>
            </tr>
        {content}
        </tbody>
        </table>

        <div className="grid">
        
            <button className="card" onClick={this.onSubmit} disabled={loading}>

            { loading && <i className="fa fa-circle-o-notch fa-spin" style={spinnerStyle}></i> }
            { loading && <p></p> }
            { !loading && <h3>Confirm</h3> }



            </button>
          
            <Link 
                href={{ pathname: '/credentials/credential', query: { credentialID: credentialID, credentialName: credentialName, edit: true }}}
            >
            <div className="cardCancel">
            <p>Edit</p>
            </div>
          </Link>
        </div>

        
        
      </main>

      <style jsx>{`      

        h2{
            text-align: center;
        }

        table {
            border: 1px solid black;
            width:60%;
            border-collapse: collapse;


        }
        th, td {
            border: 0px solid black;
            border-collapse: collapse;
        }
        th, td {
            padding: 5px;
            text-align: left;
        }
        #t01 tr:nth-child(even) {
            background-color: #eee;
        }
        #t01 tr:nth-child(odd) {
        background-color: #fff;
        }
        #t01 th {
            background-color: #0085FF;
            color: white;
        }
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
          
            .button:disabled {
                opacity: 0.5;
              }
          .cardCancel:hover,
          .cardCancel:focus,
          .cardCancel:active {
            color: #0070f3;
            border-color: #0070f3;
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


export default withRouter(Confirmation);



