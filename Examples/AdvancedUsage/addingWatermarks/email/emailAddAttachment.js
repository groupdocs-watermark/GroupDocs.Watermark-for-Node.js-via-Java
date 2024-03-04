const fs = require('fs');
const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')
const java = require('java')

function emailAddAttachment() {
  const documentPath = Constants.InMessageMsg;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'emailAddAttachment')

  // Create an instance of EmailLoadOptions
  const loadOptions = new groupdocsWatermark.EmailLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InMessageMsg, loadOptions);

  // Get email content
  const content = watermarker.getContent(groupdocsWatermark.EmailContent.class);

  // Read attachment file
  const attachmentBytes = fs.readFileSync(Constants.SampleMsg);
  const array = Array.from(attachmentBytes)
  const javaArray = java.newArray('byte', array)
  content.getAttachments().add(javaArray, 'sample.msg');

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}


module.exports = emailAddAttachment