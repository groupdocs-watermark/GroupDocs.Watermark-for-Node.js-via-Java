require('dotenv').config()
const path = require('path')
const fs = require('fs');

const SamplePath = path.join(__dirname, './Resources/SampleFiles')
const ImagesPath = path.join(__dirname, './Resources/SampleFiles/Images')
const FontsPath = path.join(__dirname, './Resources/Fonts')
const OutputPath = path.join(__dirname, 'testResults');

//exports = module.exports

module.exports = {
  LicensePath: (process.env.PATH_TO_LICS + process.env.PRODUCT_LIC) || '',
  SamplePath,
  FontsPath,
  InDocumentDocx: SamplePath + '/document.docx',
  InDocumentPdf: SamplePath + '/sample.pdf',
  InDiagramVsdx: SamplePath + '/diagram.vsdx',
  InMessageMsg: SamplePath + '/test.msg',
  SampleMsg: SamplePath + '/empty.msg',
  ImageTiff: SamplePath + '/image.tiff',
  InPresentationPptx: SamplePath + '/presentation.pptx',
  InDocumentXlsx: SamplePath + '/sample.xlsx',
  InSpreadsheetXlsx: SamplePath + '/document.xlsx',
  InProtectedDocumentDocx: SamplePath + '/protected-document.docx',
  InSourceDocx: SamplePath + '/source.docx',

  ImageHandwrite : ImagesPath + '/signature_handwrite.jpg',
  ImageStamp : ImagesPath + '/stamp.png',
  LogoPng : ImagesPath + '/logo.png',
  ProtectJpg: ImagesPath + '/protect.jpg',
  WatermarkJpg: ImagesPath + '/watermark.jpg',
  LogoJpg : ImagesPath + '/logo.jpg',
  LogoBmp : ImagesPath + '/logo.bmp',
  createOutputFilePath,
  createOutputFolder
}

function createOutputFilePath(documentPath, outFolderName) {
  const outputFolderPath = createOutputFolder(outFolderName);
  const fileName = path.basename(documentPath);
  const outputFilePath = path.join(outputFolderPath, fileName);
  return outputFilePath;
}

function createOutputFolder(folderName) {
  if (!fs.existsSync(OutputPath)) {
    fs.mkdirSync(OutputPath);
  }

  const folderPath = path.join(OutputPath, folderName);
  if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
  }
  return folderPath;
}