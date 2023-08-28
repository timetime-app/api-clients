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

import { PatchTenantMembershipModel } from '../models/PatchTenantMembershipModel';
import { HttpFile } from '../http/http';

export class PatchUserModel {
    'tenant': PatchTenantMembershipModel;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenant",
            "baseName": "tenant",
            "type": "PatchTenantMembershipModel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PatchUserModel.attributeTypeMap;
    }

    public constructor() {
    }
}

