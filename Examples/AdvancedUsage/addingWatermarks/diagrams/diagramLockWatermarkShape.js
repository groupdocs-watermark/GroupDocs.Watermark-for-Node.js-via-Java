const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function diagramLockWatermarkShape() {
  const documentPath = Constants.InDiagramVsdx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'diagramLockWatermarkShape')
  
  const loadOptions = new groupdocsWatermark.DiagramLoadOptions();
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  const watermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 19));

  const options = new groupdocsWatermark.DiagramShapeWatermarkOptions();
  options.setLocked(true);

  // Editing of the shape in Visio is forbidden
  watermarker.add(watermark, options);

  watermarker.save(outputFilePath);
  watermarker.close();

  console.log('Watermark shape locked successfully.');
}

  module.exports = diagramLockWatermarkShape