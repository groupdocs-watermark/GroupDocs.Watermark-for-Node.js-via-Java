const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfRemoveAnnotationsWithParticularTextFormatting() {
    const documentPath = Constants.InDocumentPdf;
    const outputFilePath = Constants.createOutputFilePath(documentPath, 'pdfRemoveAnnotationsWithParticularTextFormatting')

  // Create an instance of PdfLoadOptions
  const loadOptions = new groupdocsWatermark.PdfLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Get PdfContent
  const pdfContent = watermarker.getContent(groupdocsWatermark.PdfContent.class);

  for (const page of pdfContent.getPages().getInnerList().toArray()) {
      for (let i = page.getAnnotations().getCount() - 1; i >= 0; i--) {
          for (const fragment of page.getAnnotations().get_Item(i).getFormattedTextFragments().getInnerList().toArray()) {
              if (fragment.getFont().getFamilyName() === 'Verdana') {
                  page.getAnnotations().removeAt(i);
                  break;
              }
          }
      }
  }

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = pdfRemoveAnnotationsWithParticularTextFormatting