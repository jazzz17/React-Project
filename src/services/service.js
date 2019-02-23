class UserService {
  getData() {
    var to = localStorage.getItem("token");
    let promise = fetch("http://localhost:4070/api/person",
    { method :"GET",
    headers:{
      "Content-Type":"application/json",
      Authorization: to }

     });
    console.log(promise);
    return promise;
  }

  getPersonInfoData(){
    alert("In get person info data");
    var to = localStorage.getItem("token");
    let promise = fetch("http://localhost:4070/api/getPersonInfoData",
    { method :"GET",
    headers:{
      "Content-Type":"application/json",
      Authorization: to }

     });
    console.log(promise);
    return promise;
    
  }

  SearchUserInfo(user){
    alert("hello");
    var to=localStorage.getItem("token");
    console.log(to);
    let promise= fetch(`http://localhost:4070/api/searchUserInfo`,
    { method:"POST",
      headers:{
      "Content-Type":"application/json",
     "Authorization":to
  },
  body:JSON.stringify(user)
});
  console.log(promise);
  return promise;
  }

  FindTempPersonInfo(prd){
    alert("hello in findtempperson");
    var to=localStorage.getItem("token");
    console.log(to);
    let promise= fetch(`http://localhost:4070/api/FindTempPersonInfo`,
    { method:"POST",
      headers:{
      "Content-Type":"application/json",
     "Authorization":to
  },
  body:JSON.stringify(prd)
});
  console.log(promise);
  return promise;
  }





  getTempPersonInfo(){
    var to=localStorage.getItem("token");
    let promise= fetch("http://localhost:4070/api/getTempPersonInfo",
    { method :"GET",
    headers:{
      "Content-Type":"application/json",
      Authorization: to }

     });
    console.log(promise);
    return promise;
  
  }

  CreateTempUser(){
    var to= localStorage.getItem("token");
    let promise=fetch("http://localhost:4070/api/createtempUser",
    { method:"POST",
  headers:{
    "Content-Type":"application/json",
    Authorization:to
  }});
  console.log(promise);
  return promise;
  }

  postData(user) {
    let promise = fetch("http://localhost:4070/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    console.log(promise);
    return promise;
  }

  postPersonData(prd){
    var to=localStorage.getItem("token");
    let promise = fetch("http://localhost:4070/createTempInfo/auth",{
      method:"POST",
      headers: {
        "Content-Type":"application/json",
        Authorization:to
      },
      body:JSON.stringify(prd)
    });
    console.log(promise);
    return promise;
  }

  createTempPersonInfo(person){
    alert("In createTempPersonInfo");
    var to=localStorage.getItem("token");
    let promise=fetch("http://localhost:4070/createTempPersonInfo/auth",
    {
      method:"POST",
      headers:{
        "Content-type":"application/json",
        Authorization:to
      },
       body:JSON.stringify(person)
    });
    console.log(promise);
    return promise;

  }


  postTempData(operator){
    
    let promise = fetch("http://localhost:4070/operator/auth",{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(operator)
    });
    console.log(promise);
    return promise;
  }

  getTempData(){
    var to= localStorage.getItem("token");
    let promise = fetch("http://localhost:4070/api/operator",{
      method:"GET",
      headers: {
        "Content-Type":"application/json",
        Authorization:to
      }
    });
    console.log(promise);
    return promise;
  }


  CreateNewUser(newuser){
    alert("Creating permanent User"+JSON.stringify(newuser));
    var t=localStorage.getItem("token");
    let promise=fetch("http://localhost:4070/api/createNewUser",
    {method:"POST",
    headers:{
        "Content-Type": "application/json",
         "Authorization":t
    },
    //body:JSON.stringify(UserName,Password)
    body:JSON.stringify(newuser)
    });
   
    return promise;
}

  DeleteTempUser(newuser) {
    var to =localStorage.getItem("token")
    let promise = fetch(`http://localhost:4070/api/deleteTempUser`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         Authorization:to
      },
      body:JSON.stringify(newuser)
    });
    console.log(promise)
    return promise;
  }

  UpdateData(prd) {
    let id = prd.ProductId;
    let promise = fetch(`http://localhost:4070/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(prd)
    });
    return promise;
  }
  
  CreateNewPersonInfo(newperson){
    alert("Creating permanent User"+JSON.stringify(newperson));
    var t=localStorage.getItem("token");
    let promise=fetch("http://localhost:4070/api/createNewPersonInfo",
    {method:"POST",
    headers:{
        "Content-Type": "application/json",
         "Authorization":t
    },
    //body:JSON.stringify(UserName,Password)
    body:JSON.stringify(newperson)
    });
   
    return promise;
}

  CreateTempUserInfo(newuser){
    alert("Creating permanent User"+JSON.stringify(newuser));
    var t=localStorage.getItem("token");
    let promise=fetch("http://localhost:4070/api/createTempUserInfo",
    {method:"POST",
    headers:{
        "Content-Type": "application/json",
         "Authorization":t
    },
    //body:JSON.stringify(UserName,Password)
    body:JSON.stringify(newuser)
    });
   
    return promise;
}

DeleteTempPersonInfo(newperson){
  alert("in delete");
  var to =localStorage.getItem("token")
    let promise = fetch(`http://localhost:4070/api/deleteTempPersonInfo`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         Authorization:to
      },
      body:JSON.stringify(newperson)
    });
    console.log(promise)
    return promise;
  
}
}

export default UserService;
