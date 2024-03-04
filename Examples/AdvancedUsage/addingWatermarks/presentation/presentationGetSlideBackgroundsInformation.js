const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function presentationGetSlideBackgroundsInformation() {
  // Create an instance of PresentationLoadOptions
  const loadOptions = new groupdocsWatermark.PresentationLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InPresentationPptx, loadOptions);

  // Get PresentationContent
  const content = watermarker.getContent(groupdocsWatermark.PresentationContent.class);

  for (const slide of content.getSlides().getInnerList().toArray()) {
      if (slide.getImageFillFormat().getBackgroundImage() !== null) {
          // Extract information about slide backgrounds
          console.log(slide.getImageFillFormat().getBackgroundImage().getWidth());
          console.log(slide.getImageFillFormat().getBackgroundImage().getHeight());
          console.log(slide.getImageFillFormat().getBackgroundImage().getBytes().length);
      }
  }

  // Close watermarker
  watermarker.close();
}

module.exports = presentationGetSlideBackgroundsInformation