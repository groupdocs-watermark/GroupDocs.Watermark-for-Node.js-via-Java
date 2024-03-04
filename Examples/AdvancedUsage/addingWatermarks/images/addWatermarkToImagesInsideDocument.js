const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function addWatermarkToImagesInsideDocument() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'addWatermarkToImagesInsideDocument')

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);
  
  // Initialize text watermark
  const textWatermark = new groupdocsWatermark.TextWatermark('Protected image', new groupdocsWatermark.Font('Arial', 8));
  textWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  textWatermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
  textWatermark.setRotateAngle(45);
  textWatermark.setSizingType(groupdocsWatermark.SizingType.ScaleToParentDimensions);
  textWatermark.setScaleFactor(1);

  // Initialize image watermark
  const imageWatermark = new groupdocsWatermark.ImageWatermark(Constants.ProtectJpg);
  imageWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  imageWatermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
  imageWatermark.setRotateAngle(-45);
  imageWatermark.setSizingType(groupdocsWatermark.SizingType.ScaleToParentDimensions);
  imageWatermark.setScaleFactor(1);

  // Find all images in a document
  const images = watermarker.getImages();

  for (let i = 0; i < images.getCount(); i++) {
      if (images.get_Item(i).getWidth() > 100 && images.get_Item(i).getHeight() > 100) {
          if (i % 2 === 0) {
              images.get_Item(i).add(textWatermark);
          } else {
              images.get_Item(i).add(imageWatermark);
          }
      }
  }

  // Close imageWatermark
  imageWatermark.close();

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = addWatermarkToImagesInsideDocument