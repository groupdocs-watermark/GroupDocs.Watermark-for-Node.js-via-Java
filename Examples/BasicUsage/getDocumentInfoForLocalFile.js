const path = require('path');
const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function getDocumentInfoForLocalFile() {
  const documentPath = Constants.InSourceDocx; // NOTE: Put the actual path for your document
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  const documentInfo = watermarker.getDocumentInfo();
  console.log('File type:', documentInfo.getFileType().toString());
  console.log('Number of pages:', documentInfo.getPageCount());
  console.log('Document size:', documentInfo.getSize(), 'bytes');

  watermarker.close();
}

  module.exports = getDocumentInfoForLocalFile