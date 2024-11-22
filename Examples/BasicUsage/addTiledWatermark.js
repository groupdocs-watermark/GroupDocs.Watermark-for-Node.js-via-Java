const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function addTiledWatermark() {
  const documentPath = Constants.InDocumentPdf; // NOTE: Put the actual path for your document
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'addTiledWatermark')

  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  const watermark = new groupdocsWatermark.TextWatermark('top secret', new groupdocsWatermark.Font('Arial', 36));
  watermark.setRotateAngle(45);
  watermark.setOpacity(0.4);
  watermark.setForegroundColor(groupdocsWatermark.Color.getRed());

  // Configure tile options
  watermark.setTileOptions(new groupdocsWatermark.TileOptions());
  watermark.getTileOptions().setTileType(groupdocsWatermark.TileType.Straight)
  watermark.getTileOptions().setRotateAroundCenter(false);
  
  //Setting lineSpacing with methods
  var lineSpacing = new groupdocsWatermark.MeasureValue();
  lineSpacing.setMeasureType(groupdocsWatermark.TileMeasureType.Percent);
  lineSpacing.setValue(22);
  watermark.getTileOptions().setLineSpacing(lineSpacing);

  // Setting watermarkSpacing with methods
  var watermarkSpacing= new groupdocsWatermark.MeasureValue();
  watermarkSpacing.setMeasureType(groupdocsWatermark.TileMeasureType.Percent);
  watermarkSpacing.setValue(10);
  watermark.getTileOptions().setWatermarkSpacing(watermarkSpacing);

  watermarker.add(watermark);
  watermarker.save(outputFilePath);
  watermarker.close();
}

  module.exports = addTiledWatermark