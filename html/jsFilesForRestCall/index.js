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
pdfButton.addEventListener(
  "click",
  function () {
    exportWithType("pdf");
  },
  false
);
// jpgButton.addEventListener('click', function(){exportWithType('jpg');}, false);
// pngButton.addEventListener('click', function(){exportWithType('png');}, false);
// originalButton.addEventListener('click', function(){exportWithType();}, false);

function exportWithType(type) {
	console.log(type);
    csInterface.evalScript(`exportFile("${type}")`, function (path) {
    console.log("file saved at " + path);

    // var filePath = app.activeDocument.fullName;
    // var splitPath = filePath.toString().split('.');
    // var originalExtension = splitPath[splitPath.length-1];
    // var folderPath = filePath.toString().split('/').slice(0,-1).join('/') + '/';
    // var sanitizedFilePath = File(filePath).fsName;
    // var xhr = new XMLHttpRequest();
    // var url = "https://artwork-qa1-temp.s3.ap-south-1.amazonaws.com";
    // xhr.open("POST", url, true);
    // //xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function () {
    // 	    console.log("success_action_status "+xhr.response);
    //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //         console.log(xhr.response);
    //     }
    // };
    // var formData = new FormData();
    // //TODO:: craete a file object so that we can do a post call. on that.
    // //var file = window.cep.fs.readFile(path);
    // var fs = require('fs');
    // var file = fs.createReadStream(path);
    //var file = File(path);
    //console.log(file);
    //console.log(file.data);
    // result = window.cep.fs.readFile(path, cep.encoding.utf8);
    // var file;
    // //console.log(result.err);
    // if (result.err === 0) {
    // 	console.log("No error");
    // 	var base64Data = result.data;
    // 	console.log("base64Data" +base64Data);
    // 	file = cep.encoding.convertion.b64_to_utf8(base64Data);
    // 	console.log(file);
    // }
    // else {
    //  	console.log("error");
    // }

    //console.log(file);
    //console.log(file.data);
    /*
			var data = {"key": "afb181c7-c8ff-4f4d-817e-7b52b076b1a3",
                "success_action_status": "201",
                "x-amz-meta-original-filename": "atul_a_1.pdf",
                "Content-Type": "application/pdf",
                "policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wNC0xM1QxNToxMDowMVoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJhcnR3b3JrLXFhMS10ZW1wIn0seyJrZXkiOiJhZmIxODFjNy1jOGZmLTRmNGQtODE3ZS03YjUyYjA3NmIxYTMifSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LHsieC1hbXotbWV0YS1vcmlnaW5hbC1maWxlbmFtZSI6ImF0dWxfYV8xLnBkZiJ9LHsiQ29udGVudC1UeXBlIjoiYXBwbGljYXRpb24vcGRmIn0seyJ4LWFtei1jcmVkZW50aWFsIjoiQUtJQVRDNkpZWU1JNk5XRFpQNlMvMjAyMDA0MTMvYXAtc291dGgtMS9zMy9hd3M0X3JlcXVlc3QifSx7IngtYW16LWFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IngtYW16LWRhdGUiOiIyMDIwMDQxM1QxNDQwMDFaIn1dfQ==",
                "x-amz-credential": "AKIATC6JYYMI6NWDZP6S/20200413/ap-south-1/s3/aws4_request",
                "x-amz-algorithm": "AWS4-HMAC-SHA256",
                "x-amz-date": "20200413T144001Z",
                "x-amz-signature": "5d349ea1c9c06df62ef82b724567b56345ea86c4de7d9543b31ff02dd227876d"
	            	};
	        Object.keys(data).forEach(key => formData.append(key, data[key]));
	        formData.append('file', file);
	        console.log(formData);
			xhr.send(formData);
			xhr.onerror = function(error) {
	  			console.log("Request failed "+error);
			};

		}); 
		
           */


	console.log("require fs request");
    var fs = require('fs');
	var request = require('request');
	//require('form-data');
	//Node is giving error while installing , looking into it. 
	console.log("require");
    var data = {
		"key": "bfa3559a-5f28-43d7-87c9-011bf8e9f888",
        "success_action_status": "201",
		"x-amz-meta-original-filename": "atul_a_1.pdf",
		"Content-Type": "application/pdf",
		"policy": "eyJleHBpcmF0aW9uIjoiMjAyMC0wNC0xNFQxMTowODo0N1oiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJhcnR3b3JrLXFhMS10ZW1wIn0seyJrZXkiOiJiZmEzNTU5YS01ZjI4LTQzZDctODdjOS0wMTFiZjhlOWY4ODgifSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LHsieC1hbXotbWV0YS1vcmlnaW5hbC1maWxlbmFtZSI6ImF0dWxfYV8xLnBkZiJ9LHsiQ29udGVudC1UeXBlIjoiYXBwbGljYXRpb24vcGRmIn0seyJ4LWFtei1jcmVkZW50aWFsIjoiQUtJQVRDNkpZWU1JNk5XRFpQNlMvMjAyMDA0MTQvYXAtc291dGgtMS9zMy9hd3M0X3JlcXVlc3QifSx7IngtYW16LWFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IngtYW16LWRhdGUiOiIyMDIwMDQxNFQxMDM4NDdaIn1dfQ==",
		"x-amz-credential": "AKIATC6JYYMI6NWDZP6S/20200414/ap-south-1/s3/aws4_request",
		"x-amz-algorithm": "AWS4-HMAC-SHA256",
		"x-amz-date": "20200414T103847Z",
		"x-amz-signature": "ce607888e6569ef2b1c052399a8b3b5d9eefb1f2659dbf694006d88879b888cf",
       file: fs.createReadStream(path)
    };
    // var formData;
    // Object.keys(data).forEach(key => formData.append(key, data[key]));
    // console.log(formData);
    // // formData = {
    // // file: {
    // //     value:  fs.createReadStream(path),
    // //     options: {
    // //       filename: 'atul_a_1.pdf',
    // //       contentType: 'application/pdf'
    // //     }
    // //   }
    // // };
    // formData.append(file , fs.createReadStream(path));
    console.log(data);
    request.post(
      {
        url: "https://artwork-qa1-temp.s3.ap-south-1.amazonaws.com",
        formData: data
      },
      function optionalCallback(err, httpResponse, body) {
        if (err) {
          console.log("upload failed: " + err);
        }
        console.log("Upload successful!  Server responded with: " + body);
      }
    );
  });
}
