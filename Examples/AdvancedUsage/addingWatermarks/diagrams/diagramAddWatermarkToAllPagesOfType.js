const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function diagramAddWatermarkToAllPagesOfType() {
  const documentPath = Constants.InDiagramVsdx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'diagramAddWatermarkToAllPagesOfType')

  const loadOptions = new groupdocsWatermark.DiagramLoadOptions();
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Initialize text watermark
  const textWatermark = new groupdocsWatermark.TextWatermark('Test watermark 1', new groupdocsWatermark.Font('Calibri', 19));

  const textWatermarkOptions = new groupdocsWatermark.DiagramShapeWatermarkOptions();
  textWatermarkOptions.setPlacementType(groupdocsWatermark.DiagramWatermarkPlacementType.BackgroundPages);

  // Add text watermark to all background pages
  watermarker.add(textWatermark, textWatermarkOptions);

  // Initialize image watermark
  const imageWatermark = new groupdocsWatermark.ImageWatermark(Constants.LogoJpg);

  const imageWatermarkOptions = new groupdocsWatermark.DiagramShapeWatermarkOptions();
  imageWatermarkOptions.setPlacementType(groupdocsWatermark.DiagramWatermarkPlacementType.ForegroundPages);

  // Add image watermark to all foreground pages
  watermarker.add(imageWatermark, imageWatermarkOptions);

  watermarker.save(outputFilePath);
  imageWatermark.close();
  watermarker.close();

  console.log('Watermarks added to diagram successfully.');
}
  module.exports = diagramAddWatermarkToAllPagesOfType