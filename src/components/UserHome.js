import React, { Component } from 'react';
import UserService from "./../services/service.js";
class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.serv= new UserService();
        //console.log(u+"userhome");
    }

    onAddInfo(e){
        alert("adding personal information");
        //var uid=sessionStorage.getItem("userId")
        let user={UserId:sessionStorage.getItem("userId")}
        console.log(user);
        this.serv.
                        SearchUserInfo(user)
                        .then(res=>res.json())
                        .then(resp=>{console.log((resp));
                                    //  console.log(resp.data.PersonalUniqueID); 
                                      if(resp.status===403){
                                          let history=this.props.history;
                                          history.push("/addPersonInfo");
                                        //   let history=this.props.history;
                                        //     history.push("/personInfo");
                                      }else{
                                            let history=this.props.history;
                                            history.push("/UpdateInfo");
                                            
                                      }
                                    })
                                    .catch(error=>console.log(error));
                                    
        
    }

    

    onLogoutClicked(e){
        alert("Logging out clicked");
        let history=this.props.history;
        history.push("/");
         console.log("deleting token");
         localStorage.removeItem("token");
      }

    render() { 
        var uid=sessionStorage.getItem("userId");
        console.log(uid);
        return ( 
            <div>
            <div className="card">
                <h1 className="font-italic" align="center">Welcome </h1>
            </div>
                <div  className="navbar navbar-expand-lg " >
            <ul align="center">
            <button value="AddInfo" className="btn btn-info" name="AddInfo" onClick={this.onAddInfo.bind(this)}>Update My Information</button>
            {"   "}
            <button value="Logout" className="btn btn-danger" name="logout" onClick={this.onLogoutClicked.bind(this)}>Logout</button> 
            </ul>              
            </div>
 
            </div>
         );
    }
}
 
export default UserHome;
