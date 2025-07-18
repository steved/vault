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
 * @interface RekeyAttemptReadProgressResponse
 */
export interface RekeyAttemptReadProgressResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RekeyAttemptReadProgressResponse
     */
    backup?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptReadProgressResponse
     */
    n?: number;
    /**
     * 
     * @type {string}
     * @memberof RekeyAttemptReadProgressResponse
     */
    nonce?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RekeyAttemptReadProgressResponse
     */
    pgpFingerprints?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptReadProgressResponse
     */
    progress?: number;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptReadProgressResponse
     */
    required?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RekeyAttemptReadProgressResponse
     */
    started?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RekeyAttemptReadProgressResponse
     */
    t?: number;
    /**
     * 
     * @type {string}
     * @memberof RekeyAttemptReadProgressResponse
     */
    verificationNonce?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RekeyAttemptReadProgressResponse
     */
    verificationRequired?: boolean;
}

/**
 * Check if a given object implements the RekeyAttemptReadProgressResponse interface.
 */
export function instanceOfRekeyAttemptReadProgressResponse(value: object): value is RekeyAttemptReadProgressResponse {
    return true;
}

export function RekeyAttemptReadProgressResponseFromJSON(json: any): RekeyAttemptReadProgressResponse {
    return RekeyAttemptReadProgressResponseFromJSONTyped(json, false);
}

export function RekeyAttemptReadProgressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RekeyAttemptReadProgressResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'backup': json['backup'] == null ? undefined : json['backup'],
        'n': json['n'] == null ? undefined : json['n'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'pgpFingerprints': json['pgp_fingerprints'] == null ? undefined : json['pgp_fingerprints'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'required': json['required'] == null ? undefined : json['required'],
        'started': json['started'] == null ? undefined : json['started'],
        't': json['t'] == null ? undefined : json['t'],
        'verificationNonce': json['verification_nonce'] == null ? undefined : json['verification_nonce'],
        'verificationRequired': json['verification_required'] == null ? undefined : json['verification_required'],
    };
}

export function RekeyAttemptReadProgressResponseToJSON(json: any): RekeyAttemptReadProgressResponse {
    return RekeyAttemptReadProgressResponseToJSONTyped(json, false);
}

export function RekeyAttemptReadProgressResponseToJSONTyped(value?: RekeyAttemptReadProgressResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'backup': value['backup'],
        'n': value['n'],
        'nonce': value['nonce'],
        'pgp_fingerprints': value['pgpFingerprints'],
        'progress': value['progress'],
        'required': value['required'],
        'started': value['started'],
        't': value['t'],
        'verification_nonce': value['verificationNonce'],
        'verification_required': value['verificationRequired'],
    };
}

