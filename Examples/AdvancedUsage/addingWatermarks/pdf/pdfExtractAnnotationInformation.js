const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfExtractAnnotationInformation() {
  // Create an instance of PdfLoadOptions
  const loadOptions = new groupdocsWatermark.PdfLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InDocumentPdf, loadOptions);

  // Get PdfContent
  const pdfContent = watermarker.getContent(groupdocsWatermark.PdfContent.class);

  for (const page of pdfContent.getPages().getInnerList().toArray()) {
      for (const annotation of page.getAnnotations().getInnerList().toArray()) {
          console.log(annotation.getAnnotationType());
          
          if (annotation.getImage() !== null) {
              console.log(annotation.getImage().getWidth());
              console.log(annotation.getImage().getHeight());
              console.log(annotation.getImage().getBytes().length);
          }

          console.log(annotation.getText());
          console.log(annotation.getX());
          console.log(annotation.getY());
          console.log(annotation.getWidth());
          console.log(annotation.getHeight());
          console.log(annotation.getRotateAngle());
      }
  }

  // Close watermarker
  watermarker.close();
}


module.exports = pdfExtractAnnotationInformation