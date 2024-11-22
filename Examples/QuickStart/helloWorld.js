const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function helloWorld() {
    // The path to the documents directory.
    const documentPath = Constants.InDocumentPdf;
    const outputFilePath = Constants.createOutputFilePath(documentPath, 'helloWorld')
    
    const watermarker = new groupdocsWatermark.Watermarker(documentPath);
    const watermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 36, groupdocsWatermark.FontStyle.Bold | groupdocsWatermark.FontStyle.Italic));

    watermark.setHorizontalAlignment(groupdocsWatermark.HorizontalAlignment.Center);
    watermark.setVerticalAlignment(groupdocsWatermark.VerticalAlignment.Center);
    watermark.setRotateAngle(45);
    watermark.setOpacity(0.4);
    watermark.setForegroundColor(groupdocsWatermark.Color.getRed());

    const options = new groupdocsWatermark.PdfXObjectWatermarkOptions();
    watermarker.add(watermark, options);
  
    watermarker.save(outputFilePath);
    watermarker.close();
    console.log('Watermark added and document saved successfully.');
  }

  module.exports = helloWorld