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
/**
 *
 * @export
 * @interface OidcWriteRoleRequest
 */
export interface OidcWriteRoleRequest {
    /**
     * Optional client_id
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    clientId?: string;
    /**
     * The OIDC key to use for generating tokens. The specified key must already exist.
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    key: string;
    /**
     * The template string to use for generating tokens. This may be in string-ified JSON or base64 format.
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    template?: string;
    /**
     * TTL of the tokens generated against the role.
     * @type {string}
     * @memberof OidcWriteRoleRequest
     */
    ttl?: string;
}
/**
 * Check if a given object implements the OidcWriteRoleRequest interface.
 */
export declare function instanceOfOidcWriteRoleRequest(value: object): value is OidcWriteRoleRequest;
export declare function OidcWriteRoleRequestFromJSON(json: any): OidcWriteRoleRequest;
export declare function OidcWriteRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OidcWriteRoleRequest;
export declare function OidcWriteRoleRequestToJSON(json: any): OidcWriteRoleRequest;
export declare function OidcWriteRoleRequestToJSONTyped(value?: OidcWriteRoleRequest | null, ignoreDiscriminator?: boolean): any;
