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
		//Sending and receiving data in JSON format using POST method
		var filePath = app.activeDocument.fullName;
		var splitPath = filePath.toString().split('.');
		var originalExtension = splitPath[splitPath.length-1];
		var folderPath = filePath.toString().split('/').slice(0,-1).join('/') + '/';
		var sanitizedFilePath = File(filePath).fsName;

		var xhr = new XMLHttpRequest();
		var url = "https://artwork-qa1-temp.s3.ap-south-1.amazonaws.com";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
		    if (xhr.readyState === 4 && xhr.status === 200) {
		        var json = JSON.parse(xhr.responseText);
		        console.log(json.email + ", " + json.password);
		    }
		};
		var data = JSON.stringify({"key": "72a0661f-4b9f-4094-be79-5f7d4a2cbb38",
                "success_action_status": "201",
                "x-amz-meta-original-filename": "1.pdf",
                "Content-Type": "application/pdf",
                "policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wNC0wN1QxOToxMjowN1oiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJhcnR3b3JrLXFhMS10ZW1wIn0seyJrZXkiOiI3MmEwNjYxZi00YjlmLTQwOTQtYmU3OS01ZjdkNGEyY2JiMzgifSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LHsieC1hbXotbWV0YS1vcmlnaW5hbC1maWxlbmFtZSI6IjEucGRmIn0seyJDb250ZW50LVR5cGUiOiJhcHBsaWNhdGlvbi9wZGYifSx7IngtYW16LWNyZWRlbnRpYWwiOiJBS0lBVEM2SllZTUk2TldEWlA2Uy8yMDIwMDQwNy9hcC1zb3V0aC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsieC1hbXotYWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsieC1hbXotZGF0ZSI6IjIwMjAwNDA3VDE4NDIwN1oifV19",
                "x-amz-credential": "AKIATC6JYYMI6NWDZP6S/20200407/ap-south-1/s3/aws4_request",
                "x-amz-algorithm": "AWS4-HMAC-SHA256",
                "x-amz-date": "20200407T184207Z",
                "x-amz-signature": "61ede696ca5d03e4d7987c84668437de5954c85ab41b82d3040f7d0d8eb2cd45",
            	"file": sanitizedFilePath});
		xhr.send(data);
		xhr.onerror = function() {
  			alert("Request failed");
		};

	});
}
