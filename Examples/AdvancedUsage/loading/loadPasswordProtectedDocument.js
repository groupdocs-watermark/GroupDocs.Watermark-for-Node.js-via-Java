const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function loadPasswordProtectedDocument() {
  const documentPath = Constants.InProtectedDocumentDocx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'loadPasswordProtectedDocument')

  // Create LoadOptions with password
  const loadOptions = new groupdocsWatermark.LoadOptions();
  loadOptions.setPassword("P@$$w0rd");

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Use watermarker methods to manage watermarks in the document
  const watermark = new groupdocsWatermark.TextWatermark("Test watermark", new groupdocsWatermark.Font("Arial", 12));

  watermarker.add(watermark);

  // Save watermarked document
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = loadPasswordProtectedDocument