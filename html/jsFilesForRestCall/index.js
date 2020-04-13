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
			//xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = function () {
				    alert("success_action_status "+xhr.response);
			    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			        alert(xhr.response);
			    }
			};
			var formData = new FormData();
			//TODO:: craete a file object so that we can do a post call. on that.
			//var file = window.cep.fs.readFile(path);
			var file = window.cep.fs.readFile(path,cep.encoding.utf8).data;
			//var file = File(path);
			//alert(file); 
			//alert(file.data);
			// result = window.cep.fs.readFile(path, cep.encoding.utf8);
			// var file;
			// //alert(result.err);
			// if (result.err === 0) {
			// 	alert("No error");
			// 	var base64Data = result.data;
			// 	alert("base64Data" +base64Data);
			// 	file = cep.encoding.convertion.b64_to_utf8(base64Data);
			// 	alert(file);
			// }
			// else {
			//  	alert("error");
			// }

			
			var data = {"key": "d00c354e-8908-4917-b7df-9f57dca96838",
                "success_action_status": "201",
                "x-amz-meta-original-filename": "atul_a_1.pdf",
                "Content-Type": "application/pdf",
                "policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wNC0wOVQxMjoyNjoxNloiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJhcnR3b3JrLXFhMS10ZW1wIn0seyJrZXkiOiJkMDBjMzU0ZS04OTA4LTQ5MTctYjdkZi05ZjU3ZGNhOTY4MzgifSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LHsieC1hbXotbWV0YS1vcmlnaW5hbC1maWxlbmFtZSI6ImF0dWxfYV8xLnBkZiJ9LHsiQ29udGVudC1UeXBlIjoiYXBwbGljYXRpb24vcGRmIn0seyJ4LWFtei1jcmVkZW50aWFsIjoiQUtJQVRDNkpZWU1JNk5XRFpQNlMvMjAyMDA0MDkvYXAtc291dGgtMS9zMy9hd3M0X3JlcXVlc3QifSx7IngtYW16LWFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IngtYW16LWRhdGUiOiIyMDIwMDQwOVQxMTU2MTZaIn1dfQ==",
                "x-amz-credential": "AKIATC6JYYMI6NWDZP6S/20200409/ap-south-1/s3/aws4_request",
                "x-amz-algorithm": "AWS4-HMAC-SHA256",
                "x-amz-date": "20200409T115616Z",
                "x-amz-signature": "f329ae53bdfac0fc93a1df4210014fe90d63edc0e31ec5dcf0d0c92a80402315"
	            	};
	        Object.keys(data).forEach(key => formData.append(key, data[key]));
	        formData.append('file', file);
	        alert(formData);
			xhr.send(formData);
			xhr.onerror = function(error) {
	  			alert("Request failed "+error);
			};

		});
}
