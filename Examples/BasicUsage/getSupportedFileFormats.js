const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function getSupportedFileFormats() {
  const supportedFileTypes = groupdocsWatermark.FileType.getSupportedFileTypes();
  supportedFileTypes.forEach(fileType => {
    console.log(fileType.toString());
  });
}

  module.exports = getSupportedFileFormats