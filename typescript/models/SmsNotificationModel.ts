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

import { HttpFile } from '../http/http';

export class SmsNotificationModel {
    'enabled': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SmsNotificationModel.attributeTypeMap;
    }

    public constructor() {
    }
}

