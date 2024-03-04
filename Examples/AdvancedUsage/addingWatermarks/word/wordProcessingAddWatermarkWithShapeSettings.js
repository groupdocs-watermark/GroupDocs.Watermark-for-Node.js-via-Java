const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function wordProcessingAddWatermarkWithShapeSettings() {
  const documentPath = Constants.InDocumentDocx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'wordProcessingAddWatermarkWithShapeSettings')

  // Create an instance of WordProcessingLoadOptions
  const loadOptions = new groupdocsWatermark.WordProcessingLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InDocumentDocx, loadOptions);

  // Create an instance of TextWatermark
  const watermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 19));

  // Set additional settings for the watermark
  watermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
  watermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  watermark.setRotateAngle(25.0);
  watermark.setForegroundColor(groupdocsWatermark.Color.getRed());
  watermark.setOpacity(1.0);

  // Create an instance of WordProcessingWatermarkSectionOptions
  const options = new groupdocsWatermark.WordProcessingWatermarkSectionOptions();

  // Set the shape name
  options.setName('Shape 1');

  // Set the descriptive (alternative) text that will be associated with the shape
  options.setAlternativeText('Test watermark');

  // Add the watermark with options
  watermarker.add(watermark, options);

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}


module.exports = wordProcessingAddWatermarkWithShapeSettings