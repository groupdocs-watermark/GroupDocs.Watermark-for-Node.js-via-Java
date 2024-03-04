const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function spreadsheetAddTextWatermarkAsBackground() {
  const documentPath = Constants.InSpreadsheetXlsx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'spreadsheetAddTextWatermarkAsBackground')

  // Create an instance of SpreadsheetLoadOptions
  const loadOptions = new groupdocsWatermark.SpreadsheetLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InSpreadsheetXlsx, loadOptions);

  // Create an instance of TextWatermark
  const watermark = new groupdocsWatermark.TextWatermark("Test watermark", new groupdocsWatermark.Font("Segoe UI", 19));
  watermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  watermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
  watermark.setRotateAngle(45);
  watermark.setSizingType(groupdocsWatermark.SizingType.ScaleToParentDimensions);
  watermark.setScaleFactor(0.5);
  watermark.setOpacity(0.5);

  // Create an instance of SpreadsheetContent
  const content = watermarker.getContent(groupdocsWatermark.SpreadsheetContent.class);

  // Create an instance of SpreadsheetBackgroundWatermarkOptions
  const options = new groupdocsWatermark.SpreadsheetBackgroundWatermarkOptions();
  options.setBackgroundWidth(content.getWorksheets().get_Item(0).getContentAreaWidthPx()); /* set background width */
  options.setBackgroundHeight(content.getWorksheets().get_Item(0).getContentAreaHeightPx()); /* set background height */

  // Add text watermark as background
  watermarker.add(watermark, options);

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}


module.exports = spreadsheetAddTextWatermarkAsBackground