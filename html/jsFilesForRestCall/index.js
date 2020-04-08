/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/*
  CSInterface
*/
var csInterface = new CSInterface();

/*
  UI Elements
*/
//var buttonGroup = document.querySelector("#button-group");
var pdfButton = document.querySelector("#export-pdf");
// var jpgButton = document.querySelector("#export-jpg");
// var pngButton = document.querySelector("#export-png");
// var originalButton = document.querySelector("#export-original");

/*
  Event listeners
*/
pdfButton.addEventListener('click', function(){exportWithType('pdf');}, false);
// jpgButton.addEventListener('click', function(){exportWithType('jpg');}, false);
// pngButton.addEventListener('click', function(){exportWithType('png');}, false);
// originalButton.addEventListener('click', function(){exportWithType();}, false);

function exportWithType(type) {
		csInterface.evalScript(`exportFile("${type}")`, function(path) {
			alert("file saved at " + path);

			// var filePath = app.activeDocument.fullName;
			// var splitPath = filePath.toString().split('.');
			// var originalExtension = splitPath[splitPath.length-1];
			// var folderPath = filePath.toString().split('/').slice(0,-1).join('/') + '/';
			// var sanitizedFilePath = File(filePath).fsName;
			var xhr = new XMLHttpRequest();
			var url = "https://artwork-qa1-temp.s3.ap-south-1.amazonaws.com";
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = function () {
			    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			        alert(xhr.response);
			    }
			};
			var formData = new FormData();
			//TODO:: craete a file object so that we can do a post call. on that.
			var file = "/Users/atul.aditya/Downloads/atul_a_1.pdf";
			formData.append('file', file);
			var data = JSON.stringify({"key": "ef2957d6-405c-425f-9227-fd1da623d103",
                "success_action_status": "201",
                "x-amz-meta-original-filename": "atul_a_1.pdf",
                "Content-Type": "application/pdf",
                "policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wNC0wOFQxMzowNTowNFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJhcnR3b3JrLXFhMS10ZW1wIn0seyJrZXkiOiJlZjI5NTdkNi00MDVjLTQyNWYtOTIyNy1mZDFkYTYyM2QxMDMifSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LHsieC1hbXotbWV0YS1vcmlnaW5hbC1maWxlbmFtZSI6ImF0dWxfYV8xLnBkZiJ9LHsiQ29udGVudC1UeXBlIjoiYXBwbGljYXRpb24vcGRmIn0seyJ4LWFtei1jcmVkZW50aWFsIjoiQUtJQVRDNkpZWU1JNk5XRFpQNlMvMjAyMDA0MDgvYXAtc291dGgtMS9zMy9hd3M0X3JlcXVlc3QifSx7IngtYW16LWFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IngtYW16LWRhdGUiOiIyMDIwMDQwOFQxMjM1MDRaIn1dfQ==",
                "x-amz-credential": "AKIATC6JYYMI6NWDZP6S/20200408/ap-south-1/s3/aws4_request",
                "x-amz-algorithm": "AWS4-HMAC-SHA256",
                "x-amz-date": "20200408T123504Z",
                "x-amz-signature": "c3510268f0460b6de85e9edf7e3ae21ffb01533fe2c580c4aa50444f9366d8d6"
	            	});
			formData.append(data);
			xhr.send(formData);
			xhr.onerror = function() {
	  			alert("Request failed");
			};

		});
}
