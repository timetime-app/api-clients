# .ResourcesApi

All URIs are relative to *https://api.timetime.in*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteResource**](ResourcesApi.md#deleteResource) | **DELETE** /v1/resources/{id} | 
[**deleteResourceGroup**](ResourcesApi.md#deleteResourceGroup) | **DELETE** /v1/resource-groups/{id} | 
[**getResource**](ResourcesApi.md#getResource) | **GET** /v1/resources/{id} | 
[**getResourceGroup**](ResourcesApi.md#getResourceGroup) | **GET** /v1/resource-groups/{id} | 
[**listResourceGroups**](ResourcesApi.md#listResourceGroups) | **GET** /v1/resource-groups | 
[**listResources**](ResourcesApi.md#listResources) | **GET** /v1/resources | 
[**putResource**](ResourcesApi.md#putResource) | **PUT** /v1/resources/{id} | 
[**putResourceGroup**](ResourcesApi.md#putResourceGroup) | **PUT** /v1/resource-groups/{id} | 


# **deleteResource**
> any deleteResource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:.ResourcesApiDeleteResourceRequest = {
  // string
  id: "id_example",
};

apiInstance.deleteResource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[HttpAuth](README.md#HttpAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteResourceGroup**
> any deleteResourceGroup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:.ResourcesApiDeleteResourceGroupRequest = {
  // string
  id: "id_example",
};

apiInstance.deleteResourceGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[HttpAuth](README.md#HttpAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResource**
> Resource getResource()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:.ResourcesApiGetResourceRequest = {
  // string
  id: "id_example",
};

apiInstance.getResource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**Resource**

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

# **getResourceGroup**
> ResourceGroupModel getResourceGroup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:.ResourcesApiGetResourceGroupRequest = {
  // string
  id: "id_example",
};

apiInstance.getResourceGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**ResourceGroupModel**

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

# **listResourceGroups**
> ResourceGroupsListModel listResourceGroups()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:any = {};

apiInstance.listResourceGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ResourceGroupsListModel**

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

# **listResources**
> ResourcesList listResources()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:any = {};

apiInstance.listResources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ResourcesList**

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

# **putResource**
> any putResource(putResource)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:.ResourcesApiPutResourceRequest = {
  // string
  id: "id_example",
  // PutResource
  putResource: {
    name: "name_example",
    bookingRules: {
      maxConcurrentBookings: 1,
      repeatingAvailability: {
        timeZone: "timeZone_example",
        weekly: {
          "key": [
            {
              start: "start_example",
              end: "end_example",
            },
          ],
        },
      },
      checkAvailabilityInCalendars: [
        {
          id: "id_example",
        },
      ],
      minBookingNotice: "minBookingNotice_example",
      maxBookingNotice: "maxBookingNotice_example",
      beforeBuffer: "beforeBuffer_example",
      afterBuffer: "afterBuffer_example",
      units: {
        availableUnits: 1,
        minUnitsPerBooking: 1,
        maxUnitsPerBooking: 1,
        unitsLabel: "unitsLabel_example",
      },
      busyIntervals: [
        {
          start: new Date('1970-01-01T00:00:00.00Z'),
          end: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      resourceRules: {
        availableInGroups: [
          {
            group: {
              id: "id_example",
            },
            min: 1,
          },
        ],
        linkedResources: [
          {
            id: "id_example",
          },
        ],
      },
      enabled: true,
      maxBookingsPerTimeUnit: {
        perHour: 1,
        perDay: 1,
        perWeek: 1,
        perMonth: 1,
      },
    },
    tags: {
      "key": "key_example",
    },
  },
};

apiInstance.putResource(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putResource** | **PutResource**|  |
 **id** | [**string**] |  | defaults to undefined


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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putResourceGroup**
> any putResourceGroup(putResourceGroup)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ResourcesApi(configuration);

let body:.ResourcesApiPutResourceGroupRequest = {
  // string
  id: "id_example",
  // PutResourceGroup
  putResourceGroup: {
    name: "name_example",
    resources: [
      {
        id: "id_example",
      },
    ],
    tags: {
      "key": "key_example",
    },
  },
};

apiInstance.putResourceGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putResourceGroup** | **PutResourceGroup**|  |
 **id** | [**string**] |  | defaults to undefined


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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


