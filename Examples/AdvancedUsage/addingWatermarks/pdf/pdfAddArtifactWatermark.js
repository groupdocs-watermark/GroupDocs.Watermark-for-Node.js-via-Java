const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfAddArtifactWatermark() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'pdfAddArtifactWatermark')


  // Create an instance of PdfLoadOptions
  const loadOptions = new groupdocsWatermark.PdfLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Create an instance of PdfArtifactWatermarkOptions
  const options = new groupdocsWatermark.PdfArtifactWatermarkOptions();

  // Add text watermark
  const textWatermark = new groupdocsWatermark.TextWatermark('This is an artifact watermark', new groupdocsWatermark.Font('Arial', 8));
  textWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Right);
  watermarker.add(textWatermark, options);

  // Add image watermark
  const imageWatermark = new groupdocsWatermark.ImageWatermark(Constants.LogoBmp);
  watermarker.add(imageWatermark, options);

  // Close imageWatermark
  imageWatermark.close();

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = pdfAddArtifactWatermark