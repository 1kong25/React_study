import React, { Component } from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
     
  }
    render(){
      console.log(this.props.data);
      console.log("Update render");
      return(
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title, //e.target.title.value,
                this.state.desc //e.target.desc.value
              );
            }.bind(this)}>
              <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title}
              // onChange={function(e){
              //   console.log(e.target.value); //input의 value
              //   this.setState({title:e.target.value});
              // }.bind(this)}
              onChange={this.inputFormHandler}
              ></input>
              </p>
            <p>
              <textarea 
              onChange={this.inputFormHandler}
              // onChange={this.inputFormHandler.bind(this)}
              name="desc" 
              placeholder="description" 
              value={this.state.desc}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
       </article>
      );
    }
  }

  export default UpdateContent;