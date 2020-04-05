$(document).ready(function() {
    $.ajax({
        url: "https://artworkapi.bizongo.com/login"
    }).then(function(data) {
       $('.id').append(data.id);
       $('.password').append(data.password);
    });
});