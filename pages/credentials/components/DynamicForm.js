import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Cookie from 'js-cookie';


export default class DynamicForm extends React.Component{
    state = {
        
    }
    constructor(props){

        super(props);
        this.counter = 0;
        this.edit = false;

        let autofill = Cookie.get('data');
        if(autofill){
            var obj = JSON.parse(autofill);
        }
        else{
          let sessionTemp = Cookie.get('session');
          if (sessionTemp){
            obj = JSON.parse(sessionTemp);
          }
        }
        var keyArray = [];

        for (var key in obj){
          console.log("constructing");
            var value = obj[key];
            console.log(value);
            this.state[key] = value
        }

    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting");
      }

    renderForm = () => {
      try{
        console.log("TOP")
        let model = this.props.model;
        let title = model.title;

        let autofill = Cookie.get('data');
        console.log(autofill);
        
        var obj = "";
        var sessionArr = [];

        if(autofill){
          obj = JSON.parse(autofill);
          this.edit = true;
        }
  
        var labelArray = [];

        let formUI = model.formFields.map((m) => {
            console.log(m)
            let key = m.key;
            let label = m.label;
            labelArray.push(label);
            let type = m.type || "text";
            let props = m.props || {};
            let session = m.session || false;
            var value = obj[key];
            let displayLabel = label;

            console.log("AUTOFILL: ");
            console.log(autofill);
            console.log(this.counter);
            console.log(this.edit);

            if (this.edit == false){
              if(this.counter == 0){
                if(!autofill){
                  if (session==true){
                      console.log("SESSION IS TRUE")
                      let sessionTemp = Cookie.get('session');
                      if (sessionTemp){
                        obj = JSON.parse(sessionTemp);
                        value = obj[key];
                        console.log(value);
                      }
                  }
                }     
              }
            }

            console.log(value);



             
            if(props.required == true){
              displayLabel = label + " *";
            }

            if (type == "dropdown"){
              let val = m.values;
              return(
                <div key={key} className="row">
                  <div className="col-25">
                    <label className="form-label"
                    key={"l" + m.key}
                    htmlFor={m.key}>
                        {displayLabel}
                    </label>
                  </div>
                  <div className="col-75">
                    <select {...props}
                    ref={(key)=>{this[m.key]=key}}
                    className = "form-input"
                    type={type}
                    key={"i" + m.key}
                    onChange={(e)=>{this.onChange(e, key)}}
                    value={value}
                    >
                      <option value="">Select an option</option>
                      {val.map(values => <option value={values} key={values}>{values}</option>)}
                    </select>
                    </div>
                </div>
              );
            }
            else if (type == "date"){
              let val = m.values;
              return(
                <div key={key} className="row">
                  <div className="col-25">
                    <label className="form-label"
                    key={"l" + m.key}
                    htmlFor={m.key}>
                        {displayLabel}
                    </label>
                  </div>
                  <div className="col-75">
                  <input {...props}
                      ref={(key)=>{this[m.key]=key}}
                      className = "form-input"
                      type={type}
                      key={"i" + m.key}
                      onChange={(e)=>{this.onChange(e, key)}}
                      value={value}
                      placeholder={label}
                      />
                    </div>
                </div>
              );
            }
            else if (type == "number"){
              let val = m.values;
              return(
                <div key={key} className="row">
                  <div className="col-25">
                    <label className="form-label"
                    key={"l" + m.key}
                    htmlFor={m.key}>
                        {displayLabel}
                    </label>
                  </div>
                  <div className="col-75">
                  <input {...props}
                      ref={(key)=>{this[m.key]=key}}
                      className = "form-input"
                      type="text"
                      key={"i" + m.key}
                      onChange={(e)=>{this.onChange(e, key)}}
                      value={value}
                      placeholder={label}
                      pattern="\d*"
                      maxLength="8"
                      />
                    </div>
                </div>
              );
            }
            else{
              return(
                  <div key={key} className="row">
                        <div className="col-25">
                        <label className="form-label"
                        key={"l" + m.key}
                        htmlFor={m.key}>
                            {displayLabel}
                        </label>
                      </div>
                      <div className="col-75">
                      <input {...props}
                      ref={(key)=>{this[m.key]=key}}
                      className = "form-input"
                      type={type}
                      key={"i" + m.key}
                      onChange={(e)=>{this.onChange(e, key)}}
                      value={value}
                      placeholder={label}
                      />
                      </div>
                  </div>
              );
            }
        });
        this.counter += 1;
        if (this.counter == 1){
          Cookie.set('credentialLabel',labelArray)
          Cookie.set('data', '');
        }
        
        return formUI;
      }
      catch (e){
        console.log("model not defined but error has been caught")
        console.log(e)
      }
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
                
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
                
                <form className="dynamic-form" onSubmit={(e)=>{this.onSubmit(e)}}>
                <div className="containerOuter">
                <div className="containerForm">
                    {this.renderForm()}
                </div>
                </div>
                <p className="info">An * indicates required fields.</p>
                <div className="grid">
                
                <button type="submit" className="cardSubmit">
                    <h3>Submit</h3>
                </button>
                
                </div>
                
                </form>

                
                <style>{`
                * {
                    box-sizing: border-box;
                  }

                  .info{
                    font-size: 10px;
                    text-align: center;
                    margin-top: 0rem;
                    color: black;
                  }

                  input{
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #00A3FF;
                    border-radius: 4px;
                    resize: vertical;
                  }

                  input[type=text], select, textarea {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #00A3FF;
                    border-radius: 4px;
                    resize: vertical;
                  }

                  label {
                    padding: 12px 12px 12px 0;
                    display: inline-block;
                  }

          
                   .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    max-width: 800px;
                    margin-top: 0rem;
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
                    color: white;
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
                    background-color: #00A3FF;
                    font-family: 'Montserrat', sans-serif;

                  }

                  .cardSubmit:hover,
                  .cardSubmit:focus,
                  .cardSubmit:active {
                    color: #0070f3;
                    border-color: #0070f3;
                  }

                  .containerForm {
                    
                    border-radius: 8px;
                    background-color: #f2f2f2;
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

