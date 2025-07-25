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
 * @interface PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest
 */
export interface PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest interface.
 */
export function instanceOfPkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest(value: object): value is PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest {
    return true;
}

export function PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequestFromJSON(json: any): PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest {
    return PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequestFromJSONTyped(json, false);
}

export function PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequestToJSON(json: any): PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest {
    return PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequestToJSONTyped(json, false);
}

export function PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequestToJSONTyped(value?: PkiWriteExternalPolicyAcmeAuthorizationAuthIdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

