const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function emailSearchTextInBody() {
  const documentPath = Constants.InMessageMsg;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'emailSearchTextInBody')

    // Create an instance of EmailLoadOptions
    const loadOptions = new groupdocsWatermark.EmailLoadOptions();

    // Create an instance of Watermarker
    const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

    // Create a TextSearchCriteria instance
    const criteria = new groupdocsWatermark.TextSearchCriteria('test', false);

    // Specify search locations
    watermarker.getSearchableObjects().setEmailSearchableObjects(
        groupdocsWatermark.EmailSearchableObjects.Subject |
        groupdocsWatermark.EmailSearchableObjects.HtmlBody |
        groupdocsWatermark.EmailSearchableObjects.PlainTextBody
    );

    // Note, search is performed only if you pass TextSearchCriteria instance to FindWatermarks method
    const watermarks = watermarker.search(criteria);

    // Remove found text fragments
    watermarks.clear();

    // Save changes
    watermarker.save(outputFilePath);

    // Close watermarker
    watermarker.close();
}
module.exports = emailSearchTextInBody