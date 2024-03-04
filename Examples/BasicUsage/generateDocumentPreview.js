const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')
const fs = require('fs');
const path = require('path');

/**
 * This example demonstrates how to generate a preview for a document.
 */
function generateDocumentPreview() {
  const documentPath = Constants.InDiagramVsdx;

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Set output folder
  const outputFolder = Constants.createOutputFolder('generateDocumentPreview');
  const fileNameTemplate = path.join(outputFolder, 'page%s.png');

  // Define createPageStream and releasePageStream callbacks
  const createPageStream = (pageNumber) => fs.createWriteStream(fileNameTemplate.replace('%s', pageNumber));
  const releasePageStream = (pageNumber, pageStream) => pageStream.close();

  // Define preview options
  const previewOptions = new groupdocsWatermark.PreviewOptions(createPageStream, releasePageStream);

  // Generate preview
  watermarker.generatePreview(previewOptions);

  // Close the watermarker
  watermarker.close();
}

// function createPageStream(pageNumber) {
//   const imageFilePath = path.join(Constants.OutputPath, 'generateDocumentPreview', `page-${pageNumber}.png`);
//   const folder = path.dirname(imageFilePath);

//   if (!fs.existsSync(folder)) {
//     fs.mkdirSync(folder, { recursive: true });
//   }

//   return fs.createWriteStream(imageFilePath);
// }

// function releasePageStream(pageNumber, pageStream) {
//   pageStream.end();
//   const imageFilePath = path.join(Constants.OutputPath, 'generateDocumentPreview', `page-${pageNumber}.png`);
//   console.log(`Image file ${imageFilePath} is ready for preview`);
// }


  module.exports = generateDocumentPreview