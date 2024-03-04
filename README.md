**GroupDocs.Watermark for Node.js via Java**  offers read & write watermark support for the documents of 40+ file formats. Supports watermark search, customization & extraction as well.

## Node.js Watermark API Features 
- Add text and image watermark to supported document formats.
- Search and remove text and image watermarks.
- Search watermarks in particular objects.
- Apply a watermark to images inside a document.
- Work with existing watermark objects.
- Extract information of watermark objects in a document.
- Perform PDF document rasterization.
- Fetch document basic information.
- Search watermarks by text formatting (font, color, etc.).
- Set background image for charts in Excel and PowerPoint documents.
- Work with PDF and email attachments.  

## Supported File Formats
**Microsoft Word:** DOC, DOT, DOCX, DOCM, DOTX, DOTM, RTF
**Microsoft Excel:** XLSX, XLSM, XLTM, XLT, XLTX, XLS
**Microsoft PowerPoint:** PPTX, PPTM, PPSX, PPSM, POTX, POTM, PPT, PPS
**Microsoft Visio:** VSD, VDX, VSDX, VSTX, VSS, VSSX, VSDM, VSSM, VSTM, VTX, VSX
**OpenOffice:** ODT
**Email:** EML, EMLX, OFT, MSG
**Fixed Layout:** PDF
**Image:** BMP, GIF, JPG/JPEG/JPE, JP2, PNG, TIFF, WEBP

## Supported Watermark Types
- Text stamps
- Text labels
- Text as an image watermark
- Image watermark

## Getting Started with GroupDocs.Watermark for Node.js via Java
### Installation

From the command line:

	npm i @groupdocs/groupdocs.watermark

### Adding text watermak to the PDF document using Node.js

```js
  const loadOptions = new groupdocsWatermark.PdfLoadOptions();
  const watermarker = new groupdocsWatermark.Watermarker(pdfDocumentPath, loadOptions);

  const watermark = new groupdocsWatermark.TextWatermark('Test watermark', new groupdocsWatermark.Font('Arial', 36, groupdocsWatermark.FontStyle.Bold | groupdocsWatermark.FontStyle.Italic));
  const options = new groupdocsWatermark.PdfXObjectWatermarkOptions();
  options.setPageIndex(0);

  watermarker.add(watermark, options);

  watermarker.save(outputFilePath);
```

### Search for watermarks in the document using Node.js

```js
// Create watermarker
  const watermarker = new groupdocsWatermark.Watermarker(documentPath);

  // Search by exact string
  const textSearchCriteria = new groupdocsWatermark.TextSearchCriteria("2017");

  // Find all possible watermarks containing some specific text
  const possibleWatermarks = watermarker.search(textSearchCriteria);

  // Output the results
  console.log(`Found ${possibleWatermarks.getCount()} possible watermark(s)`);

```

[Home](https://www.groupdocs.com/) | [Product Page](https://products.groupdocs.com/watermark/nodejs-java) | [Documentation](https://docs.groupdocs.com/watermark/nodejs-java/) | [Blog](https://blog.groupdocs.com/category/watermark/) | [API Reference](https://apireference.groupdocs.com/watermark/nodejs-java) | [Code Samples](https://github.com/groupdocs-watermark/GroupDocs.watermark-for-Node.js-via-Java) | [Free Support](forum.groupdocs.com/c/watermark) | [Temporary License](https://purchase.groupdocs.com/temporary-license)
