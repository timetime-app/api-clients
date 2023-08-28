# .BookingApi

All URIs are relative to *https://api.timetime.in*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel**](BookingApi.md#cancel) | **POST** /v1/bookings/{id}/cancellation | 
[**createBooking**](BookingApi.md#createBooking) | **POST** /v1/bookings | 
[**createExternalBooking**](BookingApi.md#createExternalBooking) | **PUT** /v1/external-bookings/{id} | 
[**externalValidationExample**](BookingApi.md#externalValidationExample) | **POST** /v1/external-booking-validation-example | 
[**getBooking**](BookingApi.md#getBooking) | **GET** /v1/bookings/{id} | 
[**getThirdPartyCalendarEventsByEventType**](BookingApi.md#getThirdPartyCalendarEventsByEventType) | **GET** /v1/third-party-calendar-events | 
[**listBookings**](BookingApi.md#listBookings) | **GET** /v1/bookings | 


# **cancel**
> any cancel()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BookingApi(configuration);

let body:.BookingApiCancelRequest = {
  // string
  id: "id_example",
  // CancelBookingRequest (optional)
  cancelBookingRequest: {
    reason: "reason_example",
  },
};

apiInstance.cancel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelBookingRequest** | **CancelBookingRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The booking has been cancelled. |  -  |
**409** | Either someone else already cancelled the booking or a previous request for cancelling the booking by this user was already processed with a different reason. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBooking**
> any createBooking(createBookingRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BookingApi(configuration);

let body:.BookingApiCreateBookingRequest = {
  // CreateBookingRequest
  createBookingRequest: {
    eventTypeId: "eventTypeId_example",
    start: new Date('1970-01-01T00:00:00.00Z'),
    bookerEmail: "bookerEmail_example",
    answers: {
      "key": "key_example",
    },
    notes: "notes_example",
    units: 1,
  },
};

apiInstance.createBooking(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBookingRequest** | **CreateBookingRequest**|  |


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
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createExternalBooking**
> any createExternalBooking(externalBooking)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BookingApi(configuration);

let body:.BookingApiCreateExternalBookingRequest = {
  // string
  id: "id_example",
  // ExternalBooking
  externalBooking: {
    eventTypeId: "eventTypeId_example",
    interval: {
      start: new Date('1970-01-01T00:00:00.00Z'),
      end: new Date('1970-01-01T00:00:00.00Z'),
    },
    bookerEmail: "bookerEmail_example",
    answers: {
      "key": "key_example",
    },
    notes: "notes_example",
    units: 1,
    resources: [
      {
        id: "id_example",
      },
    ],
  },
};

apiInstance.createExternalBooking(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalBooking** | **ExternalBooking**|  |
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

# **externalValidationExample**
> any externalValidationExample(externalBookingValidationModel)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BookingApi(configuration);

let body:.BookingApiExternalValidationExampleRequest = {
  // ExternalBookingValidationModel
  externalBookingValidationModel: {
    id: "id_example",
    eventType: {
      id: "id_example",
      tags: {
        "key": "key_example",
      },
    },
    eventTypeOwner: {
      id: "id_example",
      tags: {
        "key": "key_example",
      },
    },
    interval: {
      start: new Date('1970-01-01T00:00:00.00Z'),
      end: new Date('1970-01-01T00:00:00.00Z'),
    },
    answeredQuestions: [
      {
        id: "id_example",
        answer: "answer_example",
      },
    ],
    units: 1,
  },
};

apiInstance.externalValidationExample(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalBookingValidationModel** | **ExternalBookingValidationModel**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | The booking is not valid for the configured external system. |  -  |
**204** | Booking has been validated successfully, so TimeTime can proceed. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBooking**
> PublicBookingModel getBooking()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BookingApi(configuration);

let body:.BookingApiGetBookingRequest = {
  // string
  id: "id_example",
};

apiInstance.getBooking(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**PublicBookingModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getThirdPartyCalendarEventsByEventType**
> ThirdPartyCalendarEventsList getThirdPartyCalendarEventsByEventType()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BookingApi(configuration);

let body:.BookingApiGetThirdPartyCalendarEventsByEventTypeRequest = {
  // string
  eventTypeId: "eventTypeId_example",
  // string |  The starting date to get the availability in ISO-8601 format, example: `2021-01-01`.  If the parameter is not provided, the current day in the UTC time zone is used.              (optional)
  _from: new Date('1970-01-01').toISOString().split('T')[0];,
  // number |  Starting from the \'from\' value, this sets the limit day to verify the event availability.  Minimum allowed is `1`, and maximum is `14`.              (optional)
  days: 7,
};

apiInstance.getThirdPartyCalendarEventsByEventType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypeId** | [**string**] |  | defaults to undefined
 **_from** | [**string**] |  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.              | (optional) defaults to undefined
 **days** | [**number**] |  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.              | (optional) defaults to 7


### Return type

**ThirdPartyCalendarEventsList**

### Authorization

[HttpAuth](README.md#HttpAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with the appointments. |  -  |
**404** | The event type doesn\&#39;t exist. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBookings**
> BookingsList listBookings()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BookingApi(configuration);

let body:.BookingApiListBookingsRequest = {
  // string
  eventTypesUserId: "eventTypesUserId_example",
  // Date (optional)
  _from: new Date('1970-01-01T00:00:00.00Z'),
  // number (optional)
  days: 7,
  // string (optional)
  eventTypeId: "eventTypeId_example",
};

apiInstance.listBookings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventTypesUserId** | [**string**] |  | defaults to undefined
 **_from** | [**Date**] |  | (optional) defaults to undefined
 **days** | [**number**] |  | (optional) defaults to 7
 **eventTypeId** | [**string**] |  | (optional) defaults to undefined


### Return type

**BookingsList**

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


