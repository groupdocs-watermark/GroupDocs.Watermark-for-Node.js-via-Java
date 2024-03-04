const fs = require('fs');
const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function loadFromStream() {
  const documentPath = Constants.InDocumentDocx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'loadFromStream')

  // Read document stream
  const documentStream = fs.createReadStream(documentPath);

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentStream);

  // Use watermarker methods to manage watermarks
  const watermark = new groupdocsWatermark.TextWatermark("Test watermark", { font: { familyName: "Arial", size: 12 } });

  watermarker.add(watermark);

  // Save watermarked document
  watermarker.save(outputFilePath);

  // Close watermarker and document stream
  watermarker.close();
  documentStream.close();
}

module.exports = loadFromStream