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
import { ObservableApiKeyApi } from './ObservableAPI';

import { ApiKeyApiRequestFactory, ApiKeyApiResponseProcessor} from "../apis/ApiKeyApi";
export class PromiseApiKeyApi {
    private api: ObservableApiKeyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiKeyApiRequestFactory,
        responseProcessor?: ApiKeyApiResponseProcessor
    ) {
        this.api = new ObservableApiKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createApiKeyBody 
     */
    public createApiKeyWithHttpInfo(createApiKeyBody: CreateApiKeyBody, _options?: Configuration): Promise<HttpInfo<CreateApiKeyResponseModel>> {
        const result = this.api.createApiKeyWithHttpInfo(createApiKeyBody, _options);
        return result.toPromise();
    }

    /**
     * @param createApiKeyBody 
     */
    public createApiKey(createApiKeyBody: CreateApiKeyBody, _options?: Configuration): Promise<CreateApiKeyResponseModel> {
        const result = this.api.createApiKey(createApiKeyBody, _options);
        return result.toPromise();
    }

    /**
     */
    public listUserApiKeysWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ApiKeysListModel>> {
        const result = this.api.listUserApiKeysWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public listUserApiKeys(_options?: Configuration): Promise<ApiKeysListModel> {
        const result = this.api.listUserApiKeys(_options);
        return result.toPromise();
    }


}



import { ObservableBookingApi } from './ObservableAPI';

import { BookingApiRequestFactory, BookingApiResponseProcessor} from "../apis/BookingApi";
export class PromiseBookingApi {
    private api: ObservableBookingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BookingApiRequestFactory,
        responseProcessor?: BookingApiResponseProcessor
    ) {
        this.api = new ObservableBookingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param cancelBookingRequest 
     */
    public cancelWithHttpInfo(id: string, cancelBookingRequest?: CancelBookingRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cancelWithHttpInfo(id, cancelBookingRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param cancelBookingRequest 
     */
    public cancel(id: string, cancelBookingRequest?: CancelBookingRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cancel(id, cancelBookingRequest, _options);
        return result.toPromise();
    }

    /**
     * @param createBookingRequest 
     */
    public createBookingWithHttpInfo(createBookingRequest: CreateBookingRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createBookingWithHttpInfo(createBookingRequest, _options);
        return result.toPromise();
    }

    /**
     * @param createBookingRequest 
     */
    public createBooking(createBookingRequest: CreateBookingRequest, _options?: Configuration): Promise<any> {
        const result = this.api.createBooking(createBookingRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param externalBooking 
     */
    public createExternalBookingWithHttpInfo(id: string, externalBooking: ExternalBooking, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createExternalBookingWithHttpInfo(id, externalBooking, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param externalBooking 
     */
    public createExternalBooking(id: string, externalBooking: ExternalBooking, _options?: Configuration): Promise<any> {
        const result = this.api.createExternalBooking(id, externalBooking, _options);
        return result.toPromise();
    }

    /**
     * @param externalBookingValidationModel 
     */
    public externalValidationExampleWithHttpInfo(externalBookingValidationModel: ExternalBookingValidationModel, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.externalValidationExampleWithHttpInfo(externalBookingValidationModel, _options);
        return result.toPromise();
    }

    /**
     * @param externalBookingValidationModel 
     */
    public externalValidationExample(externalBookingValidationModel: ExternalBookingValidationModel, _options?: Configuration): Promise<any> {
        const result = this.api.externalValidationExample(externalBookingValidationModel, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getBookingWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<PublicBookingModel>> {
        const result = this.api.getBookingWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getBooking(id: string, _options?: Configuration): Promise<PublicBookingModel> {
        const result = this.api.getBooking(id, _options);
        return result.toPromise();
    }

    /**
     * @param eventTypeId 
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     */
    public getThirdPartyCalendarEventsByEventTypeWithHttpInfo(eventTypeId: string, _from?: string, days?: number, _options?: Configuration): Promise<HttpInfo<ThirdPartyCalendarEventsList>> {
        const result = this.api.getThirdPartyCalendarEventsByEventTypeWithHttpInfo(eventTypeId, _from, days, _options);
        return result.toPromise();
    }

    /**
     * @param eventTypeId 
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     */
    public getThirdPartyCalendarEventsByEventType(eventTypeId: string, _from?: string, days?: number, _options?: Configuration): Promise<ThirdPartyCalendarEventsList> {
        const result = this.api.getThirdPartyCalendarEventsByEventType(eventTypeId, _from, days, _options);
        return result.toPromise();
    }

    /**
     * @param eventTypesUserId 
     * @param _from 
     * @param days 
     * @param eventTypeId 
     */
    public listBookingsWithHttpInfo(eventTypesUserId: string, _from?: Date, days?: number, eventTypeId?: string, _options?: Configuration): Promise<HttpInfo<BookingsList>> {
        const result = this.api.listBookingsWithHttpInfo(eventTypesUserId, _from, days, eventTypeId, _options);
        return result.toPromise();
    }

    /**
     * @param eventTypesUserId 
     * @param _from 
     * @param days 
     * @param eventTypeId 
     */
    public listBookings(eventTypesUserId: string, _from?: Date, days?: number, eventTypeId?: string, _options?: Configuration): Promise<BookingsList> {
        const result = this.api.listBookings(eventTypesUserId, _from, days, eventTypeId, _options);
        return result.toPromise();
    }


}



import { ObservableEventTypeApi } from './ObservableAPI';

import { EventTypeApiRequestFactory, EventTypeApiResponseProcessor} from "../apis/EventTypeApi";
export class PromiseEventTypeApi {
    private api: ObservableEventTypeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventTypeApiRequestFactory,
        responseProcessor?: EventTypeApiResponseProcessor
    ) {
        this.api = new ObservableEventTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     */
    public _deleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api._deleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public _delete(id: string, _options?: Configuration): Promise<any> {
        const result = this.api._delete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getEventTypeWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<GetEventTypeModel>> {
        const result = this.api.getEventTypeWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getEventType(id: string, _options?: Configuration): Promise<GetEventTypeModel> {
        const result = this.api.getEventType(id, _options);
        return result.toPromise();
    }

    /**
     * @param id  The event type identifier. This endpoint admits 2 different ways for identifying the event type:  1. The event type &#x60;UUID&#x60; (the same used when creating the event type). 2. The combination of the event owner slug + the event type slug, concatenated by \&#39;:\&#39;, example: &#x60;GET /v1/event-types/event-owner-slug:event-type-slug/availability&#x60;             
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     * @param units  For bookings with multiple units (e.g. a party booking a table in a restaurant) this is the parameter that specifies how many units need to be available to consider each time slot free and therefore bookable.  Only positive values are allowed.             
     * @param timeZone  The TimeZone id (IANA) to be used in combination with the \&quot;from\&quot; parameter to calculate the availability.             
     */
    public getEventTypeAvailabilityWithHttpInfo(id: string, _from?: string, days?: number, units?: number, timeZone?: string, _options?: Configuration): Promise<HttpInfo<EventTypeAvailabilityModel>> {
        const result = this.api.getEventTypeAvailabilityWithHttpInfo(id, _from, days, units, timeZone, _options);
        return result.toPromise();
    }

    /**
     * @param id  The event type identifier. This endpoint admits 2 different ways for identifying the event type:  1. The event type &#x60;UUID&#x60; (the same used when creating the event type). 2. The combination of the event owner slug + the event type slug, concatenated by \&#39;:\&#39;, example: &#x60;GET /v1/event-types/event-owner-slug:event-type-slug/availability&#x60;             
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     * @param units  For bookings with multiple units (e.g. a party booking a table in a restaurant) this is the parameter that specifies how many units need to be available to consider each time slot free and therefore bookable.  Only positive values are allowed.             
     * @param timeZone  The TimeZone id (IANA) to be used in combination with the \&quot;from\&quot; parameter to calculate the availability.             
     */
    public getEventTypeAvailability(id: string, _from?: string, days?: number, units?: number, timeZone?: string, _options?: Configuration): Promise<EventTypeAvailabilityModel> {
        const result = this.api.getEventTypeAvailability(id, _from, days, units, timeZone, _options);
        return result.toPromise();
    }

    /**
     * @param ownerId 
     */
    public listEventTypesByOwnerIdWithHttpInfo(ownerId: string, _options?: Configuration): Promise<HttpInfo<EventTypesListBody>> {
        const result = this.api.listEventTypesByOwnerIdWithHttpInfo(ownerId, _options);
        return result.toPromise();
    }

    /**
     * @param ownerId 
     */
    public listEventTypesByOwnerId(ownerId: string, _options?: Configuration): Promise<EventTypesListBody> {
        const result = this.api.listEventTypesByOwnerId(ownerId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putEventTypeModel 
     */
    public putEventTypeWithHttpInfo(id: string, putEventTypeModel: PutEventTypeModel, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.putEventTypeWithHttpInfo(id, putEventTypeModel, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putEventTypeModel 
     */
    public putEventType(id: string, putEventTypeModel: PutEventTypeModel, _options?: Configuration): Promise<any> {
        const result = this.api.putEventType(id, putEventTypeModel, _options);
        return result.toPromise();
    }


}



import { ObservableOrganizationsApi } from './ObservableAPI';

import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class PromiseOrganizationsApi {
    private api: ObservableOrganizationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param orgId 
     * @param userId 
     */
    public deleteOrganizationMemberWithHttpInfo(orgId: string, userId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteOrganizationMemberWithHttpInfo(orgId, userId, _options);
        return result.toPromise();
    }

    /**
     * @param orgId 
     * @param userId 
     */
    public deleteOrganizationMember(orgId: string, userId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteOrganizationMember(orgId, userId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteOrganizationMember1WithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteOrganizationMember1WithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteOrganizationMember1(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteOrganizationMember1(id, _options);
        return result.toPromise();
    }

    /**
     * @param orgId 
     */
    public listOrganizationMembersWithHttpInfo(orgId: string, _options?: Configuration): Promise<HttpInfo<OrganizationMembersList>> {
        const result = this.api.listOrganizationMembersWithHttpInfo(orgId, _options);
        return result.toPromise();
    }

    /**
     * @param orgId 
     */
    public listOrganizationMembers(orgId: string, _options?: Configuration): Promise<OrganizationMembersList> {
        const result = this.api.listOrganizationMembers(orgId, _options);
        return result.toPromise();
    }

    /**
     */
    public listOrganizationsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<OrganizationsList>> {
        const result = this.api.listOrganizationsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public listOrganizations(_options?: Configuration): Promise<OrganizationsList> {
        const result = this.api.listOrganizations(_options);
        return result.toPromise();
    }

    /**
     * @param orgId 
     * @param userId 
     * @param patchOrganizationMembership 
     */
    public patchOrganizationMembershipWithHttpInfo(orgId: string, userId: string, patchOrganizationMembership: PatchOrganizationMembership, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.patchOrganizationMembershipWithHttpInfo(orgId, userId, patchOrganizationMembership, _options);
        return result.toPromise();
    }

    /**
     * @param orgId 
     * @param userId 
     * @param patchOrganizationMembership 
     */
    public patchOrganizationMembership(orgId: string, userId: string, patchOrganizationMembership: PatchOrganizationMembership, _options?: Configuration): Promise<any> {
        const result = this.api.patchOrganizationMembership(orgId, userId, patchOrganizationMembership, _options);
        return result.toPromise();
    }

    /**
     * @param orgId 
     * @param inviteOrganizationMember 
     */
    public postOrganizationMemberWithHttpInfo(orgId: string, inviteOrganizationMember: InviteOrganizationMember, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.postOrganizationMemberWithHttpInfo(orgId, inviteOrganizationMember, _options);
        return result.toPromise();
    }

    /**
     * @param orgId 
     * @param inviteOrganizationMember 
     */
    public postOrganizationMember(orgId: string, inviteOrganizationMember: InviteOrganizationMember, _options?: Configuration): Promise<any> {
        const result = this.api.postOrganizationMember(orgId, inviteOrganizationMember, _options);
        return result.toPromise();
    }

    /**
     * @param acceptedOrganizationInvite 
     */
    public postOrganizationMember1WithHttpInfo(acceptedOrganizationInvite: AcceptedOrganizationInvite, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.postOrganizationMember1WithHttpInfo(acceptedOrganizationInvite, _options);
        return result.toPromise();
    }

    /**
     * @param acceptedOrganizationInvite 
     */
    public postOrganizationMember1(acceptedOrganizationInvite: AcceptedOrganizationInvite, _options?: Configuration): Promise<any> {
        const result = this.api.postOrganizationMember1(acceptedOrganizationInvite, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putOrganization 
     */
    public putOrganizationWithHttpInfo(id: string, putOrganization: PutOrganization, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.putOrganizationWithHttpInfo(id, putOrganization, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putOrganization 
     */
    public putOrganization(id: string, putOrganization: PutOrganization, _options?: Configuration): Promise<any> {
        const result = this.api.putOrganization(id, putOrganization, _options);
        return result.toPromise();
    }


}



import { ObservablePublicProfileApi } from './ObservableAPI';

import { PublicProfileApiRequestFactory, PublicProfileApiResponseProcessor} from "../apis/PublicProfileApi";
export class PromisePublicProfileApi {
    private api: ObservablePublicProfileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicProfileApiRequestFactory,
        responseProcessor?: PublicProfileApiResponseProcessor
    ) {
        this.api = new ObservablePublicProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     */
    public deletePublicProfileWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deletePublicProfileWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deletePublicProfile(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePublicProfile(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getPublicProfileWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<PublicProfile>> {
        const result = this.api.getPublicProfileWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getPublicProfile(id: string, _options?: Configuration): Promise<PublicProfile> {
        const result = this.api.getPublicProfile(id, _options);
        return result.toPromise();
    }

    /**
     * @param slug 
     */
    public getSharedPublicProfileWithHttpInfo(slug: string, _options?: Configuration): Promise<HttpInfo<PublicProfile>> {
        const result = this.api.getSharedPublicProfileWithHttpInfo(slug, _options);
        return result.toPromise();
    }

    /**
     * @param slug 
     */
    public getSharedPublicProfile(slug: string, _options?: Configuration): Promise<PublicProfile> {
        const result = this.api.getSharedPublicProfile(slug, _options);
        return result.toPromise();
    }

    /**
     */
    public listPublicProfilesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<PublicProfilesList>> {
        const result = this.api.listPublicProfilesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public listPublicProfiles(_options?: Configuration): Promise<PublicProfilesList> {
        const result = this.api.listPublicProfiles(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param publicProfileWriteModel 
     */
    public putPublicProfileWithHttpInfo(id: string, publicProfileWriteModel: PublicProfileWriteModel, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.putPublicProfileWithHttpInfo(id, publicProfileWriteModel, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param publicProfileWriteModel 
     */
    public putPublicProfile(id: string, publicProfileWriteModel: PublicProfileWriteModel, _options?: Configuration): Promise<any> {
        const result = this.api.putPublicProfile(id, publicProfileWriteModel, _options);
        return result.toPromise();
    }


}



import { ObservableResourcesApi } from './ObservableAPI';

import { ResourcesApiRequestFactory, ResourcesApiResponseProcessor} from "../apis/ResourcesApi";
export class PromiseResourcesApi {
    private api: ObservableResourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ResourcesApiRequestFactory,
        responseProcessor?: ResourcesApiResponseProcessor
    ) {
        this.api = new ObservableResourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     */
    public deleteResourceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteResourceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteResource(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteResource(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteResourceGroupWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteResourceGroupWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteResourceGroup(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteResourceGroup(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getResourceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<Resource>> {
        const result = this.api.getResourceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getResource(id: string, _options?: Configuration): Promise<Resource> {
        const result = this.api.getResource(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getResourceGroupWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<ResourceGroupModel>> {
        const result = this.api.getResourceGroupWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getResourceGroup(id: string, _options?: Configuration): Promise<ResourceGroupModel> {
        const result = this.api.getResourceGroup(id, _options);
        return result.toPromise();
    }

    /**
     */
    public listResourceGroupsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ResourceGroupsListModel>> {
        const result = this.api.listResourceGroupsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public listResourceGroups(_options?: Configuration): Promise<ResourceGroupsListModel> {
        const result = this.api.listResourceGroups(_options);
        return result.toPromise();
    }

    /**
     */
    public listResourcesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ResourcesList>> {
        const result = this.api.listResourcesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public listResources(_options?: Configuration): Promise<ResourcesList> {
        const result = this.api.listResources(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putResource 
     */
    public putResourceWithHttpInfo(id: string, putResource: PutResource, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.putResourceWithHttpInfo(id, putResource, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putResource 
     */
    public putResource(id: string, putResource: PutResource, _options?: Configuration): Promise<any> {
        const result = this.api.putResource(id, putResource, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putResourceGroup 
     */
    public putResourceGroupWithHttpInfo(id: string, putResourceGroup: PutResourceGroup, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.putResourceGroupWithHttpInfo(id, putResourceGroup, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putResourceGroup 
     */
    public putResourceGroup(id: string, putResourceGroup: PutResourceGroup, _options?: Configuration): Promise<any> {
        const result = this.api.putResourceGroup(id, putResourceGroup, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getCurrentUserWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserModel>> {
        const result = this.api.getCurrentUserWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getCurrentUser(_options?: Configuration): Promise<UserModel> {
        const result = this.api.getCurrentUser(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getUserWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserModel>> {
        const result = this.api.getUserWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getUser(id: string, _options?: Configuration): Promise<UserModel> {
        const result = this.api.getUser(id, _options);
        return result.toPromise();
    }

    /**
     */
    public listUsersWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ListUsersResponse>> {
        const result = this.api.listUsersWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public listUsers(_options?: Configuration): Promise<ListUsersResponse> {
        const result = this.api.listUsers(_options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param referer 
     * @param xTTImpersonatedUserId 
     */
    public loginWithHttpInfo(authorization: string, referer?: string, xTTImpersonatedUserId?: string, _options?: Configuration): Promise<HttpInfo<UserModel>> {
        const result = this.api.loginWithHttpInfo(authorization, referer, xTTImpersonatedUserId, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param referer 
     * @param xTTImpersonatedUserId 
     */
    public login(authorization: string, referer?: string, xTTImpersonatedUserId?: string, _options?: Configuration): Promise<UserModel> {
        const result = this.api.login(authorization, referer, xTTImpersonatedUserId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param patchUserModel 
     */
    public patchUserWithHttpInfo(id: string, patchUserModel: PatchUserModel, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.patchUserWithHttpInfo(id, patchUserModel, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param patchUserModel 
     */
    public patchUser(id: string, patchUserModel: PatchUserModel, _options?: Configuration): Promise<any> {
        const result = this.api.patchUser(id, patchUserModel, _options);
        return result.toPromise();
    }

    /**
     * @param googleConsentBody 
     * @param origin 
     */
    public postGoogleConsentWithHttpInfo(googleConsentBody: GoogleConsentBody, origin?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.postGoogleConsentWithHttpInfo(googleConsentBody, origin, _options);
        return result.toPromise();
    }

    /**
     * @param googleConsentBody 
     * @param origin 
     */
    public postGoogleConsent(googleConsentBody: GoogleConsentBody, origin?: string, _options?: Configuration): Promise<any> {
        const result = this.api.postGoogleConsent(googleConsentBody, origin, _options);
        return result.toPromise();
    }

    /**
     * @param thirdPartyConsentBody 
     */
    public postThirdPartyConsentWithHttpInfo(thirdPartyConsentBody: ThirdPartyConsentBody, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.postThirdPartyConsentWithHttpInfo(thirdPartyConsentBody, _options);
        return result.toPromise();
    }

    /**
     * @param thirdPartyConsentBody 
     */
    public postThirdPartyConsent(thirdPartyConsentBody: ThirdPartyConsentBody, _options?: Configuration): Promise<any> {
        const result = this.api.postThirdPartyConsent(thirdPartyConsentBody, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putProfileBody 
     */
    public putProfileWithHttpInfo(id: string, putProfileBody: PutProfileBody, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.putProfileWithHttpInfo(id, putProfileBody, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param putProfileBody 
     */
    public putProfile(id: string, putProfileBody: PutProfileBody, _options?: Configuration): Promise<any> {
        const result = this.api.putProfile(id, putProfileBody, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookApi } from './ObservableAPI';

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
export class PromiseWebhookApi {
    private api: ObservableWebhookApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookApiRequestFactory,
        responseProcessor?: WebhookApiResponseProcessor
    ) {
        this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param webhookBody 
     */
    public receiveWebhookWithHttpInfo(webhookBody: WebhookBody, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.receiveWebhookWithHttpInfo(webhookBody, _options);
        return result.toPromise();
    }

    /**
     * @param webhookBody 
     */
    public receiveWebhook(webhookBody: WebhookBody, _options?: Configuration): Promise<any> {
        const result = this.api.receiveWebhook(webhookBody, _options);
        return result.toPromise();
    }


}



