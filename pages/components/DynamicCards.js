import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'


export default class DynamicCards extends React.Component{
    // will depend on what is passed into form
    state = {

    }
    constructor(props){
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }

    onChange = (e, key) => {
        this.setState({
            [key]: this[key].value
        })
    }

    renderCards = () => {
        try {let model = this.props.model;

        let formUI = model.map((m) => {
            let credentialName = m.credentialName;
            let credentialID = m.credentialId;
            let href = "/credentials/credential";
            let as = "/"+credentialName;

            return(
                <div key={credentialName} className="card">
                <Link 
                href={{ pathname: '/credentials/credential', query: { credentialID: credentialID, credentialName: credentialName }}}
                // as={as}
                >
                <h3>{credentialName}</h3>
                </Link>
                </div>
            );
        });
        return formUI;}
        catch (e){
          console.log("model not defined but error has been caught")
        }
    }

    render(){
        let title = this.props.title || "Dynamic Form";
        return (
            <div className="grid">
                
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
                
                {this.renderCards()}
                    
            <style>{`
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

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .cardFinish:hover,
        .cardFinish:focus,
        .cardFinish:active {
          color: #0070f3;
          border-color: #0070f3;
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
}

