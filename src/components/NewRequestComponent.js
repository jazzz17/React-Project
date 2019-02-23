import React, { Component } from 'react';
import UserService from "./../services/service.js";

class NewRequestComponent extends Component{
constructor(props){
    super(props);
    this.state = {
        UserId:"",
        UserName:"",
        Password:"",
        Email:"",
        RoleId:"",
        TempUsers:[],}
        console.log(localStorage.getItem("token"));
    this.serv = new UserService();

}


onChangeUser(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  getSelectedTempUser(e) {
    /*alert(` ${this.state.ProductId} ${this.state.ProductName} ${this.state.CategoryName}
        ${this.state.Price} ${this.state.Manufacturer}`);*/
    this.setState({ UserId: e.UserId });
    this.setState({ UserName: e.UserName});
    this.setState({ Password: e.Password});
    this.setState({ Email: e.Email});
    this.setState({ RoleId: e.RoleId });
  
  }


onApproveClicked(e){
 alert("Approve button clicked");
 this.setState({UserId:e.UserId});
 this.setState({UserName:e.UserName});
 this.setState({Password:e.Password});
 this.setState({Email:e.Email});
 this.setState({RoleId:e.RoleId});

let newuser={
    UserId:e.UserId,
    UserName:e.UserName,
    Password:e.Password,
    Email:e.Email,
    RoleId:e.RoleId
}
this.serv
    .CreateNewUser(newuser)
    .then(res=> res.json())
    //.CheckUser(this.state.UserName,this.state.Password)
    .then(resp=> {console.log(JSON.stringify(resp));
    })
    .catch(error=>console.log(error.status));
    alert("deleting user from TEMPORARY DB");
    this.serv
        .DeleteTempUser(newuser)
        .then(res=>res.json())
        .then(resp=>{console.log(JSON.stringify(resp))});
        let history=this.props.history;
        history.push("/adminHome");

}

onRejectClicked(e){
        
    let newuser={
        UserId:e.UserId,
        UserName:e.UserName,
        Email:e.Email,
        Password:e.Password,
        RoleId:e.RoleId
};
this.serv.DeleteTempUser(newuser)
.then(res=>res.json())
.then(resp=>{console.log(JSON.stringify(resp))});
let history=this.props.history;
history.push("/adminHome");
}

componentDidMount() {
    console.log("in didmount")
    let tempuser = this.serv
      .getTempData()
      .then(data => data.json())
      .then(value => {
        console.log("here"+JSON.stringify(value));   
        this.setState({
          TempUsers: value.data
        });
        console.log(JSON.stringify(value.data));
      })
      .catch(error => {
        console.log(`Error Occured ${error.status}`);
      });
  }
routeChange(){
    let path = `newRequest`;
    this.props.history.push(path);
    }

    render(){
        return(
        <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>UserId</th>
                <th>USerName</th>
                <th>Password</th>
                 <th>Email</th>
                <th>RoleId</th>
                <th>Approve</th> <th>Reject</th>
                </tr>
                </thead>
                <tbody>
                {this.state.TempUsers.map((prd,idx) => (
                <TableRow
                  key={idx}
                  row={prd}
                  selected={this.onApproveClicked.bind(this)}
                 approved={this.onApproveClicked.bind(this)}
                  rejected={this.onRejectClicked.bind(this)}
                />
              ))}
                 </tbody>
                </table>
                </div>
               
        )
    }
}

class TableRow extends Component{
    constructor(props) {
        super(props);
      }
  
    onRowClick() {
        this.props.selected(this.props.row);
      }

      onRowApproved() {
          this.props.approved(this.props.row);
      }

      onRowrejected(){
          this.props.rejected(this.props.row);
      }

    render(){
       return(
        <tr>
        <td>{this.props.row.UserId}</td>
        <td>{this.props.row.UserName}</td>
        <td>{this.props.row.Password}</td>
        <td>{this.props.row.Email}</td>
        <td>{this.props.row.RoleId}</td>
        <td> 
            <input type="button" value="Approve" class="btn btn-success" onClick={this.onRowApproved.bind(this)}></input>
        </td>
        <td> <input type="button" value="Reject" class="btn btn-danger" onClick={this.onRowrejected.bind(this)}/></td>
        </tr>)
       }

}

export default NewRequestComponent;