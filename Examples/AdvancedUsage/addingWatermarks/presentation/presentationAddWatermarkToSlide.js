const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function presentationAddWatermarkToSlide() {
  const documentPath = Constants.InPresentationPptx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'presentationAddWatermarkToSlide')

  // Create an instance of PresentationLoadOptions
  const loadOptions = new groupdocsWatermark.PresentationLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InPresentationPptx, loadOptions);

  // Add text watermark to the first slide
  const textWatermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 8));
  const textWatermarkOptions = new groupdocsWatermark.PresentationWatermarkSlideOptions();
  textWatermarkOptions.setSlideIndex(0);
  watermarker.add(textWatermark, textWatermarkOptions);

  // Add image watermark to the second slide
  const imageWatermark = new groupdocsWatermark.ImageWatermark(Constants.LogoJpg);
  const imageWatermarkOptions = new groupdocsWatermark.PresentationWatermarkSlideOptions();
  imageWatermarkOptions.setSlideIndex(1);
  watermarker.add(imageWatermark, imageWatermarkOptions);

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker and imageWatermark
  watermarker.close();
  imageWatermark.close();
}

module.exports = presentationAddWatermarkToSlide