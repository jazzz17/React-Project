import React, { Component } from 'react';
import UserService from "./../services/service.js"


class UserHomeComponent extends Component{
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
        }
        console.log(localStorage.getItem("token"));
        this.serv = new UserService();

}

onChangeUser(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


onClickSave(e) {
    alert("hello")

    let prd = {  
            PID :this.state.PID,
            FirstName:this.state.FirstName,
            MiddleName:this.state.MiddleName,
            LastName:this.state.LastName,
            Gender:this.state.Gender,
            DateOfBirth:this.state.DateOfBirth,
            Age:this.state.Age,
            Flat_BungalowNo:this.state.Flat_BungalowNo,
            SocietyName:this.state.SocietyName,
            StreetName_AreaName:this.state.StreetName_AreaName,
            City:this.state.City,
            State:this.state.State,
            PinCode:this.state.PinCode,
            PhoneNo:this.state.PhoneNo,
            MobileNo:this.state.MobileNo,
            PhysicalDisability:this.state.PhysicalDisability,
            MaritalStatus:this.state.MaritalStatus,
            EducationStatus:this.state.EducationStatus,
            BirthSign:this.state.BirthSign,
            UserId:this.state.UserId,
      
    };
    this.serv
      .postPersonData(prd)
      .then(res => res.json())
      .then(resp => resp.data)
      .catch(error => console.log(error.status));
  }

  logoutUser() {
    localStorage.removeItem("token");
    let history = this.props.history;
    history.push("/");
  }

  
render(){
    return(
    <div className="container" align="left">
    <div className="form-group">
      <label htmlFor="PID">PID</label>
      <input
        type="text"
        value={this.state.PID}
        onChange={this.onChangeUser.bind(this)}
        name="PID"
      />
    </div>
    <div className="form-group">
      <label htmlFor="FirstName">First Name</label>
      <input
        type="text"
     
        value={this.state.FirstName}
        onChange={this.onChangeUser.bind(this)}
        name="FirstName"
      />
    </div>
    <div className="form-group">
      <label htmlFor="MiddleName">Middle Name</label>
      <input
        type="text"
        value={this.state.MiddleName}
        onChange={this.onChangeUser.bind(this)}
        name="MiddleName"
      />
    </div>
    <div className="form-group">
      <label htmlFor="LastName">Last Name</label>
      <input
        type="text"
        value={this.state.LastName}
        onChange={this.onChangeUser.bind(this)}
        name="LastName"
      />
  </div>
        <div className="form-group">
          <label>Gender</label>
          <br />
          <select name="Gender" onChange={this.onChangeUser.bind(this)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
         <div className="form-group">
          <label>Date of Birth&nbsp;&nbsp;</label>
          <input
            type="date"
            name="DateOfBirth"
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            name="Age"
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
        {"  "}
          <label>Flat/Bunglow No.</label>
          <input
            type="text"
            name="Flat_BungalowNo"
            onChange={this.onChangeUser.bind(this)}
          />
        {" "}{" "}
          <label>Society Name</label>
          <input
            type="text"
            name="SocietyName"
         
            onChange={this.onChangeUser.bind(this)}
          />
        {" "}{" "}
          <label>Street Name</label>
          <input
            type="text"
            name="StreetName_AreaName"
      
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="City"
     
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="State"
      
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="PinCode"
          
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Phone No</label>
          <input
            type="text"
            name="PhoneNo"
          
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="text"
            name="MobileNo"
         
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Physical Disability(if Any)</label> &nbsp;
          <select
            name="PhysicalDisability"
            onChange={this.onChangeUser.bind(this)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Marital Status</label>
          <br />
          <select name="MaritalStatus" onChange={this.onChangeUser.bind(this)}>
            <option value="">Select</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
            <option value="Divorced">Divorced</option>
            <option value="Widow">Widow</option>
            <option value="Widower">Widower</option>
          </select>
        </div>
        <div className="form-group">
          <label>Educational Status</label>
          <br />
          <select
            name="EducationalStatus"
            onChange={this.onChangeUser.bind(this)}
          >
            <option value="">Select</option>
            <option value="PHD">PHD</option>
            <option value="Graduate">Graduate</option>
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
            onChange={this.onChangeUser.bind(this)}
          />
        </div>
        <div>
          <input
            type="button"
            value="Save"
            className="btn btn-success"
            onClick={this.onClickSave.bind(this)}
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
export default UserHomeComponent;