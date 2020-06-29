import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Cookie from 'js-cookie';


export default class DynamicForm extends React.Component{
    // will depend on what is passed into form
    state = {

    }
    constructor(props){

        super(props);

        let autofill = Cookie.get('data');
        if(autofill){
            var obj = JSON.parse(autofill);
        }
        var keyArray = [];

        for (var key in obj){
            var value = obj[key];
            this.state[key] = value
        }   

    }

    

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting");
      }

    renderForm = () => {
        console.log("TOP")
        let model = this.props.model;
        let title = model.title;

        let autofill = Cookie.get('data');
        console.log(autofill);
        var obj = "";

        if(autofill){
        obj = JSON.parse(autofill);
        }
        var labelArray = [];

        let formUI = model.formFields.map((m) => {
            console.log("IN LOOP")
            let key = m.key;
            let label = m.label;
            labelArray.push(label);
            let type = m.type || "text";
            let props = m.props || {}; //range or required etc

            return(
                <div key={key} className="row">
                    <div className="col-25">
                    <label className="form-label"
                    key={"l" + m.key}
                    htmlFor={m.key}>
                        {label}
                    </label>
                    </div>
                    <div className="col-75">
                    <input {...props}
                    ref={(key)=>{this[m.key]=key}}
                    className = "form-input"
                    type={type}
                    key={"i" + m.key}
                    onChange={(e)=>{this.onChange(e, key)}}
                    value={obj[key]}
                    />
                    </div>
                </div>
            );
        });

        Cookie.set('credentialLabel',labelArray)
        Cookie.set('data', '');
        return formUI;
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

    render(){
        let title = this.props.title || "Dynamic Form";
        
    
        return (
            <div className={this.props.className}>
                
                <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet" />
                
                <form className="dynamic-form" onSubmit={(e)=>{this.onSubmit(e)}}>
                <div className="containerOuter">
                <div className="containerForm">
                    {this.renderForm()}
                </div>
                </div>
                <div className="grid">
                
                <button type="submit" className="cardSubmit">
                    <h3>Submit</h3>
                </button>
                
                </div>
                
                </form>

                
                <style jsx>{`
                * {
                    box-sizing: border-box;
                  }


                   .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    max-width: 800px;
                    margin-top: 0rem;
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
                  

                    .row:after {
                    content: "";
                    display: table;
                    clear: both;
                    }

                    .card:hover,
                    .card:focus,
                    .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                    }
                   


                  .cardSubmit h3 {
                    margin: 0 0 0rem 0;
                    font-size: 1.2rem;
                    }

                  .cardSubmit {
                    margin: 0.2rem;
                    width: 100%;
                    flex-basis: 45%;
                    padding: 1rem;
                    text-align: center;
                    color: black;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                    background-color: white;
                    font-family: 'Montserrat', sans-serif;

                  }

                  .cardSubmit:hover,
                  .cardSubmit:focus,
                  .cardSubmit:active {
                    color: #0070f3;
                    border-color: #0070f3;
                  }



                  .containerForm {
                    border-radius: 5px;
                    
                    align-items: center;
                    justify-content: right;
                    padding: 20px;
                  }

                  .containerOuter {
                    padding: 25px;
                  }
                

                  .center {
                    margin: 0;
                    position: absolute;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                  }

                  button {
                    
                    font-family: 'Montserrat', sans-serif;
                    background-color: #DCFFEB;
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
                  
                  @media screen and (max-width: 10000px) {
                    .col-25, .col-75, input[type=submit] {
                      width: 100%;
                      margin-top: 0;
                    }
                  }
        
      `}</style>
      </div>
        )
    }
}

