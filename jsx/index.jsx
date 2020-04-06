function exportFile(type) {
	/* 1) get the full file path */
	var filePath = app.activeDocument.fullName;

	/* 2) split the path to get the extension of the file */
	var splitPath = filePath.toString().split('.');
	var originalExtension = splitPath[splitPath.length-1];

	/* 3) split the path to get the folder path */
	var folderPath = filePath.toString().split('/').slice(0,-1).join('/') + '/';

	/* 4) sanitize the full path */
	var sanitizedFilePath = File(filePath).fsName;
}