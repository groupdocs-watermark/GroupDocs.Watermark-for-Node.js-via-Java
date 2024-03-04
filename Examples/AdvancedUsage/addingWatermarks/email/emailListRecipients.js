const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function emailListRecipients() {
  // Create an instance of EmailLoadOptions
  const loadOptions = new groupdocsWatermark.EmailLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(Constants.InMessageMsg, loadOptions);

  // Get email content
  const content = watermarker.getContent(groupdocsWatermark.EmailContent.class);

  // List all direct recipients
  console.log('To:');
  for (const address of content.getTo().getInnerList().toArray()) {
      console.log(address.getAddress());
  }

  // List all CC recipients
  console.log('\nCC:');
  for (const address of content.getCc().getInnerList().toArray()) {
      console.log(address.getAddress());
  }

  // List all BCC recipients
  console.log('\nBCC:');
  for (const address of content.getBcc().getInnerList().toArray()) {
      console.log(address.getAddress());
  }

  // Close watermarker
  watermarker.close();
}

module.exports = emailListRecipients