import React, { Component } from 'react';

class Subject extends Component{
    render(){
      console.log("Subject render");
      return(
        <header>
              <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a></h1>
              {this.props.sub}
        </header>
      );
    }
  }
        {/* <header>
              <h1><a href="/" onClick={function(e){
                console.log(e); 
                e.preventDefault(); //a태그의 기본적인 동작방법 금지 (페이지 전환 막기)
                // debugger; //실행멈춤
                //this.state.mode="welcome"; 
                this.setState({ //state 바꿀때는 setState로
                  mode:"welcome"
                }); 
                //this를 찾을 수 없을 때는 함수 직후.bind(this)
              }.bind(this)}>{this.state.subject.title}</a></h1> 
              {this.state.subject.sub}
        </header> */}
        
  export default Subject;