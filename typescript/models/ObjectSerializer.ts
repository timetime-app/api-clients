export * from '../models/AcceptedOrganizationInvite';
export * from '../models/AnsweredQuestionModel';
export * from '../models/ApiKeyModel';
export * from '../models/ApiKeysListModel';
export * from '../models/AvailableInGroupRule';
export * from '../models/BookedEventTypeModel';
export * from '../models/BookedResourceModel';
export * from '../models/BookerModel';
export * from '../models/BookerPhoneLocation';
export * from '../models/BookerSelectionLocation';
export * from '../models/BookingNotificationsModel';
export * from '../models/BookingRules';
export * from '../models/BookingsList';
export * from '../models/CancelBookingRequest';
export * from '../models/CancellationModel';
export * from '../models/ConfirmationNotificationsModel';
export * from '../models/CreateApiKeyBody';
export * from '../models/CreateApiKeyResponseModel';
export * from '../models/CreateBookingRequest';
export * from '../models/EmailQuestion';
export * from '../models/EvaluatedTimeSlotModel';
export * from '../models/EventTypeAvailabilityModel';
export * from '../models/EventTypeHostCalendarModel';
export * from '../models/EventTypeHostModel';
export * from '../models/EventTypeListItem';
export * from '../models/EventTypeQuestion';
export * from '../models/EventTypesListBody';
export * from '../models/ExternalBooking';
export * from '../models/ExternalBookingAnsweredQuestionModel';
export * from '../models/ExternalBookingEventTypeModel';
export * from '../models/ExternalBookingEventTypeOwnerModel';
export * from '../models/ExternalBookingValidationModel';
export * from '../models/FixedLocation';
export * from '../models/GetEventTypeModel';
export * from '../models/GoogleConsentBody';
export * from '../models/GoogleMeetLocation';
export * from '../models/ImageQuestion';
export * from '../models/InstantInterval';
export * from '../models/InviteOrganizationMember';
export * from '../models/ListUsersResponse';
export * from '../models/LocationModel';
export * from '../models/LocationOptionModel';
export * from '../models/LocationQuestion';
export * from '../models/MaxBookingsPerTimeUnit';
export * from '../models/MicrosoftOutlookLocation';
export * from '../models/Organization';
export * from '../models/OrganizationMember';
export * from '../models/OrganizationMembersList';
export * from '../models/OrganizationMembership';
export * from '../models/OrganizationsList';
export * from '../models/PasswordQuestion';
export * from '../models/PatchOrganizationMembership';
export * from '../models/PatchTenantMembershipModel';
export * from '../models/PatchUserModel';
export * from '../models/PhoneQuestion';
export * from '../models/ProblemDetail';
export * from '../models/PublicBookingModel';
export * from '../models/PublicProfile';
export * from '../models/PublicProfileLink';
export * from '../models/PublicProfileWriteModel';
export * from '../models/PublicProfilesList';
export * from '../models/PutEventTypeModel';
export * from '../models/PutEventTypeModelLocation';
export * from '../models/PutEventTypeModelQuestionsInner';
export * from '../models/PutOrganization';
export * from '../models/PutProfileBody';
export * from '../models/PutResource';
export * from '../models/PutResourceGroup';
export * from '../models/PutResourceInGroup';
export * from '../models/ReminderNotificationsModel';
export * from '../models/RepeatingAvailabilityModel';
export * from '../models/Resource';
export * from '../models/ResourceGroupId';
export * from '../models/ResourceGroupModel';
export * from '../models/ResourceGroupsListModel';
export * from '../models/ResourceId';
export * from '../models/ResourceRules';
export * from '../models/ResourcesList';
export * from '../models/ShareWithRequestModel';
export * from '../models/SmsNotificationModel';
export * from '../models/TenantMembershipModel';
export * from '../models/TextQuestion';
export * from '../models/ThirdPartyCalendarEvent';
export * from '../models/ThirdPartyCalendarEventsList';
export * from '../models/ThirdPartyCalendarId';
export * from '../models/ThirdPartyCalendarModel';
export * from '../models/ThirdPartyCalendarsModel';
export * from '../models/ThirdPartyConsentBody';
export * from '../models/TimeRange';
export * from '../models/Units';
export * from '../models/UsedBookingResource';
export * from '../models/UserModel';
export * from '../models/WebhookBody';

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
import { CancellationModel, CancellationModelCancelledByEnum     } from '../models/CancellationModel';
import { ConfirmationNotificationsModel } from '../models/ConfirmationNotificationsModel';
import { CreateApiKeyBody } from '../models/CreateApiKeyBody';
import { CreateApiKeyResponseModel } from '../models/CreateApiKeyResponseModel';
import { CreateBookingRequest } from '../models/CreateBookingRequest';
import { EmailQuestion } from '../models/EmailQuestion';
import { EvaluatedTimeSlotModel } from '../models/EvaluatedTimeSlotModel';
import { EventTypeAvailabilityModel } from '../models/EventTypeAvailabilityModel';
import { EventTypeHostCalendarModel } from '../models/EventTypeHostCalendarModel';
import { EventTypeHostModel  , EventTypeHostModelRoleEnum    } from '../models/EventTypeHostModel';
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
import { InviteOrganizationMember , InviteOrganizationMemberRolesEnum   } from '../models/InviteOrganizationMember';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { LocationModel } from '../models/LocationModel';
import { LocationOptionModel } from '../models/LocationOptionModel';
import { LocationQuestion } from '../models/LocationQuestion';
import { MaxBookingsPerTimeUnit } from '../models/MaxBookingsPerTimeUnit';
import { MicrosoftOutlookLocation } from '../models/MicrosoftOutlookLocation';
import { Organization } from '../models/Organization';
import { OrganizationMember  , OrganizationMemberRolesEnum   } from '../models/OrganizationMember';
import { OrganizationMembersList } from '../models/OrganizationMembersList';
import { OrganizationMembership , OrganizationMembershipRolesEnum   } from '../models/OrganizationMembership';
import { OrganizationsList } from '../models/OrganizationsList';
import { PasswordQuestion } from '../models/PasswordQuestion';
import { PatchOrganizationMembership, PatchOrganizationMembershipRolesEnum   } from '../models/PatchOrganizationMembership';
import { PatchTenantMembershipModel, PatchTenantMembershipModelRoleEnum   } from '../models/PatchTenantMembershipModel';
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
import { PutProfileBody  , PutProfileBodyLocaleEnum     } from '../models/PutProfileBody';
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
import { ThirdPartyConsentBody , ThirdPartyConsentBodyProviderEnum   } from '../models/ThirdPartyConsentBody';
import { TimeRange } from '../models/TimeRange';
import { Units } from '../models/Units';
import { UsedBookingResource } from '../models/UsedBookingResource';
import { UserModel   , UserModelLocaleEnum         } from '../models/UserModel';
import { WebhookBody } from '../models/WebhookBody';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/json-patch+json": 1,
  "application/merge-patch+json": 1,
  "application/strategic-merge-patch+json": 1,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "CancellationModelCancelledByEnum",
    "EventTypeHostModelRoleEnum",
    "InviteOrganizationMemberRolesEnum",
    "OrganizationMemberRolesEnum",
    "OrganizationMembershipRolesEnum",
    "PatchOrganizationMembershipRolesEnum",
    "PatchTenantMembershipModelRoleEnum",
    "PutProfileBodyLocaleEnum",
    "ThirdPartyConsentBodyProviderEnum",
    "UserModelLocaleEnum",
]);

let typeMap: {[index: string]: any} = {
    "AcceptedOrganizationInvite": AcceptedOrganizationInvite,
    "AnsweredQuestionModel": AnsweredQuestionModel,
    "ApiKeyModel": ApiKeyModel,
    "ApiKeysListModel": ApiKeysListModel,
    "AvailableInGroupRule": AvailableInGroupRule,
    "BookedEventTypeModel": BookedEventTypeModel,
    "BookedResourceModel": BookedResourceModel,
    "BookerModel": BookerModel,
    "BookerPhoneLocation": BookerPhoneLocation,
    "BookerSelectionLocation": BookerSelectionLocation,
    "BookingNotificationsModel": BookingNotificationsModel,
    "BookingRules": BookingRules,
    "BookingsList": BookingsList,
    "CancelBookingRequest": CancelBookingRequest,
    "CancellationModel": CancellationModel,
    "ConfirmationNotificationsModel": ConfirmationNotificationsModel,
    "CreateApiKeyBody": CreateApiKeyBody,
    "CreateApiKeyResponseModel": CreateApiKeyResponseModel,
    "CreateBookingRequest": CreateBookingRequest,
    "EmailQuestion": EmailQuestion,
    "EvaluatedTimeSlotModel": EvaluatedTimeSlotModel,
    "EventTypeAvailabilityModel": EventTypeAvailabilityModel,
    "EventTypeHostCalendarModel": EventTypeHostCalendarModel,
    "EventTypeHostModel": EventTypeHostModel,
    "EventTypeListItem": EventTypeListItem,
    "EventTypeQuestion": EventTypeQuestion,
    "EventTypesListBody": EventTypesListBody,
    "ExternalBooking": ExternalBooking,
    "ExternalBookingAnsweredQuestionModel": ExternalBookingAnsweredQuestionModel,
    "ExternalBookingEventTypeModel": ExternalBookingEventTypeModel,
    "ExternalBookingEventTypeOwnerModel": ExternalBookingEventTypeOwnerModel,
    "ExternalBookingValidationModel": ExternalBookingValidationModel,
    "FixedLocation": FixedLocation,
    "GetEventTypeModel": GetEventTypeModel,
    "GoogleConsentBody": GoogleConsentBody,
    "GoogleMeetLocation": GoogleMeetLocation,
    "ImageQuestion": ImageQuestion,
    "InstantInterval": InstantInterval,
    "InviteOrganizationMember": InviteOrganizationMember,
    "ListUsersResponse": ListUsersResponse,
    "LocationModel": LocationModel,
    "LocationOptionModel": LocationOptionModel,
    "LocationQuestion": LocationQuestion,
    "MaxBookingsPerTimeUnit": MaxBookingsPerTimeUnit,
    "MicrosoftOutlookLocation": MicrosoftOutlookLocation,
    "Organization": Organization,
    "OrganizationMember": OrganizationMember,
    "OrganizationMembersList": OrganizationMembersList,
    "OrganizationMembership": OrganizationMembership,
    "OrganizationsList": OrganizationsList,
    "PasswordQuestion": PasswordQuestion,
    "PatchOrganizationMembership": PatchOrganizationMembership,
    "PatchTenantMembershipModel": PatchTenantMembershipModel,
    "PatchUserModel": PatchUserModel,
    "PhoneQuestion": PhoneQuestion,
    "ProblemDetail": ProblemDetail,
    "PublicBookingModel": PublicBookingModel,
    "PublicProfile": PublicProfile,
    "PublicProfileLink": PublicProfileLink,
    "PublicProfileWriteModel": PublicProfileWriteModel,
    "PublicProfilesList": PublicProfilesList,
    "PutEventTypeModel": PutEventTypeModel,
    "PutEventTypeModelLocation": PutEventTypeModelLocation,
    "PutEventTypeModelQuestionsInner": PutEventTypeModelQuestionsInner,
    "PutOrganization": PutOrganization,
    "PutProfileBody": PutProfileBody,
    "PutResource": PutResource,
    "PutResourceGroup": PutResourceGroup,
    "PutResourceInGroup": PutResourceInGroup,
    "ReminderNotificationsModel": ReminderNotificationsModel,
    "RepeatingAvailabilityModel": RepeatingAvailabilityModel,
    "Resource": Resource,
    "ResourceGroupId": ResourceGroupId,
    "ResourceGroupModel": ResourceGroupModel,
    "ResourceGroupsListModel": ResourceGroupsListModel,
    "ResourceId": ResourceId,
    "ResourceRules": ResourceRules,
    "ResourcesList": ResourcesList,
    "ShareWithRequestModel": ShareWithRequestModel,
    "SmsNotificationModel": SmsNotificationModel,
    "TenantMembershipModel": TenantMembershipModel,
    "TextQuestion": TextQuestion,
    "ThirdPartyCalendarEvent": ThirdPartyCalendarEvent,
    "ThirdPartyCalendarEventsList": ThirdPartyCalendarEventsList,
    "ThirdPartyCalendarId": ThirdPartyCalendarId,
    "ThirdPartyCalendarModel": ThirdPartyCalendarModel,
    "ThirdPartyCalendarsModel": ThirdPartyCalendarsModel,
    "ThirdPartyConsentBody": ThirdPartyConsentBody,
    "TimeRange": TimeRange,
    "Units": Units,
    "UsedBookingResource": UsedBookingResource,
    "UserModel": UserModel,
    "WebhookBody": WebhookBody,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
