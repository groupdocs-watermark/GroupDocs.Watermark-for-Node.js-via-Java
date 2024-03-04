const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function loadingDocumentOfSpecificFormat() {
  const documentPath = Constants.InSpreadsheetXlsx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'loadingDocumentOfSpecificFormat')

  // Create SpreadsheetLoadOptions
  const loadOptions = new groupdocsWatermark.SpreadsheetLoadOptions();

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Use watermarker methods to manage watermarks in the Spreadsheet document
  const watermark = new groupdocsWatermark.TextWatermark("Test watermark", new groupdocsWatermark.Font("Arial", 12));

  watermarker.add(watermark);

  // Save watermarked Spreadsheet document
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = loadingDocumentOfSpecificFormat