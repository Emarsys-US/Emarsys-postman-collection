# Emarsys API Postman collections
This repo provides updates to the Emarsys Postman collections for:
- Contact / Email management and sales data uploads (suite)
- Loyalty
- SMS

The original collections for each can be found here:
- [Suite][https://raw.githubusercontent.com/emartech/developer-hub-public-assets/master/resources/EmarsysV2PostmanCollection.json]
- [Loyalty V3][https://raw.githubusercontent.com/EmarsysDocumentationGists/developer-hub-public-assets/master/resources/Loyalty%20Contact%20API%20v0.3.1.postman_collection%20(1).json]
- [SMS][https://raw.githubusercontent.com/EmarsysDocumentationGists/developer-hub-public-assets/master/resources/SMS%20Postman.postman_collection.json]
- [Loyallty v2 -deprecated-][https://raw.githubusercontent.com/EmarsysDocumentationGists/developer-hub-public-assets/master/resources/LoyaltyPostmanCollection.json]

## How to install
1. These collections are meant to be used with the program Postman, which can be downloaded here: https://www.postman.com/downloads/
1. Download this repository by clicking on the Green "Code" button, then "Download Zip"
1. Double-click on the .zip file to extract those files
1. With Postman installed and the collections downloaded, follow (this guide to import the collections into Postman)[https://learning.postman.com/docs/getting-started/importing-and-exporting-data/]

## Configuration

This version of the Postman collections use Postman Environment Variables to manage the credentials for the account(s) you work with.

[This guide goes over how to create those environments][https://learning.postman.com/docs/sending-requests/managing-environments/#creating-environments]

The required variables in your environment will depend on which APIs you use:

### Suite APIs/ SMS APIs:
- wsse-user
- wsse-secret
  - These are provided when creating an API user in Emarsys
  - Please make sure your API user has the Permissions selected that are required for the API call you're testing
  - Note that the value that appears in the APIs is "wsse-header" - this is derived from the other two variables above

### Sales uploads (part of the Suite APIs):
- sales-bearer-token
- sales-merchant-id
  - Each found in the Predict Data Sources section of your Emarsys account

### Loyalty (V2 and V3):
- loyalty-api-key
