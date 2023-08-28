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

import { SmsNotificationModel } from '../models/SmsNotificationModel';
import { HttpFile } from '../http/http';

export class ReminderNotificationsModel {
    'timeBefore': string;
    'sms': SmsNotificationModel;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeBefore",
            "baseName": "timeBefore",
            "type": "string",
            "format": ""
        },
        {
            "name": "sms",
            "baseName": "sms",
            "type": "SmsNotificationModel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReminderNotificationsModel.attributeTypeMap;
    }

    public constructor() {
    }
}

