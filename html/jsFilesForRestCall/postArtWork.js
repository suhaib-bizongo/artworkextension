var formData = new FormData();
formData.append('file', $('#file')[0].files[0]); //Path of the file  
$.ajax({
       url : 'https://artworkapi.bizongo.com/library/artworks',
       type : 'POST',
       dataType: 'json',
		headers: {
	    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJBcnR3b3JrIiwidXNlcl9pZCI6MzY0NDYsInJvbGVzIjpbImRlZmF1bHQiXSwiaXNzIjoiVXNlciBNYW5hZ2VtZW50IFN5c3RlbSIsImxhc3RfbmFtZSI6IkFkaXR5YSIsImV4cCI6MTU4ODY3NjM2NCwiZmlyc3RfbmFtZSI6IkF0dWwiLCJlbWFpbCI6ImF0dWwuYWRpdHlhQGJpem9uZ28uY29tIiwidGltZXN0YW1wIjoxNTg2MDE0NzY3fQ.UJ45jx9M5WBZ8FWgCT-HsNHTQvR5DM99rG5QZBVFj4Y"
	  }
       processData: false,  // tell jQuery not to process the data
       contentType: false,  // tell jQuery not to set contentType
       success : function(data) {
           console.log(data);
           alert(data);
       }
});