const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function diagramRemoveHyperlinks() {
  const documentPath = Constants.InDiagramVsdx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'diagramRemoveHyperlinks')

  const loadOptions = new groupdocsWatermark.DiagramLoadOptions();
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  const content = watermarker.getContent(groupdocsWatermark.DiagramContent.class);
  const shape = content.getPages().get_Item(0).getShapes().get_Item(0);

  for (let i = shape.getHyperlinks().getCount() - 1; i >= 0; i--) {
    if (shape.getHyperlinks().get_Item(i).getAddress().includes('http://someurl.com')) {
      shape.getHyperlinks().removeAt(i);
    }
  }

  watermarker.save(outputFilePath);
  watermarker.close();

  console.log('Hyperlinks removed successfully.');
}

  module.exports = diagramRemoveHyperlinks