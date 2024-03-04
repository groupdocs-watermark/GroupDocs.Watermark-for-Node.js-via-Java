const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function searchWatermarkWithParticularTextFormatting() {
  const documentPath = Constants.InDocumentPdf;

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Define text formatting search criteria
  const criteria = new groupdocsWatermark.TextFormattingSearchCriteria();
  criteria.setForegroundColorRange(new groupdocsWatermark.ColorRange());
  criteria.getForegroundColorRange().setMinHue(-5);
  criteria.getForegroundColorRange().setMaxHue(10);
  criteria.setBackgroundColorRange(new groupdocsWatermark.ColorRange());
  criteria.getBackgroundColorRange().setEmpty(true);
  criteria.setFontName("Arial");
  criteria.setMinFontSize(19);
  criteria.setMaxFontSize(42);
  criteria.setFontBold(true);

  // Search for possible watermarks
  const watermarks = watermarker.search(criteria);

  // Output the results
  console.log(`Found ${watermarks.getCount()} possible watermark(s).`);

  // The code for working with found watermarks goes here.

  // Close the watermarker
  watermarker.close();
}

module.exports = searchWatermarkWithParticularTextFormatting