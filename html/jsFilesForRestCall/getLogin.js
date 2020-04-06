function login(username, password){



    $.ajax({
    type: "POST",
    url: "https://secret-crag-28491.herokuapp.com/https://artworkapi.bizongo.com/login",
    beforeSend: function (xhr) {
    xhr.setRequestHeader ("Authorization", "Basic " + btoa($('#login_form_username').val() + ":" + $('#login_form_password').val()));
  },
    success: function (data){

            console.log("hello");
            console.log(data);
            setCookie("jwt", data.jwt_token, 1)


            setdetails();

            


          },
          failure : function (data){
            console.log("helloo");
            console.log(data);
        
          }
});


}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}


function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}


function openmytasks(){
              window.location.href = "mytasks.html";
}




function setdetails(){



  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {

      data = JSON.parse(this.responseText);
      setCookie("name",data.name,1)
      setCookie("company_id", data.company_id,1)
      window.location.href = "chooseoption.html";
    }
    else{

    }
  };
  
  xhttp.open("GET", "https://secret-crag-28491.herokuapp.com/https://artworkapi.bizongo.com/users/me", true);
  xhttp.setRequestHeader("Authorization", "Bearer " + getCookie("jwt"));
  
  xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  xhttp.send()


}



function logout(){

  setCookie("jwt", "",1);
  window.location.href = "index.html";

}



function uploadartwork(){
  console.log("hey")
  window.location.href ='https://artwork.bizongo.com/upload-artwork'
}