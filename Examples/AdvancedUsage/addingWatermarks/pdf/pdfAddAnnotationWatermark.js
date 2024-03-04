const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfAddAnnotationWatermark() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'pdfAddAnnotationWatermark')

  // Create an instance of PdfLoadOptions
  const loadOptions = new groupdocsWatermark.PdfLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Create an instance of PdfAnnotationWatermarkOptions
  const options = new groupdocsWatermark.PdfAnnotationWatermarkOptions();

  // Add text watermark
  const textWatermark = new groupdocsWatermark.TextWatermark('This is an annotation watermark', new groupdocsWatermark.Font('Arial', 8));
  textWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Left);
  textWatermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Top);
  watermarker.add(textWatermark, options);

  // Add image watermark
  const imageWatermark = new groupdocsWatermark.ImageWatermark(Constants.ProtectJpg);
  imageWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Right);
  imageWatermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Top);
  watermarker.add(imageWatermark, options);

  // Save changes
  watermarker.save(outputFilePath);

  // Close imageWatermark
  imageWatermark.close();

  // Close watermarker
  watermarker.close();
}

module.exports = pdfAddAnnotationWatermark