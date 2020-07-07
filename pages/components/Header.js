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
                    <p>NeoLinkID</p>
                </div>
                
                
                   
            <style>{`

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

