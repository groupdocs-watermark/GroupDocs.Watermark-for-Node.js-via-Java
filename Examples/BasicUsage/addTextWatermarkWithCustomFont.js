const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function addTextWatermarkWithCustomFont() {
  const documentPath = Constants.InDocumentPdf; // NOTE: Put the actual path for your document
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'addTextWatermarkWithCustomFont')
  var fontsFolder = Constants.FontsPath;
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Initialize the font to be used for watermark and folder with it
  var font = new groupdocsWatermark.Font("OT Chekharda Bold Italic", fontsFolder, 36)
  const watermark = new groupdocsWatermark.TextWatermark('top secret', font);

  watermark.setForegroundColor(groupdocsWatermark.Color.getRed());
  watermark.setX(10);
  watermark.setY(300);
  watermark.setOpacity(0.4);

  watermarker.add(watermark);
  watermarker.save(outputFilePath);
  watermarker.close();
}

  module.exports = addTextWatermarkWithCustomFont