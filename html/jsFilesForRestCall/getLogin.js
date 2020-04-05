$(document).ready(function() {
    $.ajax({
        url: "https://artwork.bizongo.com/login"
    }).then(function(data) {
       $('.id').append(data.id);
       $('.password').append(data.password);
    });
});