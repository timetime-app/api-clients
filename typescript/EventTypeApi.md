# .EventTypeApi

All URIs are relative to *https://api.timetime.in*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](EventTypeApi.md#_delete) | **DELETE** /v1/event-types/{id} | 
[**getEventType**](EventTypeApi.md#getEventType) | **GET** /v1/event-types/{id} | 
[**getEventTypeAvailability**](EventTypeApi.md#getEventTypeAvailability) | **GET** /v1/event-types/{id}/availability | 
[**listEventTypesByOwnerId**](EventTypeApi.md#listEventTypesByOwnerId) | **GET** /v1/event-types | 
[**putEventType**](EventTypeApi.md#putEventType) | **PUT** /v1/event-types/{id} | 


# **_delete**
> any _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventTypeApi(configuration);

let body:.EventTypeApiDeleteRequest = {
  // string
  id: "id_example",
};

apiInstance._delete(body).then((data:any) => {
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

# **getEventType**
> GetEventTypeModel getEventType()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventTypeApi(configuration);

let body:.EventTypeApiGetEventTypeRequest = {
  // string
  id: "id_example",
};

apiInstance.getEventType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**GetEventTypeModel**

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

# **getEventTypeAvailability**
> EventTypeAvailabilityModel getEventTypeAvailability()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventTypeApi(configuration);

let body:.EventTypeApiGetEventTypeAvailabilityRequest = {
  // string |  The event type identifier. This endpoint admits 2 different ways for identifying the event type:  1. The event type `UUID` (the same used when creating the event type). 2. The combination of the event owner slug + the event type slug, concatenated by \':\', example: `GET /v1/event-types/event-owner-slug:event-type-slug/availability`             
  id: "id_example",
  // string |  The starting date to get the availability in ISO-8601 format, example: `2021-01-01`.  If the parameter is not provided, the current day in the UTC time zone is used.              (optional)
  _from: new Date('1970-01-01').toISOString().split('T')[0];,
  // number |  Starting from the \'from\' value, this sets the limit day to verify the event availability.  Minimum allowed is `1`, and maximum is `14`.              (optional)
  days: 7,
  // number |  For bookings with multiple units (e.g. a party booking a table in a restaurant) this is the parameter that specifies how many units need to be available to consider each time slot free and therefore bookable.  Only positive values are allowed.              (optional)
  units: 1,
  // string |  The TimeZone id (IANA) to be used in combination with the \"from\" parameter to calculate the availability.              (optional)
  timeZone: "GMT",
};

apiInstance.getEventTypeAvailability(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  The event type identifier. This endpoint admits 2 different ways for identifying the event type:  1. The event type &#x60;UUID&#x60; (the same used when creating the event type). 2. The combination of the event owner slug + the event type slug, concatenated by \&#39;:\&#39;, example: &#x60;GET /v1/event-types/event-owner-slug:event-type-slug/availability&#x60;              | defaults to undefined
 **_from** | [**string**] |  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.              | (optional) defaults to undefined
 **days** | [**number**] |  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.              | (optional) defaults to 7
 **units** | [**number**] |  For bookings with multiple units (e.g. a party booking a table in a restaurant) this is the parameter that specifies how many units need to be available to consider each time slot free and therefore bookable.  Only positive values are allowed.              | (optional) defaults to 1
 **timeZone** | [**string**] |  The TimeZone id (IANA) to be used in combination with the \&quot;from\&quot; parameter to calculate the availability.              | (optional) defaults to 'GMT'


### Return type

**EventTypeAvailabilityModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**404** | The event type doesn\&#39;t exist. |  -  |
**200** | Successful response with the availability. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEventTypesByOwnerId**
> EventTypesListBody listEventTypesByOwnerId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventTypeApi(configuration);

let body:.EventTypeApiListEventTypesByOwnerIdRequest = {
  // string
  ownerId: "ownerId_example",
};

apiInstance.listEventTypesByOwnerId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | [**string**] |  | defaults to undefined


### Return type

**EventTypesListBody**

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

# **putEventType**
> any putEventType(putEventTypeModel)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventTypeApi(configuration);

let body:.EventTypeApiPutEventTypeRequest = {
  // string
  id: "id_example",
  // PutEventTypeModel
  putEventTypeModel: {
    name: "name_example",
    slug: "slug_example",
    description: "description_example",
    userId: "userId_example",
    duration: "duration_example",
    step: "step_example",
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
    maxConcurrentBookings: 1,
    availableUnits: 1,
    minUnitsPerBooking: 0,
    maxUnitsPerBooking: 1,
    unitsLabel: "unitsLabel_example",
    minBookingNotice: "minBookingNotice_example",
    maxBookingNotice: "maxBookingNotice_example",
    questions: [
      null,
    ],
    thirdPartyCalendars: {
      toSyncBookings: [
        {
          id: "id_example",
        },
      ],
      toVerifyAvailability: [
        {
          id: "id_example",
        },
      ],
    },
    beforeBuffer: "beforeBuffer_example",
    afterBuffer: "afterBuffer_example",
    imageUrl: "imageUrl_example",
    busyIntervals: [
      {
        start: new Date('1970-01-01T00:00:00.00Z'),
        end: new Date('1970-01-01T00:00:00.00Z'),
      },
    ],
    hosts: [
      {
        email: "email_example",
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
    notifications: {
      confirmation: {
        sms: {
          enabled: true,
        },
      },
      reminders: [
        {
          timeBefore: "timeBefore_example",
          sms: {
            enabled: true,
          },
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
    location: null,
    tags: {
      "key": "key_example",
    },
  },
};

apiInstance.putEventType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putEventTypeModel** | **PutEventTypeModel**|  |
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


