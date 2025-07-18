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
/**
 * Check if a given object implements the AppRoleWriteCustomSecretIdRequest interface.
 */
export function instanceOfAppRoleWriteCustomSecretIdRequest(value) {
    return true;
}
export function AppRoleWriteCustomSecretIdRequestFromJSON(json) {
    return AppRoleWriteCustomSecretIdRequestFromJSONTyped(json, false);
}
export function AppRoleWriteCustomSecretIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cidrList': json['cidr_list'] == null ? undefined : json['cidr_list'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'numUses': json['num_uses'] == null ? undefined : json['num_uses'],
        'secretId': json['secret_id'] == null ? undefined : json['secret_id'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}
export function AppRoleWriteCustomSecretIdRequestToJSON(json) {
    return AppRoleWriteCustomSecretIdRequestToJSONTyped(json, false);
}
export function AppRoleWriteCustomSecretIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'cidr_list': value['cidrList'],
        'metadata': value['metadata'],
        'num_uses': value['numUses'],
        'secret_id': value['secretId'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
        'ttl': value['ttl'],
    };
}
