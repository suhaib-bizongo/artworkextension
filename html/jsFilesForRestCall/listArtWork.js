function setmytasks(){




 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {

      data = JSON.parse(this.responseText);
      data.data.forEach(function(d){

              var markup = "<tr>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'>"+d.type+"</td>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'>"+d.attributes.project.name+"</td>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'>"+d.attributes.stage_due_date+"</td>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'><a><button onclick='uploadartworktask()' type='button' class='ant-btn login-form-button ant-btn-primary ant-btn-block'><span>Upload</span></button></a></td>"
                        +"</tr>";
                      



            $("table tbody").append(markup);            })
    }
    else{

                   //window.location.href = "index.html";


    }
  };
  
  xhttp.open("GET", "https://secret-crag-28491.herokuapp.com/https://artworkapi.bizongo.com/companies/"+getCookie("company_id")+"/task_dashboard", true);
  xhttp.setRequestHeader("Authorization", "Bearer " + getCookie("jwt"));
  
  xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  xhttp.send()


}

setmytasks();