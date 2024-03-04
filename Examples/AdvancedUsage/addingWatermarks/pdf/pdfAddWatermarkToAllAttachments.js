const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfAddWatermarkToAllAttachments() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'pdfAddAnnotationWatermark')

  const watermark = new groupdocsWatermark.TextWatermark('This is WaterMark on Attachment', new groupdocsWatermark.Font('Arial', 19));
  
  // Create an instance of PdfLoadOptions
  const loadOptions = new groupdocsWatermark.PdfLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Get PdfContent
  const pdfContent = watermarker.getContent(groupdocsWatermark.PdfContent.class);

  for (const attachment of pdfContent.getAttachments().getInnerList().toArray()) {
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


module.exports = pdfAddWatermarkToAllAttachments