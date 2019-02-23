import React, { Component } from 'react';
import UserService from "./../services/service.js"


class UserMainComponent extends Component{
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
            SocietyName:"",
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
            person:[]
        }
        
        console.log(localStorage.getItem("token"));
        this.serv = new UserService();

}

onChangeUser(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


onClickUpdate(e) {
    alert("hello in update")

    let prd = {  
            UserId:sessionStorage.getItem("userId"),
      
    };
    this.serv
      .FindTempPersonInfo(prd)
      .then(res => res.json())
      .then(resp =>{console.log(JSON.stringify(resp.data+"hfhf"));
      if(resp.status===403){
        let person ={
      
          PID:document.getElementById("PID").value,
          //PersonalUniqueID:sessionStorage.getItem("userId"),
          FirstName:document.getElementById("FirstName").value,
          MiddleName:document.getElementById("MiddleName").value,
          LastName:document.getElementById("LastName").value,
          Gender:document.getElementById("Gender").value,
          DateOfBirth:document.getElementById("DateOfBirth").value,
          Age:document.getElementById("Age").value,
          FlatNo:document.getElementById("Flat_BungalowNo").value,
          SocietyName:document.getElementById("SocietyName").value,
          StreetName_AreaName:document.getElementById("StreetName_AreaName").value,
          City:document.getElementById("City").value,
          State:document.getElementById("State").value,
          PinCode:document.getElementById("PinCode").value,
          PhoneNo:document.getElementById("PhoneNo").value,
          MobileNo:document.getElementById("MobileNo").value,
          PhysicalDisability:document.getElementById("PhysicalDisability").value,
          MaritalStatus:document.getElementById("MaritalStatus").value,
          EducationStatus:document.getElementById("EducationStatus").value,
          BirthSign:document.getElementById("BirthSign").value,
          UserId:sessionStorage.getItem("userId")
  
      }
      
    console.log(person);
    this.serv
            .createTempPersonInfo(person)
            .then(res=>res.json())
            .then(resp=>{console.log(JSON.stringify(resp));
            })
            .catch(error=>console.log(error.status));
            
            alert("Update Request Sent");
            let history=this.props.history;
            history.push("/UHome");
            //END
                        
          }
          else{
                 alert("RECOrd present in temporary db");
              }

                })
                .catch(error=>console.log(error));
                        
        
        
     }//on update close
     
    

   

  logoutUser() {
    localStorage.removeItem("token");
    let history = this.props.history;
    history.push("/");
  }

componentDidMount(){
    //GETTING the USERID of the currently logged in user

let uid=sessionStorage.getItem("userId");
console.log(uid+"user id of this user");
let user={UserId:sessionStorage.getItem("userId")}

//Now search in the Person DB if the The Personal Info is PRESENT OR NOT
//based on the "UserId"
this.serv.
           SearchUserInfo(user)
           .then(res=>res.json())
           .then(resp=>{console.log((resp))
               this.setState({person:resp.data})
           })
           .catch(error=>console.log(error));
   }

  
render(){
    return(
    <div className="container" align="left">
    <div className="form-group">
      <label htmlFor="PID">PID</label>
      <input
        type="text"
        name="PID"
        id="PID"
        onChange={this.onChangeUser.bind(this)}
        defaultValue={this.state.person.PID}
      />
    </div>
    <div className="form-group">
      <label htmlFor="FirstName">First Name</label>
      <input
        type="text"
        onChange={this.onChangeUser.bind(this)}
        name="FirstName"
        id="FirstName"
        defaultValue={this.state.person.FirstName}
      />
    </div>
    <div className="form-group">
      <label htmlFor="MiddleName">Middle Name</label>
      <input
        type="text"
        onChange={this.onChangeUser.bind(this)}
        name="MiddleName"
        id="MiddleName"
        defaultValue={this.state.person.MiddleName}
      />
    </div>
    <div className="form-group">
      <label htmlFor="LastName">Last Name</label>
      <input
        type="text"
        id="LastName"
        defaultValue={this.state.person.LastName}
        onChange={this.onChangeUser.bind(this)}
        name="LastName"
    
      />
  </div>
        <div className="form-group">
          <label>Gender</label>
          <br />
          <select name="Gender"  id="Gender" onChange={this.onChangeUser.bind(this)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female" selected>Female</option>
          </select>
        </div>
         <div className="form-group">
          <label>Date of Birth&nbsp;&nbsp;</label>
          <input
            type="date"
            name="DateOfBirth"
            onChange={this.onChangeUser.bind(this)}
            defaultValue={this.state.person.DateOfBirth}
            id="DateOfBirth"
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            name="Age"
            id="Age"
            onChange={this.onChangeUser.bind(this)}
            defaultValue={this.state.person.Age}
          />
        </div>
        <div className="form-group">
        {"  "}
          <label>Flat/Bunglow No.</label>
          <input
            type="text"
            id="Flat_BungalowNo"
            onChange={this.onChangeUser.bind(this)}
            defaultValue={this.state.person.Flat_BungalowNo}
            name="Flat_BungalowNo"
          />
        {" "}{" "}
          <label>Society Name</label>
          <input
            type="text"
            id="SocietyName"
            defaultValue={this.state.person.SocietyName}
            onChange={this.onChangeUser.bind(this)}
            name="SocietyName"
          />
        {" "}{" "}
          <label>Street Name</label>
          <input
            type="text"
            name="StreetName_AreaName"
            id="StreetName_AreaName"
            defaultValue={this.state.person.StreetName_AreaName}
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="City"
            id="City"
            defaultValue={this.state.person.City}
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="State"
            id="State"
            defaultValue={this.state.person.State}
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            id="PinCode"
            name="PinCode"
            defaultValue={this.state.person.PinCode}
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Phone No</label>
          <input
            type="text"
            id="PhoneNo"
            name="PhoneNo"
            defaultValue={this.state.person.PhoneNo}
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="text"
            id="MobileNo"
            name="MobileNo"
            defaultValue={this.state.person.MobileNo}
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Physical Disability(if Any)</label> &nbsp;
          <select
            name="PhysicalDisability"
            id="PhysicalDisability"
            onChange={this.onChangeUser.bind(this)}
            defaultValue={this.state.person.PhysicalDisability}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No" selected>No</option>
          </select> 
        </div>
        <div className="form-group">
          <label>Marital Status</label>
          <br />
          <select name="MaritalStatus" id="MaritalStatus" onChange={this.onChangeUser.bind(this)}>
            <option value="">Select</option>
            <option value="Married">Married</option>
            <option value="Unmarried" selected>Unmarried</option>
            <option value="Divorced">Divorced</option>
            <option value="Widow">Widow</option>
            <option value="Widower">Widower</option>
            defaultValue={this.state.person.MaritalStatus}
          </select>
        </div>
        <div className="form-group">
          <label>Educational Status</label>
          <br />
          <select
            name="EducationStatus"
            id="EducationStatus"
            onChange={this.onChangeUser.bind(this)}
            defaultValue={this.state.person.EducationStatus}
          >
            <option value="">Select</option>
            <option value="PHD">PHD</option>
            <option value="Graduate" selected>Graduate</option>
            <option value="Under-Graduate">Under-Graduate</option>
            <option value="HSC">HSC</option>
            <option value="SSC">SSC</option>
          </select>
        </div>
        <div className="form-group">
          <label>Birth Sign(if Any)</label>
          <input
            type="text"
            name="BirthSign"
            id="BirthSign"
            onChange={this.onChangeUser.bind(this)}
            defaultValue={this.state.person.BirthSign}
          />
        </div>
        <div>
          <input
            type="button"
            value="Update"
            className="btn btn-success"
            onClick={this.onClickUpdate.bind(this)}
          />{" "}
          {"     "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="button"
            value="Logout"
            className="btn btn-danger"
            onClick={this.logoutUser.bind(this)}
          />
        </div>
 </div>     

)
}



}
export default UserMainComponent;