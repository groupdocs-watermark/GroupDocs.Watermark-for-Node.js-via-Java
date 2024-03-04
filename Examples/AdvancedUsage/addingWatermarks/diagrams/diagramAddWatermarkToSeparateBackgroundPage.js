const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function diagramAddWatermarkToSeparateBackgroundPage() {
  const documentPath = Constants.InDiagramVsdx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'diagramAddWatermarkToSeparateBackgroundPage')

  // Create an instance of DiagramLoadOptions
  const loadOptions = new groupdocsWatermark.DiagramLoadOptions();

  // Create an instance of Watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Initialize watermark of any supported type
  const textWatermark = new groupdocsWatermark.TextWatermark("Test watermark 1", new groupdocsWatermark.Font("Calibri", 19));

  const options = new groupdocsWatermark.DiagramShapeWatermarkOptions();
  options.setPlacementType(groupdocsWatermark.DiagramWatermarkPlacementType.SeparateBackgrounds);

  // Create a separate background for each page where it is not set. Add watermark to it.
  watermarker.add(textWatermark, options);

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

module.exports = diagramAddWatermarkToSeparateBackgroundPage