import React, { Component } from 'react';
import UserService from "./../services/service.js"


class NewInfoComponent extends Component{
constructor(props){
    super(props);

    this.state ={
            PID :"",
            FirstName:"",
            MiddleName:"",
            LastName:"",
            Gender:"",
            DateOfBirth:"",
            Age:"",
            Flat_BungalowNo:"",
            StreetName_AreaName:"",
            City:"",
            State:"",
            PinCode:"",
            PhoneNo:"",
            MobileNo:"",
            PhysicalDisability:"",
            MaritalStatus:"",
            EducationStatus:"",
            BirthSign:"",
            UserId:"",
            tpersons:[]
        }
        console.log(localStorage.getItem("token"));
        this.serv = new UserService();

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
    this.setState({EducationlStatus:e.EducationStatus});
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
    EducationStatus:e.EducationStatus,
    BirthSign:e.BirthSign,
    UserId:u
    
    
    };
    this.serv
                .CreateNewPersonInfo(newperson)
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

onRejectClicked(e){
        
    let newperson={ PID:e.PID,  
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
        EducationStatus:e.EducationStatus,
        BirthSign:e.BirthSign,
        UserId:sessionStorage.getItem("userId")     
};
this.serv.DeleteTempPersonInfo(newperson)
.then(res=>res.json())
.then(resp=>{console.log(JSON.stringify(resp))});
let history=this.props.history;
history.push("/adminHome");
}

componentDidMount(){
    var uId=sessionStorage.getItem("userId");
    console.log(uId+"User id of the current user");
    //this will display the Users created by Operator & are
    //stored in Temporary DB
      let tuser=this.serv
                        .getTempPersonInfo()
                        .then((data)=>data.json())
                        .then((value)=>{
                            console.log("here!"+JSON.stringify(value.data));
                            console.log(value);
                            this.setState({tpersons:value.data});
                                   // alert(JSON.stringify(value.data));
                            })
                            .catch(error=>{
                                 console.log(`Error occured ${error.status}`);
                            });
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
              {this.state.tpersons.map((prd,idx) => (
                <TableRow
                  key={idx}
                  row={prd}
                   approved={this.onApproveClicked.bind(this)}
                   rejected={this.onRejectClicked.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
        </div>);
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
              <td> 
                <input type="button" value="Approve" class="btn btn-success" onClick={this.onRowApproved.bind(this)}></input>
            </td>
            <td> <input type="button" value="Reject" class="btn btn-danger" onClick={this.onRowrejected.bind(this)}/></td>
            </tr>
          );
        }
      }





export default NewInfoComponent;