const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function searchImageWatermark() {
  const documentPath = Constants.InDocumentPdf;
  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Initialize search criteria with the image
  const imageSearchCriteria = new groupdocsWatermark.ImageDctHashSearchCriteria(Constants.WatermarkJpg);

  // Set maximum allowed difference between images
  imageSearchCriteria.setMaxDifference(0.9);

  // Search for possible watermarks matching the criteria
  const possibleWatermarks = watermarker.search(imageSearchCriteria);

  console.log(`Found ${possibleWatermarks.getCount()} possible watermark(s).`);

  // Close the watermarker
  watermarker.close();
}

module.exports = searchImageWatermark