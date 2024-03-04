const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function emailAddWatermarkToAllAttachments() {
  const documentPath = Constants.InMessageMsg;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'emailAddWatermarkToAllAttachments')

  const watermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 19));
  
  // Create an instance of EmailLoadOptions
  const loadOptions = new groupdocsWatermark.EmailLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Get email content
  const content = watermarker.getContent(groupdocsWatermark.EmailContent.class);

  for (const attachment of content.getAttachments().getInnerList().toArray()) {
      // Check if the attached file is supported by GroupDocs.Watermark
      const info = attachment.getDocumentInfo();
      if (info.getFileType() !== groupdocsWatermark.FileType.Unknown && !info.isEncrypted()) {
          // Load the attached document
          const attachedWatermarker = attachment.createWatermarker();

          // Add watermark
          attachedWatermarker.add(watermark);

          // Save changes in the attached file
           attachment.updateContent(attachedWatermarker);

          // Close attachedWatermarker
          attachedWatermarker.close();
      }
  }

  // Save changes
   watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}


module.exports = emailAddWatermarkToAllAttachments