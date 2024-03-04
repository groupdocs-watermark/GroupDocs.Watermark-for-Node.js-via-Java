const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function addWatermarkToImage() {
  const documentPath = Constants.ImageTiff;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'addWatermarkToImage')

  // Create an instance of TiffImageLoadOptions
  const loadOptions = new groupdocsWatermark.TiffImageLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Initialize text or image watermark
  const watermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 19));

  // Add watermark to the first frame
  const options = new groupdocsWatermark.TiffImageWatermarkOptions();
  options.setFrameIndex(0);

  watermarker.add(watermark, options);
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = addWatermarkToImage