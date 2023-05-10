import {
  helloError,
  helloStr,
  helloNum,
  helloArrayStr,
  helloObj,
} from "../utils/samples";

export { helloError, helloStr, helloNum, helloArrayStr, helloObj };


export function helloWorld() {
  alert("Hello World!");
}

export function saveArtboardAsPNG() {
  // Iterate over artboards, save them, and return array of paths to images
  let artboards = app.activeDocument.artboards;
  let artboardCount = artboards.length;
  let artboardPaths = [];
  let artboardPath = Folder.userData.toString() + "/"
  let artboardName = "";
  
  let artboard = null;
  let i = 0;

  for (i = 0; i < artboardCount; i++) {
    artboard = artboards[i];
    artboardName = artboard.name;
    artboardPath = artboardPath + artboardName + ".png";
    const newFile = new File(artboardPath);
    exportArtboardToPNG(app.activeDocument, i, newFile);
    artboardPaths.push(newFile.fsName);
    artboardPath = Folder.userData.toString() + "/"
  }

  return artboardPaths;
}

export function exportArtboardToPNG(doc, artboardIndex, destFile) {
  let exportOptions = new ExportOptionsPNG24();
  exportOptions.artBoardClipping = true;
  exportOptions.transparency = true;
  exportOptions.horizontalScale = 100;
  exportOptions.verticalScale = 100;

  let artboard = doc.artboards.setActiveArtboardIndex(artboardIndex);

  const fileExported = doc.exportFile(destFile, ExportType.PNG24, exportOptions);

}