const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function diagramReplaceTextForParticularShapes() {
  const documentPath = Constants.InDiagramVsdx;
  const outputFilePath = Constants.createOutputFilePath(documentPath, 'diagramReplaceTextForParticularShapes')

  // Create an instance of DiagramLoadOptions
  const loadOptions = new groupdocsWatermark.DiagramLoadOptions();

  // Constants.InDiagramVsdx is an absolute or relative path to your document. Ex:
  // "C:\\Docs\\diagram.vsdx"
  const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

  // Get diagram content
  const content = watermarker.getContent(groupdocsWatermark.DiagramContent.class);

  // Iterate through shapes on the first page and replace text
  for (const shape of content.getPages().get_Item(0).getShapes().getInnerList().toArray()) {
      if (shape.getText() != null && shape.getText().includes('Aspose 2016')) {
          shape.setText('GroupDocs 2017');
      }
  }

  // Save changes
  watermarker.save(outputFilePath);

  // Close watermarker
  watermarker.close();
}

  module.exports = diagramReplaceTextForParticularShapes