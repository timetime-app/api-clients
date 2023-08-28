/**
 * timetime
 * timetime API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ThirdPartyCalendarId } from '../models/ThirdPartyCalendarId';
import { HttpFile } from '../http/http';

export class ThirdPartyCalendarsModel {
    'toSyncBookings': Set<ThirdPartyCalendarId>;
    'toVerifyAvailability': Set<ThirdPartyCalendarId>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "toSyncBookings",
            "baseName": "toSyncBookings",
            "type": "Set<ThirdPartyCalendarId>",
            "format": ""
        },
        {
            "name": "toVerifyAvailability",
            "baseName": "toVerifyAvailability",
            "type": "Set<ThirdPartyCalendarId>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ThirdPartyCalendarsModel.attributeTypeMap;
    }

    public constructor() {
    }
}

