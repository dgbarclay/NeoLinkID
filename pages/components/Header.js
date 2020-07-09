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
                    <Link href="/">
                    <p><a><img rel="icon" src="/mHBS.png"/> NeoLinkID</a></p>
                    </Link>
                </div>
                
                
                   
            <style>{`
        a{
            color: white;
        }

        a:hover{
            color: #cceeff;
            text-decoration: none;
        }

        img{
            width: 20px;
            display: inline;
            margin-bottom: 0.3rem;
            margin-left: auto;
            margin-right: auto;
            vertical-align: middle
        }

        .full-width{
            width: 100%;
        }

        .Header {
            width: 100%;
            overflow: hidden;
            background-color: #00A3FF;
            color: #FFFFFF;
            text-align: center;

        }
      `}</style>

      
      </div>
        )
    }
}

