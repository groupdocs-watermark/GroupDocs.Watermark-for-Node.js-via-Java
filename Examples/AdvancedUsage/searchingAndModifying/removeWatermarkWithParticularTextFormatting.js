const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function removeWatermarkWithParticularTextFormatting() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'removeWatermarkWithParticularTextFormatting')

  // Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Define search criteria for watermarks with particular text formatting
  const criteria = new groupdocsWatermark.TextFormattingSearchCriteria();
  criteria.setForegroundColorRange(new groupdocsWatermark.ColorRange());
  criteria.getForegroundColorRange().setMinHue(-5);
  criteria.getForegroundColorRange().setMaxHue(10); 
  criteria.setBackgroundColorRange(new groupdocsWatermark.ColorRange());
  criteria.getBackgroundColorRange().setEmpty(true);
  criteria.setFontName('Arial');
  criteria.setMinFontSize(19);
  criteria.setMaxFontSize(42);
  criteria.setFontBold(true);

  // Search for possible watermarks matching the criteria
  const watermarks = watermarker.search(criteria);

  // Remove the found watermarks
  watermarks.clear();

  // Save the modified document
  watermarker.save(outputFilePath);

  // Close the watermarker
  watermarker.close();
}
module.exports = removeWatermarkWithParticularTextFormatting