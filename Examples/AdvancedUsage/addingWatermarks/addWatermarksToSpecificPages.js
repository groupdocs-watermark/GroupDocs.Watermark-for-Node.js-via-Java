const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function addWatermarksToSpecificPages() {
  const documentPath = Constants.InDocumentPdf;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'addWatermarksToSpecificPages')

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Add text watermark
  const textWatermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 8));
  textWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
  textWatermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);

  // Configuring pages
  var pagesSetup = new groupdocsWatermark.PagesSetup();
  pagesSetup.setFirstPage(true);

  textWatermark.setPagesSetup(pagesSetup);
  watermarker.add(textWatermark);

  // Add image watermark
  const imageWatermark = new groupdocsWatermark.ImageWatermark(Constants.ProtectJpg);
  imageWatermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Right);
  imageWatermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Top);

  // Configuring pages
  pagesSetup = new groupdocsWatermark.PagesSetup();
  pagesSetup.setOddPages(false);

  imageWatermark.setPagesSetup(pagesSetup);
  watermarker.add(imageWatermark);

  // Save changes
  watermarker.save(outputFilePath);

  // Close imageWatermark
  imageWatermark.close();

  // Close watermarker
  watermarker.close();
}

module.exports = addWatermarksToSpecificPages