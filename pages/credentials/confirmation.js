import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';
import { withRouter } from 'next/router';
import React, { Component } from "react";
import Cookie from 'js-cookie';
import Router from 'next/router';
import Header from "../components/Header";


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

        let form = "";

        function printForm(){
          var dataArray = [];
        try{
          const obj = JSON.parse(model);
          console.log(obj)
          console.log(obj.firstName);
          
          var i = 0;
          for (var key in obj){
              var label = labelArray[i];
              var value = obj[key];
              dataArray.push(<div><div className='col-25'><label>{label}</label></div><div className='col-75'><input type='text' value={value} readOnly></input></div></div>);
              i++;
          }
          form = dataArray;
        }
        catch (e){
          console.log(e)
        }
      }

        const {loading} = this.state;
        const spinnerStyle = {
            fontSize: "24px",
            color: "white"
          };

  return (
    <div className="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <Head>
        <title>NeoLinkID</title>
        <link rel="icon" href="/mHBS.png" />
      </Head>
      <Header/>

      <main>
          <h1>Confirmation</h1>
          <p>Are the following details correct?</p>

        {printForm()}
        <div className="form-container">
        <form>
          {form}
        </form>
        </div>

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
      
      
      * {
        box-sizing: border-box;
      }
      
      input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
      }
      
      label {
        padding: 12px 12px 12px 0;
        display: inline-block;
      }
      
      input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
      }
      
      input[type=submit]:hover {
        background-color: #45a049;
      }
      
      .form-container {
        margin-top: 1rem;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
      }
      
      .col-25 {
        float: left;
        width: 25%;
        margin-top: 6px;
      }
      
      .col-75 {
        float: left;
        width: 75%;
        margin-top: 6px;
      }
      
      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
      
      /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
      @media screen and (max-width: 600px) {
        .col-25, .col-75, input[type=submit] {
          width: 100%;
          margin-top: 0;
        }
      }

        h2{
            text-align: center;
        }

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
  
          main {
            padding: 0rem 0;
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



