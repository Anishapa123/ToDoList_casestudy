// function validate(){
//     var username=document.getElementById("username").value;
//     var password=document.getElementById("password").value;

//     if(username=="admin"&& password=="12345")
//     { 
//         alert("login Successfully");
//     return false;
//     }

// else{
//    alert ("Login failed") ;
// }
// }

// function login(username,password){
//     alert("login successfully") 
// }


function success_page() {
    window.location.href = "success page url ";
  }
  function fail_page() {
    window.location.href ="fail page url ";
  }
  
  function redirect_page( myCallback) {
    alert(88);
    window.location.href =  "todolist.html" ;
    alert(668);
     // myCallback();
  }
  
  function login_check()
  {
    var username = document.getElementById('username').value;
    var password= document.getElementById('password').value;
      if(username == "admin" && password == "12345")
     { 
    //  alert(77); 
      var success_page = '';
      window.location.href =  "todolist.html" ;
       // redirect_page(success_page);
      return false;
      }
          else 
           {
              // redirect_page(fail_page);
              }
  return false;
  }




function Ajax(){
  //alert(99);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200) {

        var response=JSON.parse(this.responseText);
        //alert(response);
        var output="";
        for(var i=0; i<15; i++){
         // alert(response[i]);
        output+="<input type ='checkbox' name='mycheck' id ='mycheck' onChange='checkToDoCount("+ i+");'>"+response[i].title+"<br>";
        }
         document.getElementById("todolist").innerHTML=output;
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    return false;
}
var chkCount = 0;
function checkToDoCount(selected){
 // alert(selected);
  var check = document.getElementsByName("mycheck")[selected];
  if(check.checked){
    chkCount++;
}else{
  chkCount--;
}
if(chkCount==5){
  alert("Congrats,5 tasks has been successfuly completed");
}
else{
alert("select any 5 tasks");
}
}

function count(){
 var promise=new Promise(function(resolve,reject){
   var mycheck=0;
    var check=document.getElementsByName("mycheck");
    alert(check[1].checked);
     for(var i=0; i< 15; i++){
      if(check[i].checked){
         mycheck++;
    }
  }
  alert(mycheck);
       if(mycheck==5){
         alert("Congrats,5 tasks has been successfuly completed");
       }
    else{
      alert("select any 5 tasks");
    }
  }

  )
}
