/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PkiGenerateExportedKeyResponse
 */
export interface PkiGenerateExportedKeyResponse {
    /**
     * ID assigned to this key.
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    keyId?: string;
    /**
     * Name assigned to this key.
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    keyName?: string;
    /**
     * The type of key to use; defaults to RSA. "rsa" "ec" and "ed25519" are the only valid values.
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    keyType?: string;
    /**
     * The private key string
     * @type {string}
     * @memberof PkiGenerateExportedKeyResponse
     */
    privateKey?: string;
}

/**
 * Check if a given object implements the PkiGenerateExportedKeyResponse interface.
 */
export function instanceOfPkiGenerateExportedKeyResponse(value: object): value is PkiGenerateExportedKeyResponse {
    return true;
}

export function PkiGenerateExportedKeyResponseFromJSON(json: any): PkiGenerateExportedKeyResponse {
    return PkiGenerateExportedKeyResponseFromJSONTyped(json, false);
}

export function PkiGenerateExportedKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiGenerateExportedKeyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'keyId': json['key_id'] == null ? undefined : json['key_id'],
        'keyName': json['key_name'] == null ? undefined : json['key_name'],
        'keyType': json['key_type'] == null ? undefined : json['key_type'],
        'privateKey': json['private_key'] == null ? undefined : json['private_key'],
    };
}

export function PkiGenerateExportedKeyResponseToJSON(json: any): PkiGenerateExportedKeyResponse {
    return PkiGenerateExportedKeyResponseToJSONTyped(json, false);
}

export function PkiGenerateExportedKeyResponseToJSONTyped(value?: PkiGenerateExportedKeyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key_id': value['keyId'],
        'key_name': value['keyName'],
        'key_type': value['keyType'],
        'private_key': value['privateKey'],
    };
}

