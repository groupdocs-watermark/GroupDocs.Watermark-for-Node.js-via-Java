const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function searchWatermarkWithSearchString() {
  const documentPath = Constants.InDocumentPdf;

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Search by exact string
  const textSearchCriteria = new groupdocsWatermark.TextSearchCriteria("2017");

  // Find all possible watermarks containing some specific text
  const possibleWatermarks = watermarker.search(textSearchCriteria);

  // Output the results
  console.log(`Found ${possibleWatermarks.getCount()} possible watermark(s)`);

  // Close the watermarker
  watermarker.close();
}

module.exports = searchWatermarkWithSearchString