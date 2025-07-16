const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function addATextWatermark() {
  const documentPath = Constants.InDocumentPdf; // NOTE: Put the actual path for your document
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'addATextWatermark')

  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  const watermark = new groupdocsWatermark.TextWatermark('top secret', new groupdocsWatermark.Font('Arial', 36));
  watermark.setForegroundColor(groupdocsWatermark.Color.getRed());
  watermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  watermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
  watermark.setOpacity(0.4);
  
  watermarker.add(watermark);
  watermarker.save(outputFilePath);
  watermarker.close();
  console.log(`Text watermark added and document saved successfully.\nCheck output in ${outputFilePath}.`);
}

  module.exports = addATextWatermark