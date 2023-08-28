# .OrganizationsApi

All URIs are relative to *https://api.timetime.in*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrganizationMember**](OrganizationsApi.md#deleteOrganizationMember) | **DELETE** /v1/organizations/{orgId}/members/{userId} | 
[**deleteOrganizationMember1**](OrganizationsApi.md#deleteOrganizationMember1) | **DELETE** /v1/organizations/{id} | 
[**listOrganizationMembers**](OrganizationsApi.md#listOrganizationMembers) | **GET** /v1/organizations/{orgId}/members | 
[**listOrganizations**](OrganizationsApi.md#listOrganizations) | **GET** /v1/organizations | 
[**patchOrganizationMembership**](OrganizationsApi.md#patchOrganizationMembership) | **PATCH** /v1/organizations/{orgId}/members/{userId} | 
[**postOrganizationMember**](OrganizationsApi.md#postOrganizationMember) | **POST** /v1/organizations/{orgId}/invitations | 
[**postOrganizationMember1**](OrganizationsApi.md#postOrganizationMember1) | **POST** /v1/accepted-org-invitations | 
[**putOrganization**](OrganizationsApi.md#putOrganization) | **PUT** /v1/organizations/{id} | 


# **deleteOrganizationMember**
> any deleteOrganizationMember()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiDeleteOrganizationMemberRequest = {
  // string
  orgId: "orgId_example",
  // string
  userId: "userId_example",
};

apiInstance.deleteOrganizationMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


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

# **deleteOrganizationMember1**
> any deleteOrganizationMember1()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiDeleteOrganizationMember1Request = {
  // string
  id: "id_example",
};

apiInstance.deleteOrganizationMember1(body).then((data:any) => {
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

# **listOrganizationMembers**
> OrganizationMembersList listOrganizationMembers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiListOrganizationMembersRequest = {
  // string
  orgId: "orgId_example",
};

apiInstance.listOrganizationMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**string**] |  | defaults to undefined


### Return type

**OrganizationMembersList**

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

# **listOrganizations**
> OrganizationsList listOrganizations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:any = {};

apiInstance.listOrganizations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrganizationsList**

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

# **patchOrganizationMembership**
> any patchOrganizationMembership(patchOrganizationMembership)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiPatchOrganizationMembershipRequest = {
  // string
  orgId: "orgId_example",
  // string
  userId: "userId_example",
  // PatchOrganizationMembership
  patchOrganizationMembership: {
    roles: [
      "MEMBER",
    ],
  },
};

apiInstance.patchOrganizationMembership(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchOrganizationMembership** | **PatchOrganizationMembership**|  |
 **orgId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


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

# **postOrganizationMember**
> any postOrganizationMember(inviteOrganizationMember)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiPostOrganizationMemberRequest = {
  // string
  orgId: "orgId_example",
  // InviteOrganizationMember
  inviteOrganizationMember: {
    email: "email_example",
    roles: [
      "MEMBER",
    ],
  },
};

apiInstance.postOrganizationMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteOrganizationMember** | **InviteOrganizationMember**|  |
 **orgId** | [**string**] |  | defaults to undefined


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

# **postOrganizationMember1**
> any postOrganizationMember1(acceptedOrganizationInvite)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiPostOrganizationMember1Request = {
  // AcceptedOrganizationInvite
  acceptedOrganizationInvite: {
    code: "code_example",
  },
};

apiInstance.postOrganizationMember1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptedOrganizationInvite** | **AcceptedOrganizationInvite**|  |


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

# **putOrganization**
> any putOrganization(putOrganization)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationsApi(configuration);

let body:.OrganizationsApiPutOrganizationRequest = {
  // string
  id: "id_example",
  // PutOrganization
  putOrganization: {
    name: "name_example",
    image: "image_example",
    domain: "domain_example",
    tags: {
      "key": "key_example",
    },
  },
};

apiInstance.putOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putOrganization** | **PutOrganization**|  |
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


