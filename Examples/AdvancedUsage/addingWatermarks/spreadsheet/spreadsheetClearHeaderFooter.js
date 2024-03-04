const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function spreadsheetClearHeaderFooter() {
  const documentPath = Constants.InSpreadsheetXlsx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'spreadsheetClearHeaderFooter')

  // Create an instance of SpreadsheetLoadOptions
  const loadOptions = new groupdocsWatermark.SpreadsheetLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InSpreadsheetXlsx, loadOptions);

  // Create an instance of SpreadsheetContent
  const content = watermarker.getContent(groupdocsWatermark.SpreadsheetContent.class);

  // Get the header and footer sections
  const sections = content.getWorksheets().get_Item(0).getHeadersFooters()
      .getByOfficeHeaderFooterType(groupdocsWatermark.OfficeHeaderFooterType.HeaderPrimary).getSections();

  // Clear script and image from each section
  for (const section of sections.getInnerList().toArray()) {
      section.setScript(null);
      section.setImage(null);
  }

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = spreadsheetClearHeaderFooter