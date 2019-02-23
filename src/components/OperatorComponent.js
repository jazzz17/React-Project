import React, { Component } from 'react';
import UserService from '../services/service';

class OperatorComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            UserId:"",
            UserName:"",
            Password:"",
            Email:"",
            RoleId:"",
            Roles : [
               "Admin",
               "Operator",
               "User"
            ]  
        }
        this.serv = new UserService();
    }
    onChangeOperator(e) {
        this.setState({ [e.target.name]: e.target.value });
        } 

    register(){
        let operator = { UserId:this.state.UserId, UserName:this.state.UserName,
        Password:this.state.Password,
        Email:this.state.Email,
        RoleId:this.state.RoleId}
        alert(JSON.stringify(operator))
        this.serv
           .postTempData(operator)
           .then(res => res.json())
           .then(resp => {
             console.log(JSON.stringify(resp));
           })
           .catch(error => console.log(error.status));
    }

    logoutUser() {
      localStorage.removeItem("token");
      let history = this.props.history;
      history.push("/");
    }
    render(){
        return(
            <body>
                <div class="container">
            <form>
              USERID{" "}
              <input
                type="text"
                name="UserId"
                onChange={this.onChangeOperator.bind(this)}
              />{" "}
              <br />
              <br />
              USERNAME{" "}
              <input
                type="text"
                name="UserName"
                onChange={this.onChangeOperator.bind(this)}
              />{" "}
        <br/>
        <br />
         PASSWORD{" "}
          <input
            type="text"
            type="password"
            name="Password"
            onChange={this.onChangeOperator.bind(this)}
          />{" "}
          <br />
          <br />
          EMAIL{" "}
          <input
            type="text"
            name="Email"
            onChange={this.onChangeOperator.bind(this)}
          />{" "}
          <br/><br/>
          RoleId : <input type="text" name="RoleId" onChange={this.onChangeOperator.bind(this)}></input> <br/>
          Enter 1 for admin <br/>
          Enter 2 for operator <br/>
          Enter 3 for accessuser <br/>
        <br/>
        <div className="form-group">
        <div className="form-check form-check-inline"></div>
        </div>
          <input
           className="form-check-input"
            type="button"
            value="Register"
            class="btn btn-success"
            onClick={this.register.bind(this)}
          /> {""}
          <input type="button" value="Logout" class="btn btn-warning"  onClick={this.logoutUser.bind(this)}/>
            </form>
            </div>
            </body>)
    };
    }
    
    class Options extends Component {
        render() {
          return <option value={this.props.data}>{this.props.data}</option>;
        }
      }
      
export default OperatorComponent;