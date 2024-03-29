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
  ![Graphic displaying the location of the "code" and "download ZIP" buttons on the current github page](./readme-images/github-download-steps.png)
3. Extract the files from the .zip folder
4. With Postman installed and the collections downloaded, click on the import button in the top-left:
  ![Postman import button](./readme-images//import-button.png)
1. Select The upload files option:
    ![Postman upload files option](./readme-images/upload-files-button.png)
1. Select each of the files from the downloaded package (The readme.md and readme-images folder are okay to select too, but aren't necessary)
    ![Postman file selector with all files from package highlighted](./readme-images/file-selector.png)
1. Finally, select the import button to confirm and the package will be fully installed!
  ![Postman interface displaying all the highlighted files, waiting for confirmation to import](./readme-images/final-import-button.png)
 




## Configuration

This version of the Postman collections use Postman Environment Variables to manage the credentials for the account(s) you work with.

![A sample of a fully-configured Postman Environment](./readme-images/sample-postman-environment.png)

[This guide goes over how to create those environments](https://learning.postman.com/docs/sending-requests/managing-environments/#creating-environments)

If you work with multiple Emarsys accounts, use a separate Postman Environment for each account.


The required variables for your environment will depend on which APIs you use:

### Suite APIs/ SMS APIs:
- wsse-user
- wsse-secret
  - These values are provided when creating an API user in Emarsys
  - Please make sure your API user has the correct Permissions selected in Emarsys to allow for the API call you're testing
  - Note that the value that gets used in the API calls themselves is "wsse-header" - that value is derived from the other two variables above

### Sales uploads (part of the Suite APIs):
- sales-bearer-token
- sales-merchant-id
  - Each found in the Predict Data Sources section of your Emarsys account

### Loyalty (V2 and V3):
- loyalty-api-key

## Troubleshooting

### Requests aren't being authenticated, wsse-header value in X-WSSE headers is marked as an "Unresolved Variable"
- This Postman collection will generate the wsse-header variable for you, but sometimes Postman doesn't see the variables in your environment at immediately. To fix this, simply save what you're doing and restart Postman
- If restarting doesn't solve the issue, double-check that the API call you're trying to make is from inside the provided environment. The environment itself contains the logic for authenticating requests and generating the X-WSSE header, so a request that is executed outside the context of this environment would have no authentication logic
