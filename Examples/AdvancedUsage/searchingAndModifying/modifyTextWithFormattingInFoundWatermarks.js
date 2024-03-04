const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function modifyTextWithFormattingInFoundWatermarks() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'modifyTextWithFormattingInFoundWatermarks')

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Define search criteria
  const searchCriteria = new groupdocsWatermark.TextSearchCriteria("test", false);

  // Search for watermarks
  const watermarks = watermarker.search(searchCriteria);

  // Iterate through found watermarks
  for (const watermark of watermarks.getInnerList().toArray()) {
    try {
      // Clear existing formatted text fragments
      watermark.getFormattedTextFragments().clear();

      // Add new formatted text fragment
      watermark.getFormattedTextFragments().add("passed", new groupdocsWatermark.Font("Calibri", 19, groupdocsWatermark.FontStyle.Bold), groupdocsWatermark.Color.getRed(), groupdocsWatermark.Color.getAqua());
    } catch (e) {
      // Found entity may not support text editing
      // Passed arguments can have inappropriate value
      // Process such cases here
    }
  }

  // Save document
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = modifyTextWithFormattingInFoundWatermarks