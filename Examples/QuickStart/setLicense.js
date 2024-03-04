const Constants = require('../../constants')
const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

/**
 * This example demonstrates how to set license from file.
 */
function setLicense() {
  let licFile = Constants.LicensePath
  if (!licFile || !licFile.endsWith('.lic')) 
  {
    console.log('License is not found, continuing with demo version!')
    return
  }

  const lic = new groupdocsWatermark.License();
  lic.setLicense(Constants.LicensePath);
  console.log('License set successfully.')
}

module.exports = setLicense
