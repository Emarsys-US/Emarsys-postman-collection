# Emarsys API Postman collections
This repo provides updates to the Emarsys Postman collections for:
- Contact / Email management and sales data uploads (suite)
- Loyalty
- SMS

The original collections for each can be found here:
- [Suite](https://raw.githubusercontent.com/emartech/developer-hub-public-assets/master/resources/EmarsysV2PostmanCollection.json)
- [Loyalty V3](https://raw.githubusercontent.com/EmarsysDocumentationGists/developer-hub-public-assets/master/resources/Loyalty%20Contact%20API%20v0.3.1.postman_collection%20(1).json)
- [SMS](https://raw.githubusercontent.com/EmarsysDocumentationGists/developer-hub-public-assets/master/resources/SMS%20Postman.postman_collection.json)
- [Loyallty v2 -deprecated-](https://raw.githubusercontent.com/EmarsysDocumentationGists/developer-hub-public-assets/master/resources/LoyaltyPostmanCollection.json)

## How to install
1. First, make sure you have Postman installed. These collections are meant to be used with the program Postman, which can be downloaded here: https://www.postman.com/downloads/
1. Download this repository by clicking on the Green "Code" button at the top of this page, then "Download Zip":
  ![Graphic displaying the location of the "code" and "download ZIP" buttons on the current github page](https://storage.googleapis.com/emarsys-amer-public-resources/postman-collection-samples/github-download-steps.png)
3. Extract the files from the .zip folder
4. With Postman installed and the collections downloaded, click on the import button in the top-left:
  ![Postman import button](https://storage.googleapis.com/emarsys-amer-public-resources/postman-collection-samples/import-button.png)
1. Select The upload files option:
    ![Postman upload files option](https://storage.googleapis.com/emarsys-amer-public-resources/postman-collection-samples/upload-files-button.png)
1. Select each of the files from the package (The readme.md is okay to select too, but isn't necessary)
    ![Postman file selector with all files from package highlighted](https://storage.googleapis.com/emarsys-amer-public-resources/postman-collection-samples/file-selector.png)
1. Then select the import button to confirm, and the package will be fully installed!
  ![Postman interface displaying all the highlighted files, waiting for confirmation to import](https://storage.googleapis.com/emarsys-amer-public-resources/postman-collection-samples/fnal-import-button.png)
 




## Configuration

This version of the Postman collections use Postman Environment Variables to manage the credentials for the account(s) you work with.

![A sample of a fully-configured Postman Environment](https://storage.googleapis.com/emarsys-amer-public-resources/postman-collection-samples/sample-postman-environment.png)

[This guide goes over how to create those environments](https://learning.postman.com/docs/sending-requests/managing-environments/#creating-environments)


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

## Troubleshooting

### Requests aren't being authenticated, wsse-header value in X-WSSE headers is marked as an "Unresolved Variable"
This Postman collection will generate the wsse-header variable for you, but sometimes Postman doesn't like it initially. To fix this, simply save what you're doing and restart Postman
