import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'


export default class Header extends React.Component{


    render(){
        let title = this.props.title || "Dynamic Form";
        return (
            <div className="full-width">
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,500" rel="stylesheet" />
                

                
                <div className="Header">
                <div className="align">
                {/* <img rel="icon" src="/mHBS.png" className="logo"/> */}

                <div className="inline-logo">
                <Link href="/">
                <img rel="icon" src="/mHBS.png" className="logo"/>
                </Link>
                </div>
                
                <div className="inline">
                    <Link href="/">
                        <h1>
                            <a>NeoLinkID</a>
                        </h1>
                    </Link>
                </div>

                <div className="inline-about">
                    <Link href="/about">
                    <img rel="icon" src="/help.png" className="about"/>
                    </Link>
                </div>
                
                
                </div>
                </div>
                
                
                   
            <style>{`

            h1{
                font-size: 1.5rem;
            }

            .align{
                text-align: center;
            }

            .inline {
                display: inline-block;
                text-align: center;
            }

            .inline-logo {
                display: inline-block;
                float: left;
            }

            .inline-about {
                display: inline-block;
                float: right;
            }
        

        a{
            color: white;
        }

        a:hover{
            color: #cceeff;
            text-decoration: none;
        }

        .logo{
            width: 40px;
            display: inline-block;
            margin-bottom: 0.5rem;
            margin-left:0.2rem;
            margin-top: 0.8rem;
            float: left;
        }

        .about{
            width: 40px;
            display: inline-block;
            margin-bottom: 0.5rem;
            margin-right:0.2rem;
            margin-top: 0.8rem;
            float: right;
        }

        .full-width{
            width: 100%;
        }

        .Header {
            width: 100%;
            font-size: 20px;
            overflow: hidden;
            background-color: #00A3FF;
            color: #FFFFFF;
        }

      `}</style>

      
      </div>
        )
    }
}

