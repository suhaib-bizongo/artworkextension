function setmytasks(){

    $.ajax({
    type: "GET",
    url: "https://secret-crag-28491.herokuapp.com/https://artworkapi.bizongo.com/companies/"+getCookie("company_id")+"/task_dashboard",
    beforeSend: function (xhr) {
    xhr.setRequestHeader ("Authorization", "Bearer " + getCookie("jwt"));
  },
    success: function (data){
            console.log("hello");
            console.log(data)
            data.data.forEach(function(d){

              var markup = "<tr>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'>"+d.type+"</td>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'>"+d.attributes.project.name+"</td>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'>"+d.attributes.stage_due_date+"</td>"
                            +"<td style='text-align: center;' class='ant-col ant-col-6'  scope='col'><a><button onclick='uploadartworktask()' type='button' class='ant-btn login-form-button ant-btn-primary ant-btn-block'><span>Upload</span></button></a></td>"
                        +"</tr>";
                      



            $("table tbody").append(markup);            })
          },
          failure : function (data){
            console.log("helloo");
            console.log(data);
             window.location.href = "index.html";
        
          }

})
}

setmytasks();