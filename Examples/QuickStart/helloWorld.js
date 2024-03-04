const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

function helloWorld() {
    // The path to the documents directory.
    const documentPath = Constants.SampleDocumentPdf;
    const outputFilePath = Constants.createOutputFilePath(documentPath, 'helloWorld')
    
    const loadOptions = new groupdocsWatermark.PdfLoadOptions();
    const watermarker = new groupdocsWatermark.Watermarker(documentPath, loadOptions);
    const watermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 36, groupdocsWatermark.FontStyle.Bold | groupdocsWatermark.FontStyle.Italic));
    const options = new groupdocsWatermark.PdfXObjectWatermarkOptions();
    options.setPageIndex(0);
  
    watermarker.add(watermark, options);
  
    watermarker.save(outputFilePath);
    watermarker.close();
    console.log('Watermark added and document saved successfully.');
  }

  module.exports = helloWorld