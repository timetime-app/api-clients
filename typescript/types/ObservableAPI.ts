import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ApiKeyApiRequestFactory, ApiKeyApiResponseProcessor} from "../apis/ApiKeyApi";
export class ObservableApiKeyApi {
    private requestFactory: ApiKeyApiRequestFactory;
    private responseProcessor: ApiKeyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiKeyApiRequestFactory,
        responseProcessor?: ApiKeyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiKeyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiKeyApiResponseProcessor();
    }

    /**
     * @param createApiKeyBody 
     */
    public createApiKeyWithHttpInfo(createApiKeyBody: CreateApiKeyBody, _options?: Configuration): Observable<HttpInfo<CreateApiKeyResponseModel>> {
        const requestContextPromise = this.requestFactory.createApiKey(createApiKeyBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createApiKeyBody 
     */
    public createApiKey(createApiKeyBody: CreateApiKeyBody, _options?: Configuration): Observable<CreateApiKeyResponseModel> {
        return this.createApiKeyWithHttpInfo(createApiKeyBody, _options).pipe(map((apiResponse: HttpInfo<CreateApiKeyResponseModel>) => apiResponse.data));
    }

    /**
     */
    public listUserApiKeysWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ApiKeysListModel>> {
        const requestContextPromise = this.requestFactory.listUserApiKeys(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUserApiKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public listUserApiKeys(_options?: Configuration): Observable<ApiKeysListModel> {
        return this.listUserApiKeysWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApiKeysListModel>) => apiResponse.data));
    }

}

import { BookingApiRequestFactory, BookingApiResponseProcessor} from "../apis/BookingApi";
export class ObservableBookingApi {
    private requestFactory: BookingApiRequestFactory;
    private responseProcessor: BookingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BookingApiRequestFactory,
        responseProcessor?: BookingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BookingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BookingApiResponseProcessor();
    }

    /**
     * @param id 
     * @param cancelBookingRequest 
     */
    public cancelWithHttpInfo(id: string, cancelBookingRequest?: CancelBookingRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cancel(id, cancelBookingRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param cancelBookingRequest 
     */
    public cancel(id: string, cancelBookingRequest?: CancelBookingRequest, _options?: Configuration): Observable<any> {
        return this.cancelWithHttpInfo(id, cancelBookingRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param createBookingRequest 
     */
    public createBookingWithHttpInfo(createBookingRequest: CreateBookingRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createBooking(createBookingRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBookingWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createBookingRequest 
     */
    public createBooking(createBookingRequest: CreateBookingRequest, _options?: Configuration): Observable<any> {
        return this.createBookingWithHttpInfo(createBookingRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param externalBooking 
     */
    public createExternalBookingWithHttpInfo(id: string, externalBooking: ExternalBooking, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createExternalBooking(id, externalBooking, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createExternalBookingWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param externalBooking 
     */
    public createExternalBooking(id: string, externalBooking: ExternalBooking, _options?: Configuration): Observable<any> {
        return this.createExternalBookingWithHttpInfo(id, externalBooking, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param externalBookingValidationModel 
     */
    public externalValidationExampleWithHttpInfo(externalBookingValidationModel: ExternalBookingValidationModel, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.externalValidationExample(externalBookingValidationModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.externalValidationExampleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param externalBookingValidationModel 
     */
    public externalValidationExample(externalBookingValidationModel: ExternalBookingValidationModel, _options?: Configuration): Observable<any> {
        return this.externalValidationExampleWithHttpInfo(externalBookingValidationModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getBookingWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<PublicBookingModel>> {
        const requestContextPromise = this.requestFactory.getBooking(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBookingWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getBooking(id: string, _options?: Configuration): Observable<PublicBookingModel> {
        return this.getBookingWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PublicBookingModel>) => apiResponse.data));
    }

    /**
     * @param eventTypeId 
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     */
    public getThirdPartyCalendarEventsByEventTypeWithHttpInfo(eventTypeId: string, _from?: string, days?: number, _options?: Configuration): Observable<HttpInfo<ThirdPartyCalendarEventsList>> {
        const requestContextPromise = this.requestFactory.getThirdPartyCalendarEventsByEventType(eventTypeId, _from, days, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getThirdPartyCalendarEventsByEventTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventTypeId 
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     */
    public getThirdPartyCalendarEventsByEventType(eventTypeId: string, _from?: string, days?: number, _options?: Configuration): Observable<ThirdPartyCalendarEventsList> {
        return this.getThirdPartyCalendarEventsByEventTypeWithHttpInfo(eventTypeId, _from, days, _options).pipe(map((apiResponse: HttpInfo<ThirdPartyCalendarEventsList>) => apiResponse.data));
    }

    /**
     * @param eventTypesUserId 
     * @param _from 
     * @param days 
     * @param eventTypeId 
     */
    public listBookingsWithHttpInfo(eventTypesUserId: string, _from?: Date, days?: number, eventTypeId?: string, _options?: Configuration): Observable<HttpInfo<BookingsList>> {
        const requestContextPromise = this.requestFactory.listBookings(eventTypesUserId, _from, days, eventTypeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listBookingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventTypesUserId 
     * @param _from 
     * @param days 
     * @param eventTypeId 
     */
    public listBookings(eventTypesUserId: string, _from?: Date, days?: number, eventTypeId?: string, _options?: Configuration): Observable<BookingsList> {
        return this.listBookingsWithHttpInfo(eventTypesUserId, _from, days, eventTypeId, _options).pipe(map((apiResponse: HttpInfo<BookingsList>) => apiResponse.data));
    }

}

import { EventTypeApiRequestFactory, EventTypeApiResponseProcessor} from "../apis/EventTypeApi";
export class ObservableEventTypeApi {
    private requestFactory: EventTypeApiRequestFactory;
    private responseProcessor: EventTypeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventTypeApiRequestFactory,
        responseProcessor?: EventTypeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventTypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventTypeApiResponseProcessor();
    }

    /**
     * @param id 
     */
    public _deleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory._delete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._deleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public _delete(id: string, _options?: Configuration): Observable<any> {
        return this._deleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getEventTypeWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<GetEventTypeModel>> {
        const requestContextPromise = this.requestFactory.getEventType(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getEventType(id: string, _options?: Configuration): Observable<GetEventTypeModel> {
        return this.getEventTypeWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<GetEventTypeModel>) => apiResponse.data));
    }

    /**
     * @param id  The event type identifier. This endpoint admits 2 different ways for identifying the event type:  1. The event type &#x60;UUID&#x60; (the same used when creating the event type). 2. The combination of the event owner slug + the event type slug, concatenated by \&#39;:\&#39;, example: &#x60;GET /v1/event-types/event-owner-slug:event-type-slug/availability&#x60;             
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     * @param units  For bookings with multiple units (e.g. a party booking a table in a restaurant) this is the parameter that specifies how many units need to be available to consider each time slot free and therefore bookable.  Only positive values are allowed.             
     * @param timeZone  The TimeZone id (IANA) to be used in combination with the \&quot;from\&quot; parameter to calculate the availability.             
     */
    public getEventTypeAvailabilityWithHttpInfo(id: string, _from?: string, days?: number, units?: number, timeZone?: string, _options?: Configuration): Observable<HttpInfo<EventTypeAvailabilityModel>> {
        const requestContextPromise = this.requestFactory.getEventTypeAvailability(id, _from, days, units, timeZone, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventTypeAvailabilityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id  The event type identifier. This endpoint admits 2 different ways for identifying the event type:  1. The event type &#x60;UUID&#x60; (the same used when creating the event type). 2. The combination of the event owner slug + the event type slug, concatenated by \&#39;:\&#39;, example: &#x60;GET /v1/event-types/event-owner-slug:event-type-slug/availability&#x60;             
     * @param _from  The starting date to get the availability in ISO-8601 format, example: &#x60;2021-01-01&#x60;.  If the parameter is not provided, the current day in the UTC time zone is used.             
     * @param days  Starting from the \&#39;from\&#39; value, this sets the limit day to verify the event availability.  Minimum allowed is &#x60;1&#x60;, and maximum is &#x60;14&#x60;.             
     * @param units  For bookings with multiple units (e.g. a party booking a table in a restaurant) this is the parameter that specifies how many units need to be available to consider each time slot free and therefore bookable.  Only positive values are allowed.             
     * @param timeZone  The TimeZone id (IANA) to be used in combination with the \&quot;from\&quot; parameter to calculate the availability.             
     */
    public getEventTypeAvailability(id: string, _from?: string, days?: number, units?: number, timeZone?: string, _options?: Configuration): Observable<EventTypeAvailabilityModel> {
        return this.getEventTypeAvailabilityWithHttpInfo(id, _from, days, units, timeZone, _options).pipe(map((apiResponse: HttpInfo<EventTypeAvailabilityModel>) => apiResponse.data));
    }

    /**
     * @param ownerId 
     */
    public listEventTypesByOwnerIdWithHttpInfo(ownerId: string, _options?: Configuration): Observable<HttpInfo<EventTypesListBody>> {
        const requestContextPromise = this.requestFactory.listEventTypesByOwnerId(ownerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEventTypesByOwnerIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param ownerId 
     */
    public listEventTypesByOwnerId(ownerId: string, _options?: Configuration): Observable<EventTypesListBody> {
        return this.listEventTypesByOwnerIdWithHttpInfo(ownerId, _options).pipe(map((apiResponse: HttpInfo<EventTypesListBody>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param putEventTypeModel 
     */
    public putEventTypeWithHttpInfo(id: string, putEventTypeModel: PutEventTypeModel, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.putEventType(id, putEventTypeModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putEventTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param putEventTypeModel 
     */
    public putEventType(id: string, putEventTypeModel: PutEventTypeModel, _options?: Configuration): Observable<any> {
        return this.putEventTypeWithHttpInfo(id, putEventTypeModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor} from "../apis/OrganizationsApi";
export class ObservableOrganizationsApi {
    private requestFactory: OrganizationsApiRequestFactory;
    private responseProcessor: OrganizationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationsApiRequestFactory,
        responseProcessor?: OrganizationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationsApiResponseProcessor();
    }

    /**
     * @param orgId 
     * @param userId 
     */
    public deleteOrganizationMemberWithHttpInfo(orgId: string, userId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteOrganizationMember(orgId, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganizationMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orgId 
     * @param userId 
     */
    public deleteOrganizationMember(orgId: string, userId: string, _options?: Configuration): Observable<any> {
        return this.deleteOrganizationMemberWithHttpInfo(orgId, userId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public deleteOrganizationMember1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteOrganizationMember1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganizationMember1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deleteOrganizationMember1(id: string, _options?: Configuration): Observable<any> {
        return this.deleteOrganizationMember1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param orgId 
     */
    public listOrganizationMembersWithHttpInfo(orgId: string, _options?: Configuration): Observable<HttpInfo<OrganizationMembersList>> {
        const requestContextPromise = this.requestFactory.listOrganizationMembers(orgId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationMembersWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orgId 
     */
    public listOrganizationMembers(orgId: string, _options?: Configuration): Observable<OrganizationMembersList> {
        return this.listOrganizationMembersWithHttpInfo(orgId, _options).pipe(map((apiResponse: HttpInfo<OrganizationMembersList>) => apiResponse.data));
    }

    /**
     */
    public listOrganizationsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<OrganizationsList>> {
        const requestContextPromise = this.requestFactory.listOrganizations(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public listOrganizations(_options?: Configuration): Observable<OrganizationsList> {
        return this.listOrganizationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<OrganizationsList>) => apiResponse.data));
    }

    /**
     * @param orgId 
     * @param userId 
     * @param patchOrganizationMembership 
     */
    public patchOrganizationMembershipWithHttpInfo(orgId: string, userId: string, patchOrganizationMembership: PatchOrganizationMembership, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.patchOrganizationMembership(orgId, userId, patchOrganizationMembership, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchOrganizationMembershipWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orgId 
     * @param userId 
     * @param patchOrganizationMembership 
     */
    public patchOrganizationMembership(orgId: string, userId: string, patchOrganizationMembership: PatchOrganizationMembership, _options?: Configuration): Observable<any> {
        return this.patchOrganizationMembershipWithHttpInfo(orgId, userId, patchOrganizationMembership, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param orgId 
     * @param inviteOrganizationMember 
     */
    public postOrganizationMemberWithHttpInfo(orgId: string, inviteOrganizationMember: InviteOrganizationMember, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.postOrganizationMember(orgId, inviteOrganizationMember, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postOrganizationMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orgId 
     * @param inviteOrganizationMember 
     */
    public postOrganizationMember(orgId: string, inviteOrganizationMember: InviteOrganizationMember, _options?: Configuration): Observable<any> {
        return this.postOrganizationMemberWithHttpInfo(orgId, inviteOrganizationMember, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param acceptedOrganizationInvite 
     */
    public postOrganizationMember1WithHttpInfo(acceptedOrganizationInvite: AcceptedOrganizationInvite, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.postOrganizationMember1(acceptedOrganizationInvite, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postOrganizationMember1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param acceptedOrganizationInvite 
     */
    public postOrganizationMember1(acceptedOrganizationInvite: AcceptedOrganizationInvite, _options?: Configuration): Observable<any> {
        return this.postOrganizationMember1WithHttpInfo(acceptedOrganizationInvite, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param putOrganization 
     */
    public putOrganizationWithHttpInfo(id: string, putOrganization: PutOrganization, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.putOrganization(id, putOrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param putOrganization 
     */
    public putOrganization(id: string, putOrganization: PutOrganization, _options?: Configuration): Observable<any> {
        return this.putOrganizationWithHttpInfo(id, putOrganization, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { PublicProfileApiRequestFactory, PublicProfileApiResponseProcessor} from "../apis/PublicProfileApi";
export class ObservablePublicProfileApi {
    private requestFactory: PublicProfileApiRequestFactory;
    private responseProcessor: PublicProfileApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicProfileApiRequestFactory,
        responseProcessor?: PublicProfileApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicProfileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicProfileApiResponseProcessor();
    }

    /**
     * @param id 
     */
    public deletePublicProfileWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deletePublicProfile(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePublicProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deletePublicProfile(id: string, _options?: Configuration): Observable<any> {
        return this.deletePublicProfileWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getPublicProfileWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<PublicProfile>> {
        const requestContextPromise = this.requestFactory.getPublicProfile(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPublicProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getPublicProfile(id: string, _options?: Configuration): Observable<PublicProfile> {
        return this.getPublicProfileWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PublicProfile>) => apiResponse.data));
    }

    /**
     * @param slug 
     */
    public getSharedPublicProfileWithHttpInfo(slug: string, _options?: Configuration): Observable<HttpInfo<PublicProfile>> {
        const requestContextPromise = this.requestFactory.getSharedPublicProfile(slug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSharedPublicProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param slug 
     */
    public getSharedPublicProfile(slug: string, _options?: Configuration): Observable<PublicProfile> {
        return this.getSharedPublicProfileWithHttpInfo(slug, _options).pipe(map((apiResponse: HttpInfo<PublicProfile>) => apiResponse.data));
    }

    /**
     */
    public listPublicProfilesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<PublicProfilesList>> {
        const requestContextPromise = this.requestFactory.listPublicProfiles(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPublicProfilesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public listPublicProfiles(_options?: Configuration): Observable<PublicProfilesList> {
        return this.listPublicProfilesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PublicProfilesList>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param publicProfileWriteModel 
     */
    public putPublicProfileWithHttpInfo(id: string, publicProfileWriteModel: PublicProfileWriteModel, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.putPublicProfile(id, publicProfileWriteModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putPublicProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param publicProfileWriteModel 
     */
    public putPublicProfile(id: string, publicProfileWriteModel: PublicProfileWriteModel, _options?: Configuration): Observable<any> {
        return this.putPublicProfileWithHttpInfo(id, publicProfileWriteModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { ResourcesApiRequestFactory, ResourcesApiResponseProcessor} from "../apis/ResourcesApi";
export class ObservableResourcesApi {
    private requestFactory: ResourcesApiRequestFactory;
    private responseProcessor: ResourcesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ResourcesApiRequestFactory,
        responseProcessor?: ResourcesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ResourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ResourcesApiResponseProcessor();
    }

    /**
     * @param id 
     */
    public deleteResourceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteResource(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteResourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deleteResource(id: string, _options?: Configuration): Observable<any> {
        return this.deleteResourceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public deleteResourceGroupWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteResourceGroup(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteResourceGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deleteResourceGroup(id: string, _options?: Configuration): Observable<any> {
        return this.deleteResourceGroupWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getResourceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.getResource(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getResource(id: string, _options?: Configuration): Observable<Resource> {
        return this.getResourceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getResourceGroupWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ResourceGroupModel>> {
        const requestContextPromise = this.requestFactory.getResourceGroup(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResourceGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getResourceGroup(id: string, _options?: Configuration): Observable<ResourceGroupModel> {
        return this.getResourceGroupWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ResourceGroupModel>) => apiResponse.data));
    }

    /**
     */
    public listResourceGroupsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ResourceGroupsListModel>> {
        const requestContextPromise = this.requestFactory.listResourceGroups(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listResourceGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public listResourceGroups(_options?: Configuration): Observable<ResourceGroupsListModel> {
        return this.listResourceGroupsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ResourceGroupsListModel>) => apiResponse.data));
    }

    /**
     */
    public listResourcesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ResourcesList>> {
        const requestContextPromise = this.requestFactory.listResources(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listResourcesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public listResources(_options?: Configuration): Observable<ResourcesList> {
        return this.listResourcesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ResourcesList>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param putResource 
     */
    public putResourceWithHttpInfo(id: string, putResource: PutResource, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.putResource(id, putResource, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putResourceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param putResource 
     */
    public putResource(id: string, putResource: PutResource, _options?: Configuration): Observable<any> {
        return this.putResourceWithHttpInfo(id, putResource, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param putResourceGroup 
     */
    public putResourceGroupWithHttpInfo(id: string, putResourceGroup: PutResourceGroup, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.putResourceGroup(id, putResourceGroup, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putResourceGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param putResourceGroup 
     */
    public putResourceGroup(id: string, putResourceGroup: PutResourceGroup, _options?: Configuration): Observable<any> {
        return this.putResourceGroupWithHttpInfo(id, putResourceGroup, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     */
    public getCurrentUserWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserModel>> {
        const requestContextPromise = this.requestFactory.getCurrentUser(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCurrentUserWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getCurrentUser(_options?: Configuration): Observable<UserModel> {
        return this.getCurrentUserWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserModel>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getUserWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserModel>> {
        const requestContextPromise = this.requestFactory.getUser(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getUser(id: string, _options?: Configuration): Observable<UserModel> {
        return this.getUserWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserModel>) => apiResponse.data));
    }

    /**
     */
    public listUsersWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListUsersResponse>> {
        const requestContextPromise = this.requestFactory.listUsers(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public listUsers(_options?: Configuration): Observable<ListUsersResponse> {
        return this.listUsersWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListUsersResponse>) => apiResponse.data));
    }

    /**
     * @param authorization 
     * @param referer 
     * @param xTTImpersonatedUserId 
     */
    public loginWithHttpInfo(authorization: string, referer?: string, xTTImpersonatedUserId?: string, _options?: Configuration): Observable<HttpInfo<UserModel>> {
        const requestContextPromise = this.requestFactory.login(authorization, referer, xTTImpersonatedUserId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param referer 
     * @param xTTImpersonatedUserId 
     */
    public login(authorization: string, referer?: string, xTTImpersonatedUserId?: string, _options?: Configuration): Observable<UserModel> {
        return this.loginWithHttpInfo(authorization, referer, xTTImpersonatedUserId, _options).pipe(map((apiResponse: HttpInfo<UserModel>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param patchUserModel 
     */
    public patchUserWithHttpInfo(id: string, patchUserModel: PatchUserModel, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.patchUser(id, patchUserModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param patchUserModel 
     */
    public patchUser(id: string, patchUserModel: PatchUserModel, _options?: Configuration): Observable<any> {
        return this.patchUserWithHttpInfo(id, patchUserModel, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param googleConsentBody 
     * @param origin 
     */
    public postGoogleConsentWithHttpInfo(googleConsentBody: GoogleConsentBody, origin?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.postGoogleConsent(googleConsentBody, origin, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postGoogleConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param googleConsentBody 
     * @param origin 
     */
    public postGoogleConsent(googleConsentBody: GoogleConsentBody, origin?: string, _options?: Configuration): Observable<any> {
        return this.postGoogleConsentWithHttpInfo(googleConsentBody, origin, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param thirdPartyConsentBody 
     */
    public postThirdPartyConsentWithHttpInfo(thirdPartyConsentBody: ThirdPartyConsentBody, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.postThirdPartyConsent(thirdPartyConsentBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postThirdPartyConsentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param thirdPartyConsentBody 
     */
    public postThirdPartyConsent(thirdPartyConsentBody: ThirdPartyConsentBody, _options?: Configuration): Observable<any> {
        return this.postThirdPartyConsentWithHttpInfo(thirdPartyConsentBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param putProfileBody 
     */
    public putProfileWithHttpInfo(id: string, putProfileBody: PutProfileBody, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.putProfile(id, putProfileBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param putProfileBody 
     */
    public putProfile(id: string, putProfileBody: PutProfileBody, _options?: Configuration): Observable<any> {
        return this.putProfileWithHttpInfo(id, putProfileBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
export class ObservableWebhookApi {
    private requestFactory: WebhookApiRequestFactory;
    private responseProcessor: WebhookApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookApiRequestFactory,
        responseProcessor?: WebhookApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookApiResponseProcessor();
    }

    /**
     * @param webhookBody 
     */
    public receiveWebhookWithHttpInfo(webhookBody: WebhookBody, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.receiveWebhook(webhookBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.receiveWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param webhookBody 
     */
    public receiveWebhook(webhookBody: WebhookBody, _options?: Configuration): Observable<any> {
        return this.receiveWebhookWithHttpInfo(webhookBody, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
