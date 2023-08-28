# .ApiKeyApi

All URIs are relative to *https://api.timetime.in*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiKey**](ApiKeyApi.md#createApiKey) | **POST** /v1/api-keys | 
[**listUserApiKeys**](ApiKeyApi.md#listUserApiKeys) | **GET** /v1/api-keys | 


# **createApiKey**
> CreateApiKeyResponseModel createApiKey(createApiKeyBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiKeyApi(configuration);

let body:.ApiKeyApiCreateApiKeyRequest = {
  // CreateApiKeyBody
  createApiKeyBody: {
    name: "name_example",
  },
};

apiInstance.createApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createApiKeyBody** | **CreateApiKeyBody**|  |


### Return type

**CreateApiKeyResponseModel**

### Authorization

[HttpAuth](README.md#HttpAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUserApiKeys**
> ApiKeysListModel listUserApiKeys()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiKeyApi(configuration);

let body:any = {};

apiInstance.listUserApiKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiKeysListModel**

### Authorization

[HttpAuth](README.md#HttpAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


