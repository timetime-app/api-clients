import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AcceptedOrganizationInvite } from '../models/AcceptedOrganizationInvite';
import { AnsweredQuestionModel } from '../models/AnsweredQuestionModel';
import { ApiKeyModel } from '../models/ApiKeyModel';
import { ApiKeysListModel } from '../models/ApiKeysListModel';
import { AvailableInGroupRule } from '../models/AvailableInGroupRule';
import { BookedEventTypeModel } from '../models/BookedEventTypeModel';
import { BookedResourceModel } from '../models/BookedResourceModel';
import { BookerModel } from '../models/BookerModel';
import { BookerPhoneLocation } from '../models/BookerPhoneLocation';
import { BookerSelectionLocation } from '../models/BookerSelectionLocation';
import { BookingNotificationsModel } from '../models/BookingNotificationsModel';
import { BookingRules } from '../models/BookingRules';
import { BookingsList } from '../models/BookingsList';
import { CancelBookingRequest } from '../models/CancelBookingRequest';
import { CancellationModel } from '../models/CancellationModel';
import { ConfirmationNotificationsModel } from '../models/ConfirmationNotificationsModel';
import { CreateApiKeyBody } from '../models/CreateApiKeyBody';
import { CreateApiKeyResponseModel } from '../models/CreateApiKeyResponseModel';
import { CreateBookingRequest } from '../models/CreateBookingRequest';
import { EmailQuestion } from '../models/EmailQuestion';
import { EvaluatedTimeSlotModel } from '../models/EvaluatedTimeSlotModel';
import { EventTypeAvailabilityModel } from '../models/EventTypeAvailabilityModel';
import { EventTypeHostCalendarModel } from '../models/EventTypeHostCalendarModel';
import { EventTypeHostModel } from '../models/EventTypeHostModel';
import { EventTypeListItem } from '../models/EventTypeListItem';
import { EventTypeQuestion } from '../models/EventTypeQuestion';
import { EventTypesListBody } from '../models/EventTypesListBody';
import { ExternalBooking } from '../models/ExternalBooking';
import { ExternalBookingAnsweredQuestionModel } from '../models/ExternalBookingAnsweredQuestionModel';
import { ExternalBookingEventTypeModel } from '../models/ExternalBookingEventTypeModel';
import { ExternalBookingEventTypeOwnerModel } from '../models/ExternalBookingEventTypeOwnerModel';
import { ExternalBookingValidationModel } from '../models/ExternalBookingValidationModel';
import { FixedLocation } from '../models/FixedLocation';
import { GetEventTypeModel } from '../models/GetEventTypeModel';
import { GoogleConsentBody } from '../models/GoogleConsentBody';
import { GoogleMeetLocation } from '../models/GoogleMeetLocation';
import { ImageQuestion } from '../models/ImageQuestion';
import { InstantInterval } from '../models/InstantInterval';
import { InviteOrganizationMember } from '../models/InviteOrganizationMember';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { LocationModel } from '../models/LocationModel';
import { LocationOptionModel } from '../models/LocationOptionModel';
import { LocationQuestion } from '../models/LocationQuestion';
import { MaxBookingsPerTimeUnit } from '../models/MaxBookingsPerTimeUnit';
import { MicrosoftOutlookLocation } from '../models/MicrosoftOutlookLocation';
import { Organization } from '../models/Organization';
import { OrganizationMember } from '../models/OrganizationMember';
import { OrganizationMembersList } from '../models/OrganizationMembersList';
import { OrganizationMembership } from '../models/OrganizationMembership';
import { OrganizationsList } from '../models/OrganizationsList';
import { PasswordQuestion } from '../models/PasswordQuestion';
import { PatchOrganizationMembership } from '../models/PatchOrganizationMembership';
import { PatchTenantMembershipModel } from '../models/PatchTenantMembershipModel';
import { PatchUserModel } from '../models/PatchUserModel';
import { PhoneQuestion } from '../models/PhoneQuestion';
import { ProblemDetail } from '../models/ProblemDetail';
import { PublicBookingModel } from '../models/PublicBookingModel';
import { PublicProfile } from '../models/PublicProfile';
import { PublicProfileLink } from '../models/PublicProfileLink';
import { PublicProfileWriteModel } from '../models/PublicProfileWriteModel';
import { PublicProfilesList } from '../models/PublicProfilesList';
import { PutEventTypeModel } from '../models/PutEventTypeModel';
import { PutEventTypeModelLocation } from '../models/PutEventTypeModelLocation';
import { PutEventTypeModelQuestionsInner } from '../models/PutEventTypeModelQuestionsInner';
import { PutOrganization } from '../models/PutOrganization';
import { PutProfileBody } from '../models/PutProfileBody';
import { PutResource } from '../models/PutResource';
import { PutResourceGroup } from '../models/PutResourceGroup';
import { PutResourceInGroup } from '../models/PutResourceInGroup';
import { ReminderNotificationsModel } from '../models/ReminderNotificationsModel';
import { RepeatingAvailabilityModel } from '../models/RepeatingAvailabilityModel';
import { Resource } from '../models/Resource';
import { ResourceGroupId } from '../models/ResourceGroupId';
import { ResourceGroupModel } from '../models/ResourceGroupModel';
import { ResourceGroupsListModel } from '../models/ResourceGroupsListModel';
import { ResourceId } from '../models/ResourceId';
import { ResourceRules } from '../models/ResourceRules';
import { ResourcesList } from '../models/ResourcesList';
import { ShareWithRequestModel } from '../models/ShareWithRequestModel';
import { SmsNotificationModel } from '../models/SmsNotificationModel';
import { TenantMembershipModel } from '../models/TenantMembershipModel';
import { TextQuestion } from '../models/TextQuestion';
import { ThirdPartyCalendarEvent } from '../models/ThirdPartyCalendarEvent';
import { ThirdPartyCalendarEventsList } from '../models/ThirdPartyCalendarEventsList';
import { ThirdPartyCalendarId } from '../models/ThirdPartyCalendarId';
import { ThirdPartyCalendarModel } from '../models/ThirdPartyCalendarModel';
import { ThirdPartyCalendarsModel } from '../models/ThirdPartyCalendarsModel';
import { ThirdPartyConsentBody } from '../models/ThirdPartyConsentBody';
import { TimeRange } from '../models/TimeRange';
import { Units } from '../models/Units';
import { UsedBookingResource } from '../models/UsedBookingResource';
import { UserModel } from '../models/UserModel';
import { WebhookBody } from '../models/WebhookBody';

import { ObservableApiKeyApi } from "./ObservableAPI";
import { ApiKeyApiRequestFactory, ApiKeyApiResponseProcessor} from "../apis/ApiKeyApi";

export interface ApiKeyApiCreateApiKeyRequest {
    /**
     * 
     * @type CreateApiKeyBody
     * @memberof ApiKeyApicreateApiKey
     */
    createApiKeyBody: CreateApiKeyBody
}

export interface ApiKeyApiListUserApiKeysRequest {
}

export class ObjectApiKeyApi {
    private api: ObservableApiKeyApi

    public constructor(configuration: Configuration, requestFactory?: ApiKeyApiRequestFactory, responseProcessor?: ApiKeyApiResponseProcessor) {
        this.api = new ObservableApiKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createApiKeyWithHttpInfo(param: ApiKeyApiCreateApiKeyRequest, options?: Configuration): Promise<HttpInfo<CreateApiKeyResponseModel>> {
        return this.api.createApiKeyWithHttpInfo(param.createApiKeyBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createApiKey(param: ApiKeyApiCreateApiKeyRequest, options?: Configuration): Promise<CreateApiKeyResponseModel> {
        return this.api.createApiKey(param.createApiKeyBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listUserApiKeysWithHttpInfo(param: ApiKeyApiListUserApiKeysRequest = {}, options?: Configuration): Promise<HttpInfo<ApiKeysListModel>> {
        return this.api.listUserApiKeysWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listUserApiKeys(param: ApiKeyApiListUserApiKeysRequest = {}, options?: Configuration): Promise<ApiKeysListModel> {
        return this.api.listUserApiKeys( options).toPromise();
    }

}

import { ObservableBookingApi } from "./ObservableAPI";
import { BookingApiRequestFactory, BookingApiResponseProcessor} from "../apis/BookingApi";

export interface BookingApiCancelRequest {
    /**
     * 
     * @type string
     * @memberof BookingApicancel
     */
    id: string
    /**
     * 
     * @type CancelBookingRequest
     * @memberof BookingApicancel
     */
    cancelBookingRequest?: CancelBookingRequest
}

export interface BookingApiCreateBookingRequest {
    /**
     * 
     * @type CreateBookingRequest
     * @memberof BookingApicreateBooking
     */
    createBookingRequest: CreateBookingRequest
}

export interface BookingApiCreateExternalBookingRequest {
    /**
     * 
     * @type string
     * @memberof BookingApicreateExternalBooking
     */
    id: string
    /**
     * 
     * @type ExternalBooking
     * @memberof BookingApicreateExternalBooking
     */
    externalBooking: ExternalBooking
}

export interface BookingApiExternalValidationExampleRequest {
    /**
     * 
     * @type ExternalBookingValidationModel
     * @memberof BookingApiexternalValidationExample
     */
    externalBookingValidationModel: ExternalBookingValidationModel
}

export interface BookingApiGetBookingRequest {
    /**
     * 
     * @type string
     * @memberof BookingApigetBooking
     */
    id: string
}

export interface BookingApiGetThirdPartyCalendarEventsByEventTypeRequest {
    /**
     * 
     * @type string
     * @memberof BookingApigetThirdPartyCalendarEventsByEventType
     */
    eventTypeId: string
    /**
     *  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @type string
     * @memberof BookingApigetThirdPartyCalendarEventsByEventType
     */
    _from?: string
    /**
     *  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     * @type number
     * @memberof BookingApigetThirdPartyCalendarEventsByEventType
     */
    days?: number
}

export interface BookingApiListBookingsRequest {
    /**
     * 
     * @type string
     * @memberof BookingApilistBookings
     */
    eventTypesUserId: string
    /**
     * 
     * @type Date
     * @memberof BookingApilistBookings
     */
    _from?: Date
    /**
     * 
     * @type number
     * @memberof BookingApilistBookings
     */
    days?: number
    /**
     * 
     * @type string
     * @memberof BookingApilistBookings
     */
    eventTypeId?: string
}

export class ObjectBookingApi {
    private api: ObservableBookingApi

    public constructor(configuration: Configuration, requestFactory?: BookingApiRequestFactory, responseProcessor?: BookingApiResponseProcessor) {
        this.api = new ObservableBookingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cancelWithHttpInfo(param: BookingApiCancelRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cancelWithHttpInfo(param.id, param.cancelBookingRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cancel(param: BookingApiCancelRequest, options?: Configuration): Promise<any> {
        return this.api.cancel(param.id, param.cancelBookingRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createBookingWithHttpInfo(param: BookingApiCreateBookingRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createBookingWithHttpInfo(param.createBookingRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createBooking(param: BookingApiCreateBookingRequest, options?: Configuration): Promise<any> {
        return this.api.createBooking(param.createBookingRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createExternalBookingWithHttpInfo(param: BookingApiCreateExternalBookingRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createExternalBookingWithHttpInfo(param.id, param.externalBooking,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createExternalBooking(param: BookingApiCreateExternalBookingRequest, options?: Configuration): Promise<any> {
        return this.api.createExternalBooking(param.id, param.externalBooking,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public externalValidationExampleWithHttpInfo(param: BookingApiExternalValidationExampleRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.externalValidationExampleWithHttpInfo(param.externalBookingValidationModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public externalValidationExample(param: BookingApiExternalValidationExampleRequest, options?: Configuration): Promise<any> {
        return this.api.externalValidationExample(param.externalBookingValidationModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getBookingWithHttpInfo(param: BookingApiGetBookingRequest, options?: Configuration): Promise<HttpInfo<PublicBookingModel>> {
        return this.api.getBookingWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getBooking(param: BookingApiGetBookingRequest, options?: Configuration): Promise<PublicBookingModel> {
        return this.api.getBooking(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getThirdPartyCalendarEventsByEventTypeWithHttpInfo(param: BookingApiGetThirdPartyCalendarEventsByEventTypeRequest, options?: Configuration): Promise<HttpInfo<ThirdPartyCalendarEventsList>> {
        return this.api.getThirdPartyCalendarEventsByEventTypeWithHttpInfo(param.eventTypeId, param._from, param.days,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getThirdPartyCalendarEventsByEventType(param: BookingApiGetThirdPartyCalendarEventsByEventTypeRequest, options?: Configuration): Promise<ThirdPartyCalendarEventsList> {
        return this.api.getThirdPartyCalendarEventsByEventType(param.eventTypeId, param._from, param.days,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listBookingsWithHttpInfo(param: BookingApiListBookingsRequest, options?: Configuration): Promise<HttpInfo<BookingsList>> {
        return this.api.listBookingsWithHttpInfo(param.eventTypesUserId, param._from, param.days, param.eventTypeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listBookings(param: BookingApiListBookingsRequest, options?: Configuration): Promise<BookingsList> {
        return this.api.listBookings(param.eventTypesUserId, param._from, param.days, param.eventTypeId,  options).toPromise();
    }

}

import { ObservableEventTypeApi } from "./ObservableAPI";
import { EventTypeApiRequestFactory, EventTypeApiResponseProcessor} from "../apis/EventTypeApi";

export interface EventTypeApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof EventTypeApi_delete
     */
    id: string
}

export interface EventTypeApiGetEventTypeRequest {
    /**
     * 
     * @type string
     * @memberof EventTypeApigetEventType
     */
    id: string
}

export interface EventTypeApiGetEventTypeAvailabilityRequest {
    /**
     *  The event type identifier. This endpoint admits 2 different ways for identifying the event type:  1. The event type &#x60;UUID&#x60; (the same used when creating the event type). 2. The combination of the event owner slug + the event type slug, concatenated by \&#39;:\&#39;, example: &#x60;GET /v1/event-types/event-owner-slug:event-type-slug/availability&#x60;             
     * @type string
     * @memberof EventTypeApigetEventTypeAvailability
     */
    id: string
    /**
     *  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @type string
     * @memberof EventTypeApigetEventTypeAvailability
     */
    _from?: string
    /**
     *  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     * @type number
     * @memberof EventTypeApigetEventTypeAvailability
     */
    days?: number
    /**
     *  For bookings with multiple units (e.g. a party booking a table in a restaurant) this is the parameter that specifies how many units need to be available to consider each time slot free and therefore bookable.  Only positive values are allowed.             
     * @type number
     * @memberof EventTypeApigetEventTypeAvailability
     */
    units?: number
    /**
     *  The TimeZone id (IANA) to be used in combination with the \&quot;from\&quot; parameter to calculate the availability.             
     * @type string
     * @memberof EventTypeApigetEventTypeAvailability
     */
    timeZone?: string
}

export interface EventTypeApiListEventTypesByOwnerIdRequest {
    /**
     * 
     * @type string
     * @memberof EventTypeApilistEventTypesByOwnerId
     */
    ownerId: string
}

export interface EventTypeApiPutEventTypeRequest {
    /**
     * 
     * @type string
     * @memberof EventTypeApiputEventType
     */
    id: string
    /**
     * 
     * @type PutEventTypeModel
     * @memberof EventTypeApiputEventType
     */
    putEventTypeModel: PutEventTypeModel
}

export class ObjectEventTypeApi {
    private api: ObservableEventTypeApi

    public constructor(configuration: Configuration, requestFactory?: EventTypeApiRequestFactory, responseProcessor?: EventTypeApiResponseProcessor) {
        this.api = new ObservableEventTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public _deleteWithHttpInfo(param: EventTypeApiDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api._deleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public _delete(param: EventTypeApiDeleteRequest, options?: Configuration): Promise<any> {
        return this.api._delete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEventTypeWithHttpInfo(param: EventTypeApiGetEventTypeRequest, options?: Configuration): Promise<HttpInfo<GetEventTypeModel>> {
        return this.api.getEventTypeWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEventType(param: EventTypeApiGetEventTypeRequest, options?: Configuration): Promise<GetEventTypeModel> {
        return this.api.getEventType(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEventTypeAvailabilityWithHttpInfo(param: EventTypeApiGetEventTypeAvailabilityRequest, options?: Configuration): Promise<HttpInfo<EventTypeAvailabilityModel>> {
        return this.api.getEventTypeAvailabilityWithHttpInfo(param.id, param._from, param.days, param.units, param.timeZone,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEventTypeAvailability(param: EventTypeApiGetEventTypeAvailabilityRequest, options?: Configuration): Promise<EventTypeAvailabilityModel> {
        return this.api.getEventTypeAvailability(param.id, param._from, param.days, param.units, param.timeZone,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listEventTypesByOwnerIdWithHttpInfo(param: EventTypeApiListEventTypesByOwnerIdRequest, options?: Configuration): Promise<HttpInfo<EventTypesListBody>> {
        return this.api.listEventTypesByOwnerIdWithHttpInfo(param.ownerId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listEventTypesByOwnerId(param: EventTypeApiListEventTypesByOwnerIdRequest, options?: Configuration): Promise<EventTypesListBody> {
        return this.api.listEventTypesByOwnerId(param.ownerId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putEventTypeWithHttpInfo(param: EventTypeApiPutEventTypeRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.putEventTypeWithHttpInfo(param.id, param.putEventTypeModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putEventType(param: EventTypeApiPutEventTypeRequest, options?: Configuration): Promise<any> {
        return this.api.putEventType(param.id, param.putEventTypeModel,  options).toPromise();
    }

}

import { ObservableOrganizationsApi } from "./ObservableAPI";
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";

export interface OrganizationsApiDeleteOrganizationMemberRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApideleteOrganizationMember
     */
    orgId: string
    /**
     * 
     * @type string
     * @memberof OrganizationsApideleteOrganizationMember
     */
    userId: string
}

export interface OrganizationsApiDeleteOrganizationMember1Request {
    /**
     * 
     * @type string
     * @memberof OrganizationsApideleteOrganizationMember1
     */
    id: string
}

export interface OrganizationsApiListOrganizationMembersRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApilistOrganizationMembers
     */
    orgId: string
}

export interface OrganizationsApiListOrganizationsRequest {
}

export interface OrganizationsApiPatchOrganizationMembershipRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApipatchOrganizationMembership
     */
    orgId: string
    /**
     * 
     * @type string
     * @memberof OrganizationsApipatchOrganizationMembership
     */
    userId: string
    /**
     * 
     * @type PatchOrganizationMembership
     * @memberof OrganizationsApipatchOrganizationMembership
     */
    patchOrganizationMembership: PatchOrganizationMembership
}

export interface OrganizationsApiPostOrganizationMemberRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApipostOrganizationMember
     */
    orgId: string
    /**
     * 
     * @type InviteOrganizationMember
     * @memberof OrganizationsApipostOrganizationMember
     */
    inviteOrganizationMember: InviteOrganizationMember
}

export interface OrganizationsApiPostOrganizationMember1Request {
    /**
     * 
     * @type AcceptedOrganizationInvite
     * @memberof OrganizationsApipostOrganizationMember1
     */
    acceptedOrganizationInvite: AcceptedOrganizationInvite
}

export interface OrganizationsApiPutOrganizationRequest {
    /**
     * 
     * @type string
     * @memberof OrganizationsApiputOrganization
     */
    id: string
    /**
     * 
     * @type PutOrganization
     * @memberof OrganizationsApiputOrganization
     */
    putOrganization: PutOrganization
}

export class ObjectOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteOrganizationMemberWithHttpInfo(param: OrganizationsApiDeleteOrganizationMemberRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteOrganizationMemberWithHttpInfo(param.orgId, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOrganizationMember(param: OrganizationsApiDeleteOrganizationMemberRequest, options?: Configuration): Promise<any> {
        return this.api.deleteOrganizationMember(param.orgId, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOrganizationMember1WithHttpInfo(param: OrganizationsApiDeleteOrganizationMember1Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteOrganizationMember1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOrganizationMember1(param: OrganizationsApiDeleteOrganizationMember1Request, options?: Configuration): Promise<any> {
        return this.api.deleteOrganizationMember1(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listOrganizationMembersWithHttpInfo(param: OrganizationsApiListOrganizationMembersRequest, options?: Configuration): Promise<HttpInfo<OrganizationMembersList>> {
        return this.api.listOrganizationMembersWithHttpInfo(param.orgId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listOrganizationMembers(param: OrganizationsApiListOrganizationMembersRequest, options?: Configuration): Promise<OrganizationMembersList> {
        return this.api.listOrganizationMembers(param.orgId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listOrganizationsWithHttpInfo(param: OrganizationsApiListOrganizationsRequest = {}, options?: Configuration): Promise<HttpInfo<OrganizationsList>> {
        return this.api.listOrganizationsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listOrganizations(param: OrganizationsApiListOrganizationsRequest = {}, options?: Configuration): Promise<OrganizationsList> {
        return this.api.listOrganizations( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchOrganizationMembershipWithHttpInfo(param: OrganizationsApiPatchOrganizationMembershipRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.patchOrganizationMembershipWithHttpInfo(param.orgId, param.userId, param.patchOrganizationMembership,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchOrganizationMembership(param: OrganizationsApiPatchOrganizationMembershipRequest, options?: Configuration): Promise<any> {
        return this.api.patchOrganizationMembership(param.orgId, param.userId, param.patchOrganizationMembership,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postOrganizationMemberWithHttpInfo(param: OrganizationsApiPostOrganizationMemberRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.postOrganizationMemberWithHttpInfo(param.orgId, param.inviteOrganizationMember,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postOrganizationMember(param: OrganizationsApiPostOrganizationMemberRequest, options?: Configuration): Promise<any> {
        return this.api.postOrganizationMember(param.orgId, param.inviteOrganizationMember,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postOrganizationMember1WithHttpInfo(param: OrganizationsApiPostOrganizationMember1Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.postOrganizationMember1WithHttpInfo(param.acceptedOrganizationInvite,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postOrganizationMember1(param: OrganizationsApiPostOrganizationMember1Request, options?: Configuration): Promise<any> {
        return this.api.postOrganizationMember1(param.acceptedOrganizationInvite,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putOrganizationWithHttpInfo(param: OrganizationsApiPutOrganizationRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.putOrganizationWithHttpInfo(param.id, param.putOrganization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putOrganization(param: OrganizationsApiPutOrganizationRequest, options?: Configuration): Promise<any> {
        return this.api.putOrganization(param.id, param.putOrganization,  options).toPromise();
    }

}

import { ObservablePublicProfileApi } from "./ObservableAPI";
import { PublicProfileApiRequestFactory, PublicProfileApiResponseProcessor} from "../apis/PublicProfileApi";

export interface PublicProfileApiDeletePublicProfileRequest {
    /**
     * 
     * @type string
     * @memberof PublicProfileApideletePublicProfile
     */
    id: string
}

export interface PublicProfileApiGetPublicProfileRequest {
    /**
     * 
     * @type string
     * @memberof PublicProfileApigetPublicProfile
     */
    id: string
}

export interface PublicProfileApiGetSharedPublicProfileRequest {
    /**
     * 
     * @type string
     * @memberof PublicProfileApigetSharedPublicProfile
     */
    slug: string
}

export interface PublicProfileApiListPublicProfilesRequest {
}

export interface PublicProfileApiPutPublicProfileRequest {
    /**
     * 
     * @type string
     * @memberof PublicProfileApiputPublicProfile
     */
    id: string
    /**
     * 
     * @type PublicProfileWriteModel
     * @memberof PublicProfileApiputPublicProfile
     */
    publicProfileWriteModel: PublicProfileWriteModel
}

export class ObjectPublicProfileApi {
    private api: ObservablePublicProfileApi

    public constructor(configuration: Configuration, requestFactory?: PublicProfileApiRequestFactory, responseProcessor?: PublicProfileApiResponseProcessor) {
        this.api = new ObservablePublicProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deletePublicProfileWithHttpInfo(param: PublicProfileApiDeletePublicProfileRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deletePublicProfileWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deletePublicProfile(param: PublicProfileApiDeletePublicProfileRequest, options?: Configuration): Promise<any> {
        return this.api.deletePublicProfile(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPublicProfileWithHttpInfo(param: PublicProfileApiGetPublicProfileRequest, options?: Configuration): Promise<HttpInfo<PublicProfile>> {
        return this.api.getPublicProfileWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPublicProfile(param: PublicProfileApiGetPublicProfileRequest, options?: Configuration): Promise<PublicProfile> {
        return this.api.getPublicProfile(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSharedPublicProfileWithHttpInfo(param: PublicProfileApiGetSharedPublicProfileRequest, options?: Configuration): Promise<HttpInfo<PublicProfile>> {
        return this.api.getSharedPublicProfileWithHttpInfo(param.slug,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSharedPublicProfile(param: PublicProfileApiGetSharedPublicProfileRequest, options?: Configuration): Promise<PublicProfile> {
        return this.api.getSharedPublicProfile(param.slug,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listPublicProfilesWithHttpInfo(param: PublicProfileApiListPublicProfilesRequest = {}, options?: Configuration): Promise<HttpInfo<PublicProfilesList>> {
        return this.api.listPublicProfilesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listPublicProfiles(param: PublicProfileApiListPublicProfilesRequest = {}, options?: Configuration): Promise<PublicProfilesList> {
        return this.api.listPublicProfiles( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putPublicProfileWithHttpInfo(param: PublicProfileApiPutPublicProfileRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.putPublicProfileWithHttpInfo(param.id, param.publicProfileWriteModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putPublicProfile(param: PublicProfileApiPutPublicProfileRequest, options?: Configuration): Promise<any> {
        return this.api.putPublicProfile(param.id, param.publicProfileWriteModel,  options).toPromise();
    }

}

import { ObservableResourcesApi } from "./ObservableAPI";
import { ResourcesApiRequestFactory, ResourcesApiResponseProcessor} from "../apis/ResourcesApi";

export interface ResourcesApiDeleteResourceRequest {
    /**
     * 
     * @type string
     * @memberof ResourcesApideleteResource
     */
    id: string
}

export interface ResourcesApiDeleteResourceGroupRequest {
    /**
     * 
     * @type string
     * @memberof ResourcesApideleteResourceGroup
     */
    id: string
}

export interface ResourcesApiGetResourceRequest {
    /**
     * 
     * @type string
     * @memberof ResourcesApigetResource
     */
    id: string
}

export interface ResourcesApiGetResourceGroupRequest {
    /**
     * 
     * @type string
     * @memberof ResourcesApigetResourceGroup
     */
    id: string
}

export interface ResourcesApiListResourceGroupsRequest {
}

export interface ResourcesApiListResourcesRequest {
}

export interface ResourcesApiPutResourceRequest {
    /**
     * 
     * @type string
     * @memberof ResourcesApiputResource
     */
    id: string
    /**
     * 
     * @type PutResource
     * @memberof ResourcesApiputResource
     */
    putResource: PutResource
}

export interface ResourcesApiPutResourceGroupRequest {
    /**
     * 
     * @type string
     * @memberof ResourcesApiputResourceGroup
     */
    id: string
    /**
     * 
     * @type PutResourceGroup
     * @memberof ResourcesApiputResourceGroup
     */
    putResourceGroup: PutResourceGroup
}

export class ObjectResourcesApi {
    private api: ObservableResourcesApi

    public constructor(configuration: Configuration, requestFactory?: ResourcesApiRequestFactory, responseProcessor?: ResourcesApiResponseProcessor) {
        this.api = new ObservableResourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteResourceWithHttpInfo(param: ResourcesApiDeleteResourceRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteResourceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteResource(param: ResourcesApiDeleteResourceRequest, options?: Configuration): Promise<any> {
        return this.api.deleteResource(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteResourceGroupWithHttpInfo(param: ResourcesApiDeleteResourceGroupRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteResourceGroupWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteResourceGroup(param: ResourcesApiDeleteResourceGroupRequest, options?: Configuration): Promise<any> {
        return this.api.deleteResourceGroup(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getResourceWithHttpInfo(param: ResourcesApiGetResourceRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.getResourceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getResource(param: ResourcesApiGetResourceRequest, options?: Configuration): Promise<Resource> {
        return this.api.getResource(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getResourceGroupWithHttpInfo(param: ResourcesApiGetResourceGroupRequest, options?: Configuration): Promise<HttpInfo<ResourceGroupModel>> {
        return this.api.getResourceGroupWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getResourceGroup(param: ResourcesApiGetResourceGroupRequest, options?: Configuration): Promise<ResourceGroupModel> {
        return this.api.getResourceGroup(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listResourceGroupsWithHttpInfo(param: ResourcesApiListResourceGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<ResourceGroupsListModel>> {
        return this.api.listResourceGroupsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listResourceGroups(param: ResourcesApiListResourceGroupsRequest = {}, options?: Configuration): Promise<ResourceGroupsListModel> {
        return this.api.listResourceGroups( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listResourcesWithHttpInfo(param: ResourcesApiListResourcesRequest = {}, options?: Configuration): Promise<HttpInfo<ResourcesList>> {
        return this.api.listResourcesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listResources(param: ResourcesApiListResourcesRequest = {}, options?: Configuration): Promise<ResourcesList> {
        return this.api.listResources( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putResourceWithHttpInfo(param: ResourcesApiPutResourceRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.putResourceWithHttpInfo(param.id, param.putResource,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putResource(param: ResourcesApiPutResourceRequest, options?: Configuration): Promise<any> {
        return this.api.putResource(param.id, param.putResource,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putResourceGroupWithHttpInfo(param: ResourcesApiPutResourceGroupRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.putResourceGroupWithHttpInfo(param.id, param.putResourceGroup,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putResourceGroup(param: ResourcesApiPutResourceGroupRequest, options?: Configuration): Promise<any> {
        return this.api.putResourceGroup(param.id, param.putResourceGroup,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiGetCurrentUserRequest {
}

export interface UserApiGetUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUser
     */
    id: string
}

export interface UserApiListUsersRequest {
}

export interface UserApiLoginRequest {
    /**
     * 
     * @type string
     * @memberof UserApilogin
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof UserApilogin
     */
    referer?: string
    /**
     * 
     * @type string
     * @memberof UserApilogin
     */
    xTTImpersonatedUserId?: string
}

export interface UserApiPatchUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApipatchUser
     */
    id: string
    /**
     * 
     * @type PatchUserModel
     * @memberof UserApipatchUser
     */
    patchUserModel: PatchUserModel
}

export interface UserApiPostGoogleConsentRequest {
    /**
     * 
     * @type GoogleConsentBody
     * @memberof UserApipostGoogleConsent
     */
    googleConsentBody: GoogleConsentBody
    /**
     * 
     * @type string
     * @memberof UserApipostGoogleConsent
     */
    origin?: string
}

export interface UserApiPostThirdPartyConsentRequest {
    /**
     * 
     * @type ThirdPartyConsentBody
     * @memberof UserApipostThirdPartyConsent
     */
    thirdPartyConsentBody: ThirdPartyConsentBody
}

export interface UserApiPutProfileRequest {
    /**
     * 
     * @type string
     * @memberof UserApiputProfile
     */
    id: string
    /**
     * 
     * @type PutProfileBody
     * @memberof UserApiputProfile
     */
    putProfileBody: PutProfileBody
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getCurrentUserWithHttpInfo(param: UserApiGetCurrentUserRequest = {}, options?: Configuration): Promise<HttpInfo<UserModel>> {
        return this.api.getCurrentUserWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCurrentUser(param: UserApiGetCurrentUserRequest = {}, options?: Configuration): Promise<UserModel> {
        return this.api.getCurrentUser( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUserWithHttpInfo(param: UserApiGetUserRequest, options?: Configuration): Promise<HttpInfo<UserModel>> {
        return this.api.getUserWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUser(param: UserApiGetUserRequest, options?: Configuration): Promise<UserModel> {
        return this.api.getUser(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listUsersWithHttpInfo(param: UserApiListUsersRequest = {}, options?: Configuration): Promise<HttpInfo<ListUsersResponse>> {
        return this.api.listUsersWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public listUsers(param: UserApiListUsersRequest = {}, options?: Configuration): Promise<ListUsersResponse> {
        return this.api.listUsers( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loginWithHttpInfo(param: UserApiLoginRequest, options?: Configuration): Promise<HttpInfo<UserModel>> {
        return this.api.loginWithHttpInfo(param.authorization, param.referer, param.xTTImpersonatedUserId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public login(param: UserApiLoginRequest, options?: Configuration): Promise<UserModel> {
        return this.api.login(param.authorization, param.referer, param.xTTImpersonatedUserId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchUserWithHttpInfo(param: UserApiPatchUserRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.patchUserWithHttpInfo(param.id, param.patchUserModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchUser(param: UserApiPatchUserRequest, options?: Configuration): Promise<any> {
        return this.api.patchUser(param.id, param.patchUserModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postGoogleConsentWithHttpInfo(param: UserApiPostGoogleConsentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.postGoogleConsentWithHttpInfo(param.googleConsentBody, param.origin,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postGoogleConsent(param: UserApiPostGoogleConsentRequest, options?: Configuration): Promise<any> {
        return this.api.postGoogleConsent(param.googleConsentBody, param.origin,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postThirdPartyConsentWithHttpInfo(param: UserApiPostThirdPartyConsentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.postThirdPartyConsentWithHttpInfo(param.thirdPartyConsentBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postThirdPartyConsent(param: UserApiPostThirdPartyConsentRequest, options?: Configuration): Promise<any> {
        return this.api.postThirdPartyConsent(param.thirdPartyConsentBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putProfileWithHttpInfo(param: UserApiPutProfileRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.putProfileWithHttpInfo(param.id, param.putProfileBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putProfile(param: UserApiPutProfileRequest, options?: Configuration): Promise<any> {
        return this.api.putProfile(param.id, param.putProfileBody,  options).toPromise();
    }

}

import { ObservableWebhookApi } from "./ObservableAPI";
import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";

export interface WebhookApiReceiveWebhookRequest {
    /**
     * 
     * @type WebhookBody
     * @memberof WebhookApireceiveWebhook
     */
    webhookBody: WebhookBody
}

export class ObjectWebhookApi {
    private api: ObservableWebhookApi

    public constructor(configuration: Configuration, requestFactory?: WebhookApiRequestFactory, responseProcessor?: WebhookApiResponseProcessor) {
        this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public receiveWebhookWithHttpInfo(param: WebhookApiReceiveWebhookRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.receiveWebhookWithHttpInfo(param.webhookBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public receiveWebhook(param: WebhookApiReceiveWebhookRequest, options?: Configuration): Promise<any> {
        return this.api.receiveWebhook(param.webhookBody,  options).toPromise();
    }

}
