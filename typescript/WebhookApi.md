# .WebhookApi

All URIs are relative to *https://api.timetime.in*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiveWebhook**](WebhookApi.md#receiveWebhook) | **POST** /v1/external-webhook-receiver-example | 


# **receiveWebhook**
> any receiveWebhook(webhookBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiReceiveWebhookRequest = {
  // WebhookBody
  webhookBody: {
    name: "name_example",
    version: "version_example",
    body: {},
  },
};

apiInstance.receiveWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookBody** | **WebhookBody**|  |


### Return type

**any**

### Authorization

[HttpAuth](README.md#HttpAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The webhook was processed successfully. |  -  |
**202** | The webhook processing job was scheduled successfully. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


