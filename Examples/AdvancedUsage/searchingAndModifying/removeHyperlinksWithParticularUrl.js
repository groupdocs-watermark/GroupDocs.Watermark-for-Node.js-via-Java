const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function removeHyperlinksWithParticularUrl() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'removeHyperlinksWithParticularUrl')

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Define search criteria for hyperlinks with a particular URL
  const searchCriteria = new groupdocsWatermark.TextSearchCriteria('someurl.com');

  // Search for possible watermarks matching the criteria
  const watermarks = watermarker.search(searchCriteria);

  // Iterate through found watermarks
  for (let i = watermarks.getCount() - 1; i >= 0; i--) {
    // Ensure that only hyperlinks will be removed
    if (watermarks.get_Item(i) instanceof groupdocsWatermark.HyperlinkPossibleWatermark) {
      // Output the full URL of the hyperlink
      console.log(watermarks.get_Item(i).getText());

      // Remove hyperlink from the document
      watermarks.removeAt(i);
    }
  }

  // Save the modified document
  watermarker.save(outputFilePath);

  // Close the watermarker
  watermarker.close();
}

module.exports = removeHyperlinksWithParticularUrl