const Constants = require('../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function searchWatermarkInParticularObjectsAllInstances() {
  const files = [
    Constants.InDocumentDocx,
    Constants.InSpreadsheetXlsx,
    Constants.InPresentationPptx,
    Constants.InDiagramVsdx,
    //Constants.InDocumentPdf,
  ];

  for (const file of files) {
    const documentPath = file;

    // Create watermarker with searchable objects settings
    const settings = new groupdocsWatermark.WatermarkerSettings();
    settings.setSearchableObjects(new groupdocsWatermark.SearchableObjects());
    settings.getSearchableObjects().setWordProcessingSearchableObjects(
      groupdocsWatermark.WordProcessingSearchableObjects.Hyperlinks | groupdocsWatermark.WordProcessingSearchableObjects.Text
    );
    settings.getSearchableObjects().setSpreadsheetSearchableObjects(
      groupdocsWatermark.SpreadsheetSearchableObjects.HeadersFooters
    );
    settings.getSearchableObjects().setPresentationSearchableObjects(
      groupdocsWatermark.PresentationSearchableObjects.SlidesBackgrounds |
        groupdocsWatermark.PresentationSearchableObjects.Shapes
    );
    settings.getSearchableObjects().setDiagramSearchableObjects(groupdocsWatermark.DiagramSearchableObjects.None);
    settings.getSearchableObjects().setPdfSearchableObjects(groupdocsWatermark.PdfSearchableObjects.All);

    const watermarker = new groupdocsWatermark.Watermarker(documentPath, settings);

    // Search for possible watermarks
    const watermarks = watermarker.search();

    // The code for working with found watermarks goes here.
    console.log(`In ${documentPath} found ${watermarks.getCount()} possible watermark(s).`);

    // Close the watermarker
    watermarker.close();
  }
}

module.exports = searchWatermarkInParticularObjectsAllInstances