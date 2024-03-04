const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function loadFromLocalDisk() {
  const documentPath = Constants.InDocumentDocx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'loadFromLocalDisk')

  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  const watermark = new groupdocsWatermark.TextWatermark("Test watermark", new groupdocsWatermark.Font("Arial", 12));

  watermarker.add(watermark);
  watermarker.save(outputFilePath);
  watermarker.close();
}
module.exports = loadFromLocalDisk