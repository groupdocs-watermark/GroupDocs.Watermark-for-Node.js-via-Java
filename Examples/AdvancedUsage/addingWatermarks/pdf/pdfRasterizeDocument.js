const Constants = require('../../../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function pdfRasterizeDocument() {
    const documentPath = Constants.InDocumentPdf;
    const outputFilePath = Constants.createOutputFilePath(documentPath, 'pdfRasterizeDocument')

    // Create an instance of PdfLoadOptions
    const loadOptions = new groupdocsWatermark.PdfLoadOptions();

    // Create an instance of Watermarker
    const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);

    // Initialize image or text watermark
    const watermark = new groupdocsWatermark.TextWatermark('Do not copy', new groupdocsWatermark.Font('Arial', 8));
    watermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
    watermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
    watermark.setRotateAngle(45);
    watermark.setSizingType(groupdocsWatermark.SizingType.ScaleToParentDimensions);
    watermark.setScaleFactor(1);
    watermark.setOpacity(0.5);

    // Add watermark of any type first
    watermarker.add(watermark);

    // Get PdfContent
    const pdfContent = watermarker.getContent(groupdocsWatermark.PdfContent.class);

    // Rasterize all pages
    pdfContent.rasterize(100, 100, groupdocsWatermark.PdfImageConversionFormat.Png);

    // Content of all pages is replaced with raster images
    watermarker.save(outputFilePath);

    // Close watermarker
    watermarker.close();
}

module.exports = pdfRasterizeDocument