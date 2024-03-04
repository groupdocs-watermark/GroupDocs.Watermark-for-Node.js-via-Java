const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfExtractArtifactInformation() {
    // Create an instance of PdfLoadOptions
    const loadOptions = new groupdocsWatermark.PdfLoadOptions();

    // Create an instance of Watermarker
    const watermarker = new groupdocsWatermark.Watermarker(Constants.InDocumentPdf, loadOptions);

    // Get PdfContent
    const pdfContent = watermarker.getContent(groupdocsWatermark.PdfContent.class);

    for (const page of pdfContent.getPages().getInnerList().toArray()) {
        for (const artifact of page.getArtifacts().getInnerList().toArray()) {
            console.log(artifact.getArtifactType());
            console.log(artifact.getArtifactSubtype());
            
            if (artifact.getImage() !== null) {
                console.log(artifact.getImage().getWidth());
                console.log(artifact.getImage().getHeight());
                console.log(artifact.getImage().getBytes().length);
            }

            console.log(artifact.getText());
            console.log(artifact.getOpacity());
            console.log(artifact.getX());
            console.log(artifact.getY());
            console.log(artifact.getWidth());
            console.log(artifact.getHeight());
            console.log(artifact.getRotateAngle());
        }
    }

    // Close watermarker
    watermarker.close();
}


module.exports = pdfExtractArtifactInformation