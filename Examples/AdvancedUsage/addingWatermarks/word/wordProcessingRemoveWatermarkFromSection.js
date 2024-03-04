const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function wordProcessingRemoveWatermarkFromSection() {
  const documentPath = Constants.InDocumentDocx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'wordProcessingRemoveWatermarkFromSection')

  const loadOptions = new groupdocsWatermark.WordProcessingLoadOptions();
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InDocumentDocx, loadOptions);

  // Initialize search criteria
  const imageSearchCriteria = new groupdocsWatermark.ImageDctHashSearchCriteria(Constants.LogoPng);
  const textSearchCriteria = new groupdocsWatermark.TextSearchCriteria("Company Name");

  // Call Search method for the section
  const content = watermarker.getContent(groupdocsWatermark.WordProcessingContent.class);
  const possibleWatermarks = content.getSections().get_Item(0).search(textSearchCriteria.or(imageSearchCriteria));

  // Remove all found watermarks
  for (let i = possibleWatermarks.getCount() - 1; i >= 0; i--) {
    possibleWatermarks.removeAt(i);
  }

  watermarker.save(outputFilePath);

  watermarker.close();
}

module.exports = wordProcessingRemoveWatermarkFromSection