const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function spreadsheetAddImageWatermarkIntoHeaderFooter() {
  const documentPath = Constants.InSpreadsheetXlsx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'spreadsheetAddImageWatermarkIntoHeaderFooter')

  // Create an instance of SpreadsheetLoadOptions
  const loadOptions = new groupdocsWatermark.SpreadsheetLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Create an instance of ImageWatermark
  const watermark = new groupdocsWatermark.ImageWatermark(Constants.LogoPng);

  watermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Top);
  watermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  watermark.setSizingType(groupdocsWatermark.SizingType.ScaleToParentDimensions);
  watermark.setScaleFactor(1);

  // Create an instance of SpreadsheetWatermarkHeaderFooterOptions
  const options = new groupdocsWatermark.SpreadsheetWatermarkHeaderFooterOptions();
  options.setWorksheetIndex(0);

  // Add watermark to worksheet's header or footer
  watermarker.add(watermark, options);

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = spreadsheetAddImageWatermarkIntoHeaderFooter