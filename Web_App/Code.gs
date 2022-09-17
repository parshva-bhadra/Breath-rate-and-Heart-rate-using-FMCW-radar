function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function uploadFiles(data)
{
 var file = data.myFile;
 var folder = DriveApp.getFolderById('1DzssP1Qe-1_U6JY8HBrDB9Anmb91PxTm');
 var createFile = folder.createFile(file);
 return createFile.getUrl();
}
