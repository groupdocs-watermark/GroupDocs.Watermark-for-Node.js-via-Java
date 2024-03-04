const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfRemoveWatermark() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'pdfRemoveWatermark')

  // Create an instance of PdfLoadOptions
  const loadOptions = new groupdocsWatermark.PdfLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Initialize search criteria
  const imageSearchCriteria = new groupdocsWatermark.ImageDctHashSearchCriteria(Constants.LogoPng);
  const textSearchCriteria = new groupdocsWatermark.TextSearchCriteria('Company Name');

  // Get PdfContent
  const pdfContent = watermarker.getContent(groupdocsWatermark.PdfContent.class);

  // Search for watermarks on the first page
  const possibleWatermarks = pdfContent.getPages().get_Item(0).search(imageSearchCriteria.or(textSearchCriteria));

  // Remove all found watermarks
  for (let i = possibleWatermarks.getCount() - 1; i >= 0; i--) {
      possibleWatermarks.removeAt(i);
  }

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = pdfRemoveWatermark