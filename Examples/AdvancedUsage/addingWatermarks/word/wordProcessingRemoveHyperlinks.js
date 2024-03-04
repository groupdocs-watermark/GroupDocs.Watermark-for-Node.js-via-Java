const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function wordProcessingRemoveHyperlinks() {
  // Specify the input document and output paths
  const documentPath = Constants.InDocumentDocx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'wordProcessingAddWatermarkWithShapeSettings')

  // Create an instance of WordProcessingLoadOptions
  const loadOptions = new groupdocsWatermark.WordProcessingLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Create an instance of WordProcessingContent
  const content = watermarker.getContent(groupdocsWatermark.WordProcessingContent.class);

  // Replace hyperlink for the first shape
  content.getSections().get_Item(0).getShapes().get_Item(0).setHyperlink("https://www.groupdocs.com/");

  // Remove hyperlink for the second shape
  content.getSections().get_Item(0).getShapes().get_Item(1).setHyperlink(null);

  // Save changes to the output document
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}
module.exports = wordProcessingRemoveHyperlinks