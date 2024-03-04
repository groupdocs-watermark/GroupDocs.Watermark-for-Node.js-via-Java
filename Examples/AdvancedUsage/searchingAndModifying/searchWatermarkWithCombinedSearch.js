const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function searchWatermarkWithCombinedSearch() {
  const documentPath = Constants.InDocumentPdf;

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Define image search criteria
  const imageSearchCriteria = new groupdocsWatermark.ImageDctHashSearchCriteria(Constants.LogoPng);
  imageSearchCriteria.setMaxDifference(0.9);

  // Define text search criteria
  const textSearchCriteria = new groupdocsWatermark.TextSearchCriteria("Company Name");

  // Define rotate angle search criteria
  const rotateAngleSearchCriteria = new groupdocsWatermark.RotateAngleSearchCriteria(30, 60);

  // Combine search criteria
  const combinedSearchCriteria = imageSearchCriteria.or(textSearchCriteria).and(rotateAngleSearchCriteria);

  // Search for possible watermarks
  const possibleWatermarks = watermarker.search(combinedSearchCriteria);

  // Output the results
  console.log(`Found ${possibleWatermarks.getCount()} possible watermark(s).`);

  // Close the watermarker
  watermarker.close();
}

module.exports = searchWatermarkWithCombinedSearch