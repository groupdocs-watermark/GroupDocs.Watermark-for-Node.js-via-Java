const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function spreadsheetAddModernWordArtWatermark() {
  const documentPath = Constants.InSpreadsheetXlsx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'spreadsheetAddModernWordArtWatermark')

  // Create an instance of SpreadsheetLoadOptions
  const loadOptions = new groupdocsWatermark.SpreadsheetLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InSpreadsheetXlsx, loadOptions);

  // Create an instance of TextWatermark
  const textWatermark = new groupdocsWatermark.TextWatermark("Test watermark", new groupdocsWatermark.Font("Arial", 8));

  // Create an instance of SpreadsheetWatermarkModernWordArtOptions
  const options = new groupdocsWatermark.SpreadsheetWatermarkModernWordArtOptions();
  options.setWorksheetIndex(0);

  // Add modern WordArt watermark to Excel document worksheet
  watermarker.add(textWatermark, options);

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}
module.exports = spreadsheetAddModernWordArtWatermark