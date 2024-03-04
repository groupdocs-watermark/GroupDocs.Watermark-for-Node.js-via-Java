const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function modifyTextInFoundWatermarks() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'modifyTextInFoundWatermarks')

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Define search criteria
  const searchCriteria = new groupdocsWatermark.TextSearchCriteria("test", false);

  // Search for watermarks
  const watermarks = watermarker.search(searchCriteria);

  // Iterate through found watermarks
  for (const watermark of watermarks.getInnerList().toArray()) {
    try {
      // Edit text
      watermark.setText("passed");
    } catch (e) {
      // Found entity may not support text editing
      // Passed argument can have inappropriate value
      // Process such cases here
    }
  }

  // Save document
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = modifyTextInFoundWatermarks