const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function wordProcessingAddLockedWatermarkToAllPages() {
  const documentPath = Constants.InDocumentDocx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'wordProcessingAddLockedWatermarkToAllPages')

  // Create an instance of WordProcessingLoadOptions
  const loadOptions = new groupdocsWatermark.WordProcessingLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InDocumentDocx, loadOptions);

  // Create an instance of TextWatermark
  const watermark = new groupdocsWatermark.TextWatermark('Watermark text', new groupdocsWatermark.Font('Arial', 19));
  watermark.setForegroundColor(groupdocsWatermark.Color.getRed());

  // Create an instance of WordProcessingWatermarkPagesOptions
  const options = new groupdocsWatermark.WordProcessingWatermarkPagesOptions();
  options.setLocked(true);
  options.setLockType(groupdocsWatermark.WordProcessingLockType.AllowOnlyFormFields);

  // To protect with password
  // options.setPassword("7654321");

  // Add the watermark with options
  watermarker.add(watermark, options);

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}


module.exports = wordProcessingAddLockedWatermarkToAllPages