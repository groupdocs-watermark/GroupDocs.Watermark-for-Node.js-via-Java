// const fs = require('fs')
// const Constants = require('../constants')
// const groupdocsWatermark = require('@groupdocs/groupdocs.watermark')

// function setLicenseFromStreamMy() {
//   const licenseFilePath = Constants.LicensePath;
//   // const licenseFileExists = fs.existsSync(licenseFilePath);

//   // if (licenseFileExists) {
//   //   const stream = fs.createReadStream(licenseFilePath);
//   //   groupdocsWatermark.License.setLicenseFromStream(new groupdocsWatermark.License(),
//   //     stream);

//   //   // const inputStreamBuffer = new groupdocsWatermark.StreamBuffer()

//   //   // const license = new groupdocsWatermark.License();
//   //   // license.setLicense(stream);
//   //   // stream.close();

//   //   console.log('License set successfully.');
//   // } else {
//   //   console.log('\nWe do not ship any license with this example. ' +
//   //               '\nVisit the GroupDocs site to obtain either a temporary or permanent license. ' +
//   //               '\nLearn more about licensing at https://purchase.groupdocs.com/faqs/licensing. ' +
//   //               '\nLearn how to request a temporary license at https://purchase.groupdocs.com/temporary-license.');
//   // }

//   try {
//   const licenseStream = fs.createReadStream(licenseFilePath)
//   const stream = groupdocsWatermark.readDataFromStream(licenseStream)   

//   const license = new groupdocsWatermark.License()
//   license.setLicense(stream);

//   console.log('License set successfully.');
//   } catch (err) {
//     console.log(err)
//     console.log("\nWe do not ship any license with this example. " +
//       "\nVisit the GroupDocs site to obtain either a temporary or permanent license. " +
//       "\nLearn more about licensing at https://purchase.groupdocs.com/faqs/licensing. " +
//       "\nLearn how to request a temporary license at https://purchase.groupdocs.com/temporary-license.");
//   }
// }

// module.exports = setLicenseFromStreamMy
