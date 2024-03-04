const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function wordProcessingGetSectionProperties() {
  // Create an instance of WordProcessingLoadOptions
  const loadOptions = new groupdocsWatermark.WordProcessingLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InDocumentDocx, loadOptions);

  // Create an instance of WordProcessingContent
  const content = watermarker.getContent(groupdocsWatermark.WordProcessingContent.class);

  // Get and print page properties for the first section
  console.log(content.getSections().get_Item(0).getPageSetup().getWidth());
  console.log(content.getSections().get_Item(0).getPageSetup().getHeight());
  console.log(content.getSections().get_Item(0).getPageSetup().getTopMargin());
  console.log(content.getSections().get_Item(0).getPageSetup().getRightMargin());
  console.log(content.getSections().get_Item(0).getPageSetup().getBottomMargin());
  console.log(content.getSections().get_Item(0).getPageSetup().getLeftMargin());

  // Close watermarker
  watermarker.close();
}

module.exports = wordProcessingGetSectionProperties