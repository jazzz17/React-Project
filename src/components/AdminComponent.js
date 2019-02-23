import React, { Component } from 'react';
import UserService from './../services/service';

class Admin extends Component{
    constructor(props){
    super(props);
    this.state ={
        PID :"",
        FirstName:"",
        Gender:"",
        DateofBirth:"",
        Age:"",
        Address:"",
        City:"",
        State:"",
        PhoneNo:"",
    
    Users : [ { PID:"1001" , FirstName:"jagruti", Gender:"Female",Age:"22",DateofBirth:"17/02/96",
                Address:"Bhosale Nagar",City:"Pune",State:"Maharashtra",PhoneNo:"2022020"}],
    persons:[]             
    }
    console.log(localStorage.getItem("token"));
    this.serv = new UserService();

}

logoutUser() {
  localStorage.removeItem("token");
  let history = this.props.history;
  history.push("/");
}

onChangeUser(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

 onApproveClicked(e){
    alert("User details from temorary DB to Permanant DB\n"+JSON.stringify(e));
    this.setState({PID:e.PID});   
    this.setState({FirstName:e.FirstName});
    this.setState({MiddleName:e.MiddleName});
    this.setState({LastName:e.LastName});
    this.setState({Gender:e.Gender});
    this.setState({DateOfBirth:e.DateOfBirth});
    this.setState({Age:e.Age});
    this.setState({Flat_BungalowNo:e.Flat_BungalowNo});
    this.setState({SocietyName:e.SocietyName});
    this.setState({StreetName_AreaName:e.StreetName_AreaName});
    this.setState({City:e.City});
    this.setState({State:e.State});
    this.setState({PinCode:e.PinCode});
    this.setState({PhoneNo:e.PhoneNo});
    this.setState({MobileNo:e.MobileNo});
    this.setState({PhysicalDisability:e.PhysicalDisability});
    this.setState({MaritalStatus:e.MaritalStatus});
    this.setState({EducationalStatus:e.EducationalStatus});
    this.setState({BirthSign:e.BirthSign});
    this.setState({UserId:sessionStorage.getItem("userId")});

    var u=sessionStorage.getItem("userId");
    //Now storing the User from temporary DB to Permanent DB after
    //Approval of ADMIN
    let newperson={
    PID:e.PID,  
    FirstName:e.FirstName,
    MiddleName:e.MiddleName,
    LastName:e.LastName,
    Gender:e.Gender,
    DateOfBirth:e.DateOfBirth,
    Age:e.Age,
    Flat_BungalowNo:e.Flat_BungalowNo,
    SocietyName:e.SocietyName,
    StreetName_AreaName:e.StreetName_AreaName,
    City:e.City,
    State:e.State,
    PinCode:e.PinCode,
    PhoneNo:e.PhoneNo,
    MobileNo:e.MobileNo,
    PhysicalDisability:e.PhysicalDisability,
    MaritalStatus:e.MaritalStatus,
    EducationalStatus:e.EducationalStatus,
    BirthSign:e.BirthSign,
    UserId:u
    
    
    };
    this.serv
                .CreateTempPersonInfo(newperson)
                .then(res=> res.json())
                //.CheckUser(this.state.UserName,this.state.Password)
                .then(resp=> {console.log(JSON.stringify(resp));
                })
                .catch(error=>console.log(error.status));
                alert("deleting user from TEMPORARY DB");
    this.serv
                .DeleteTempPersonInfo(newperson)
                .then(res=>res.json())
                .then(resp=>{console.log(JSON.stringify(resp))});
                let history=this.props.history;
                history.push("/adminHome");
}

  onclickClear(e) {
    this.setState({ PID: "" });
    this.setState({FirstName: "" });
    this.setState({MiddleName:""});
    this.setState({LastName:""});
    this.setState({Gender: "" });
    this.setState({DateOfBirth: "" });
    this.setState({Age: "" });
    this.setState({Address: 0 });
    this.setState({Flat_BungalowNo:""});
    this.setState({SocietyName:""});
    this.setState({StreetName_AreaName:""});
    this.setState({City: "" });
    this.setState({State: "" });
    this.setState({PinCode:""});
    this.setState({PhoneNo:""});
    this.setState({MobileNo:""});
    this.setState({PhysicalDisability:""});
    this.setState({MaritalStatus:""});
    this.setState({EducationStatus:""});
    this.setState({BirthSign:""});

  }

  onclickSave() {
    /*alert(` ${this.state.ProductId} ${this.state.ProductName} ${this.state.CategoryName}
                ${this.state.Price} ${this.state.Manufacturer} 
        `);

        /*let tempArray=this.state.Products.slice();
        tempArray.push({ProductId:this.state.ProductId,ProductName:this.state.ProductName,Price:this.state.Price,
            CategoryName:this.state.CategoryName,Manufacturer:this.state.Manufacturer});*/

    let prd = {
        PID :this.state.PID,
        FirstName:this.state.FirstName,
        MiddleName:this.state.MiddleName,
        LastName:this.state.LastName,
        Gender:this.state.Gender,
        DateofBirth:this.state.DateofBirth,
        Age:this.state.Age,
        Flat_BungalowNo:this.state.Flat_BungalowNo,
        SocietyName:this.state.SocietyName,
        StreetName_AreaName:this.state.StreetName_AreaName,
        City:this.state.City,
        State:this.state.State,
        PhoneNo:this.state.PhoneNo,
        MobileNo:this.state.MobileNo,
        PhysicalDisability:this.state.PhysicalDisability,
        EducationStatus:this.state.EducationStatus,
        BirthSign:this.state.BirthSign
    };
    this.serv
      .postData(prd)
      .then(res => res.json())
      .then(resp => resp.data)
      .catch(error => console.log(error.status));
  }

  onClickDelete(e) {
    let id = e.PID;
console.log(id);

    this.serv
      .deleteData(id)
      .then(res => res.json())
      .then(resp => {
        console.log(JSON.stringify(resp.data));
      })
      .catch(err => console.log(err.status));
  }

  onClickUpdate(e){
    let prd = {
        PID :this.state.PID,
        FirstName:this.state.FirstName,
        Gender:this.state.Gender,
        DateofBirth:this.state.DateofBirth,
        Age:this.state.Age,
        Address:this.state.Address,
        City:this.state.City,
        State:this.state.State,
        PhoneNo:this.state.PhoneNo
    };
  //   let id={ ProductId: e.ProductId}  
 console.log()
  this.serv
    .UpdateData(prd)
    .then(res => res.json())
    .then(resp => resp.data)
    .catch(error => console.log(error.status));

}

getSelectedUser(e) {
    /*alert(` ${this.state.ProductId} ${this.state.ProductName} ${this.state.CategoryName}
        ${this.state.Price} ${this.state.Manufacturer}`);*/
    this.setState({ PID: e.PID });
    this.setState({ FirstName: e.FirstName});
    this.setState({ Gender: e.Gender});
    this.setState({ DateOfBirth: e.DateOfBirth});
    this.setState({ Age: e.Age });
    this.setState({ Address: e.Address });
    this.setState({ City:e.City });
    this.setState({ State:e.State});
    this.setState({ PhoneNo:e.PhoneNo })
   
  }

  componentDidMount() {
    console.log("in didmount")
    let person = this.serv
      .getData()
      .then(data => data.json())
      .then(value => {
        console.log("here"+JSON.stringify(value));   
        this.setState({
          persons: value.data
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
    
    routetoInfo(){
      let path='newInfo';
      this.props.history.push(path)
    }

render(){
   return(
     <div>
    <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>PID</th>
                <th>FirstName</th>
                <th>MiddleName</th>
                 <th>LastName</th>
                <th>Gender</th>
                <th>DateofBirth</th>
                <th>Age</th>
                <th>Flat_BungalowNo</th>
                <th>SocietyName</th>
                <th>StreetName_AreaName</th>
                <th>City</th>
                <th>State</th>
                <th>PinCode</th>
                <th>PhoneNo</th>
                <th>MobileNo</th>
                <th>PhysicalDisabiliy</th> 
                <th>MaritalStatus</th>
                <th>EducationStatus</th>
                <th>BirthSign</th>
              </tr>
            </thead>
            <tbody>
              {this.state.persons.map((prd,idx) => (
                <TableRow
                  key={idx}
                  row={prd}
                  approved={this.onApproveClicked.bind(this)}
                  // rejected={this.onRejectClicked.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-group" align="center">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="button"
                value=" View New Requests"
                className="btn btn-success"
                onClick={this.routeChange.bind(this)}
              /> 
            </td>
            {" "}{" "}
            <td>
              <input
                type="button"
                value="Logout"
                className="btn btn-danger"
                onClick={this.logoutUser.bind(this)}
              />
            </td>

            <td>
              <input
                type="button"
                value="view Information request"
                className="btn btn-warning"
                onClick={this.routetoInfo.bind(this)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
   )

}
}

class TableRow extends Component {
    constructor(props) {
      super(props);
    }
  
  onRowApproved() {
      this.props.approved(this.props.row);
  }

  onRowrejected(){
      this.props.rejected(this.props.row);
  }

    render() {
      return (
        <tr>
          <td>{this.props.row.PID}</td>
          <td>{this.props.row.FirstName}</td>
          <td>{this.props.row.MiddleName}</td>
          <td>{this.props.row.LastName}</td>
          <td>{this.props.row.Gender}</td>
          <td>{this.props.row.DateOfBirth}</td>
          <td>{this.props.row.Age}</td>
          <td>{this.props.row.Flat_BungalowNo}</td>
          <td>{this.props.row.SocietyName}</td>
          <td>{this.props.row.StreetName_AreaName}</td>
          <td>{this.props.row.City}</td>
          <td>{this.props.row.State}</td>
          <td>{this.props.row.PinCode}</td>
          <td>{this.props.row.PhoneNo}</td>
          <td>{this.props.row.MobileNo}</td>
          <td>{this.props.row.PhysicalDisability}</td>
          <td>{this.props.row.MaritalStatus}</td>
          <td>{this.props.row.EducationStatus}</td>
          <td>{this.props.row.BirthSign}</td>
      
        </tr>
      );
    }
  }

export default Admin;

