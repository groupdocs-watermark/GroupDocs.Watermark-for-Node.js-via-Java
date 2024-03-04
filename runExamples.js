// Basic Methods
const setLicense = require('./Examples/QuickStart/setLicense')
const helloWorld = require('./Examples/QuickStart/helloWorld')

 const addAnImageWatermark = require('./Examples/BasicUsage/addAnImageWatermark')
 const addATextWatermark = require('./Examples/BasicUsage/addATextWatermark')
 const getDocumentInfoForLocalFile = require('./Examples/BasicUsage/getDocumentInfoForLocalFile')
 const getSupportedFileFormats = require('./Examples/BasicUsage/getSupportedFileFormats')

 const diagramAddWatermarkToAllPagesOfType = require('./Examples/AdvancedUsage/addingWatermarks/diagrams/diagramAddWatermarkToAllPagesOfType')
 const diagramLockWatermarkShape = require('./Examples/AdvancedUsage/addingWatermarks/diagrams/diagramLockWatermarkShape')
 const diagramRemoveHyperlinks = require('./Examples/AdvancedUsage/addingWatermarks/diagrams/diagramRemoveHyperlinks')
 const diagramAddWatermarkToSeparateBackgroundPage = require('./Examples/AdvancedUsage/addingWatermarks/diagrams/diagramAddWatermarkToSeparateBackgroundPage')
 const diagramReplaceTextForParticularShapes = require('./Examples/AdvancedUsage/addingWatermarks/diagrams/diagramReplaceTextForParticularShapes') 

 const emailAddAttachment = require('./Examples/AdvancedUsage/addingWatermarks/email/emailAddAttachment')
 const emailAddWatermarkToAllAttachments = require('./Examples/AdvancedUsage/addingWatermarks/email/emailAddWatermarkToAllAttachments')
 const emailListRecipients = require('./Examples/AdvancedUsage/addingWatermarks/email/emailListRecipients')
 const emailSearchTextInBody = require('./Examples/AdvancedUsage/addingWatermarks/email/emailSearchTextInBody')

 const addWatermarkToImage = require('./Examples/AdvancedUsage/addingWatermarks/images/addWatermarkToImage')
 const addWatermarkToImagesInsideDocument = require('./Examples/AdvancedUsage/addingWatermarks/images/addWatermarkToImagesInsideDocument')

const pdfAddAnnotationWatermark = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfAddAnnotationWatermark')
const pdfAddArtifactWatermark = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfAddArtifactWatermark')
const pdfAddWatermarkToAllAttachments = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfAddWatermarkToAllAttachments')
const pdfExtractAnnotationInformation = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfExtractAnnotationInformation');
const pdfExtractArtifactInformation = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfExtractArtifactInformation');
const pdfRasterizeDocument = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfRasterizeDocument');
const pdfRemoveAnnotationsWithParticularTextFormatting = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfRemoveAnnotationsWithParticularTextFormatting');
const pdfRemoveWatermark = require('./Examples/AdvancedUsage/addingWatermarks/pdf/pdfRemoveWatermark');

const presentationAddWatermarkToSlide = require('./Examples/AdvancedUsage/addingWatermarks/presentation/presentationAddWatermarkToSlide');
const presentationAddWatermarkToSlideBackgroundImages = require('./Examples/AdvancedUsage/addingWatermarks/presentation/presentationAddWatermarkToSlideBackgroundImages');
const presentationGetSlideBackgroundsInformation = require('./Examples/AdvancedUsage/addingWatermarks/presentation/presentationGetSlideBackgroundsInformation');

const spreadsheetAddImageWatermarkIntoHeaderFooter = require('./Examples/AdvancedUsage/addingWatermarks/spreadsheet/spreadsheetAddImageWatermarkIntoHeaderFooter');
const spreadsheetAddModernWordArtWatermark = require('./Examples/AdvancedUsage/addingWatermarks/spreadsheet/spreadsheetAddModernWordArtWatermark');
const spreadsheetAddTextWatermarkAsBackground = require('./Examples/AdvancedUsage/addingWatermarks/spreadsheet/spreadsheetAddTextWatermarkAsBackground');
const spreadsheetClearHeaderFooter = require('./Examples/AdvancedUsage/addingWatermarks/spreadsheet/spreadsheetClearHeaderFooter');

const wordProcessingAddLockedWatermarkToAllPages = require('./Examples/AdvancedUsage/addingWatermarks/word/wordProcessingAddLockedWatermarkToAllPages');
const wordProcessingAddWatermarkWithShapeSettings = require('./Examples/AdvancedUsage/addingWatermarks/word/wordProcessingAddWatermarkWithShapeSettings');
const wordProcessingGetSectionProperties = require('./Examples/AdvancedUsage/addingWatermarks/word/wordProcessingGetSectionProperties');
const wordProcessingRemoveHyperlinks = require('./Examples/AdvancedUsage/addingWatermarks/word/wordProcessingRemoveHyperlinks');
const wordProcessingRemoveWatermarkFromSection = require('./Examples/AdvancedUsage/addingWatermarks/word/wordProcessingRemoveWatermarkFromSection');

const loadFromLocalDisk = require('./Examples/AdvancedUsage/loading/loadFromLocalDisk');
const loadFromStream = require('./Examples/AdvancedUsage/loading/loadFromStream');
const loadingDocumentOfSpecificFormat = require('./Examples/AdvancedUsage/loading/loadingDocumentOfSpecificFormat');
const loadPasswordProtectedDocument = require('./Examples/AdvancedUsage/loading/loadPasswordProtectedDocument');

const modifyTextInFoundWatermarks = require('./Examples/AdvancedUsage/searchingAndModifying/modifyTextInFoundWatermarks');
const modifyTextWithFormattingInFoundWatermarks = require('./Examples/AdvancedUsage/searchingAndModifying/modifyTextWithFormattingInFoundWatermarks');
const removeHyperlinksWithParticularUrl = require('./Examples/AdvancedUsage/searchingAndModifying/removeHyperlinksWithParticularUrl');
const removeWatermarkWithParticularTextFormatting = require('./Examples/AdvancedUsage/searchingAndModifying/removeWatermarkWithParticularTextFormatting');
const searchImageWatermark = require('./Examples/AdvancedUsage/searchingAndModifying/searchImageWatermark');
const searchWatermarkInParticularObjectsAllInstances = require('./Examples/AdvancedUsage/searchingAndModifying/searchWatermarkInParticularObjectsAllInstances');
const searchWatermarkWithCombinedSearch = require('./Examples/AdvancedUsage/searchingAndModifying/searchWatermarkWithCombinedSearch');
const searchWatermarkWithParticularTextFormatting = require('./Examples/AdvancedUsage/searchingAndModifying/searchWatermarkWithParticularTextFormatting');
const searchWatermarkWithSearchString = require('./Examples/AdvancedUsage/searchingAndModifying/searchWatermarkWithSearchString');

;(async () => {
  try {
    console.log('Start Watermark. \nIn Main() method uncomment the example that you want to run.')
    //await setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      /* NOTE: Please uncomment the example you want to try out */
      setLicense(),
      /* Basic usage */
      helloWorld(),
      // addATextWatermark(),
      // addAnImageWatermark(),
      // getDocumentInfoForLocalFile(),
      // getSupportedFileFormats(),

      // /* Advance usage */
      // diagramAddWatermarkToAllPagesOfType(),
      // diagramLockWatermarkShape(),
      // diagramRemoveHyperlinks(),
      // diagramAddWatermarkToSeparateBackgroundPage(),
      // diagramReplaceTextForParticularShapes(),

      // emailAddAttachment(),
      // emailAddWatermarkToAllAttachments(),
      // emailListRecipients(),
      // emailSearchTextInBody(),

      // addWatermarkToImage(),
      // addWatermarkToImagesInsideDocument(),

      // pdfAddAnnotationWatermark(),
      // pdfAddArtifactWatermark(),
      // pdfAddWatermarkToAllAttachments(),
      // pdfExtractAnnotationInformation(),
      // pdfExtractArtifactInformation(),
      // pdfRasterizeDocument(),
      // pdfRemoveAnnotationsWithParticularTextFormatting(),
      // pdfRemoveWatermark(),

      // presentationAddWatermarkToSlide(),
      // presentationAddWatermarkToSlideBackgroundImages(),
      // presentationGetSlideBackgroundsInformation(),

      // spreadsheetAddImageWatermarkIntoHeaderFooter(),
      // spreadsheetAddModernWordArtWatermark(),
      // spreadsheetAddTextWatermarkAsBackground(),
      // spreadsheetClearHeaderFooter(),

      // wordProcessingAddLockedWatermarkToAllPages(),
      // wordProcessingAddWatermarkWithShapeSettings(),
      // wordProcessingGetSectionProperties(),
      // wordProcessingRemoveHyperlinks(),
      // wordProcessingRemoveWatermarkFromSection(),

      // loadFromLocalDisk(),
      // //loadFromStream(), //not working
      // loadingDocumentOfSpecificFormat(),
      // loadPasswordProtectedDocument(),

      // modifyTextInFoundWatermarks(),
      // modifyTextWithFormattingInFoundWatermarks(),
      // removeHyperlinksWithParticularUrl(),
      // removeWatermarkWithParticularTextFormatting(),
      // searchImageWatermark(),
      // searchWatermarkInParticularObjectsAllInstances(),
      // searchWatermarkWithCombinedSearch(),
      // searchWatermarkWithParticularTextFormatting(),
      // searchWatermarkWithSearchString()      

    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()