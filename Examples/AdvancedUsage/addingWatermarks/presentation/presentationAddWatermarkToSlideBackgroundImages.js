const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function presentationAddWatermarkToSlideBackgroundImages() {
  const documentPath = Constants.InPresentationPptx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'presentationAddWatermarkToSlideBackgroundImages')

  // Create an instance of PresentationLoadOptions
  const loadOptions = new groupdocsWatermark.PresentationLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Initialize image or text watermark
  const watermark = new groupdocsWatermark.TextWatermark('Protected image', new groupdocsWatermark.Font('Arial', 8));
  watermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  watermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
  watermark.setRotateAngle(45);
  watermark.setSizingType(groupdocsWatermark.SizingType.ScaleToParentDimensions);
  watermark.setScaleFactor(1);

  // Get PresentationContent
  const content = watermarker.getContent(groupdocsWatermark.PresentationContent.class);

  for (const slide of content.getSlides().getInnerList().toArray()) {
      if (slide.getImageFillFormat().getBackgroundImage() !== null) {
          // Add watermark to the image
          slide.getImageFillFormat().getBackgroundImage().add(watermark);
      }
  }

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = presentationAddWatermarkToSlideBackgroundImages