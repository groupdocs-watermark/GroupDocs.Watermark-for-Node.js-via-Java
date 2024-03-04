const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function addAnImageWatermark() {
  const documentPath = Constants.InDocumentXlsx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'addAnImageWatermark')

  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  const imageWatermark = new groupdocsWatermark.ImageWatermark(Constants.ImageStamp);
  imageWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  imageWatermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);

  watermarker.add(imageWatermark);
  watermarker.save(outputFilePath);
  watermarker.close();
  console.log('Image watermark added and document saved successfully.');
}

  module.exports = addAnImageWatermark