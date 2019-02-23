import React, { Component } from "react";
import UserService from "../services/service";
import ImageLoader from "react-load-image";

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};
let imgUrl = './../images/bgimage.jpg'; 


class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: ""
    };
    this.serv = new UserService();
  }

  onChangeUser(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login() {
    //alert(`${this.state.Username} and ${this.state.Password}  wants to log in `);
    let user = { UserName: this.state.UserName, Password: this.state.Password };
    this.serv
      .postData(user)
      .then(res => res.json())
      .then(resp => {
      console.log("api values" + JSON.stringify(resp));
      localStorage.setItem("token", `Bearer ${resp.token}`)
      if(resp.role === 'admin'){
        let history =  this.props.history;
        history.push('/adminhome')}
        else if(resp.role ==='operator'){
          let history = this.props.history;
          history.push('/operatorhome')

        }
        else if(resp.role === 'accessuser'){
          let uId= resp.uId;
          sessionStorage.setItem("userId",uId);
          let history = this.props.history;
          history.push('/UHome')
          
        }
      
    })
    .catch(error => console.log(error.status))
  }
  
  render() {
    // const background = {
    //   backgroundImage: `url(${bgimage.jpg})`,
    //   backgroundSize: 'cover',
    //   overflow: 'hidden',
    // };

    return (
      
     <body>
       
       <ImageLoader src="./../images/bgimage.jpg"/>
            <div className = 'Component-Bg' 
           style = {{ backgroundImage: 'url(' + imgUrl + ')', 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                    }}>
      </div>
        <form align="center">
        <font color="Red"><b><h1>Login Here</h1></b></font>
        <br/><br/>
          <font color="red"><b>USERNAME{" "}</b></font>
          <input
           STYLE='color=#FFFF00'


            type="text"
            name="UserName"
            onChange={this.onChangeUser.bind(this)}
          />{" "}
          <br />
          <br />
          <font color="red"><b>PASSWORD{" "}</b></font>
          <input
            type="text"
            type="password"
            name="Password"
            onChange={this.onChangeUser.bind(this)}
          />{" "}
          <br />
          <br />
          <input
            type="button"
            value="SignIn"
            class="btn btn-success"
            onClick={this.login.bind(this)}
          />
        </form>
      </body>
    );
  }
}

export default UserComponent;
