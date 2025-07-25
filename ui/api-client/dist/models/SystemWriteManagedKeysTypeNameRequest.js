"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSystemWriteManagedKeysTypeNameRequest = instanceOfSystemWriteManagedKeysTypeNameRequest;
exports.SystemWriteManagedKeysTypeNameRequestFromJSON = SystemWriteManagedKeysTypeNameRequestFromJSON;
exports.SystemWriteManagedKeysTypeNameRequestFromJSONTyped = SystemWriteManagedKeysTypeNameRequestFromJSONTyped;
exports.SystemWriteManagedKeysTypeNameRequestToJSON = SystemWriteManagedKeysTypeNameRequestToJSON;
exports.SystemWriteManagedKeysTypeNameRequestToJSONTyped = SystemWriteManagedKeysTypeNameRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteManagedKeysTypeNameRequest interface.
 */
function instanceOfSystemWriteManagedKeysTypeNameRequest(value) {
    return true;
}
function SystemWriteManagedKeysTypeNameRequestFromJSON(json) {
    return SystemWriteManagedKeysTypeNameRequestFromJSONTyped(json, false);
}
function SystemWriteManagedKeysTypeNameRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'accessKey': json['access_key'] == null ? undefined : json['access_key'],
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'allowGenerateKey': json['allow_generate_key'] == null ? undefined : json['allow_generate_key'],
        'allowReplaceKey': json['allow_replace_key'] == null ? undefined : json['allow_replace_key'],
        'allowStoreKey': json['allow_store_key'] == null ? undefined : json['allow_store_key'],
        'anyMount': json['any_mount'] == null ? undefined : json['any_mount'],
        'clientId': json['client_id'] == null ? undefined : json['client_id'],
        'clientSecret': json['client_secret'] == null ? undefined : json['client_secret'],
        'credentials': json['credentials'] == null ? undefined : json['credentials'],
        'cryptoKey': json['crypto_key'] == null ? undefined : json['crypto_key'],
        'cryptoKeyVersion': json['crypto_key_version'] == null ? undefined : json['crypto_key_version'],
        'curve': json['curve'] == null ? undefined : json['curve'],
        'endpoint': json['endpoint'] == null ? undefined : json['endpoint'],
        'environment': json['environment'] == null ? undefined : json['environment'],
        'forceRwSession': json['force_rw_session'] == null ? undefined : json['force_rw_session'],
        'keyBitsDashed': json['key-bits'] == null ? undefined : json['key-bits'],
        'keyBits': json['key_bits'] == null ? undefined : json['key_bits'],
        'keyId': json['key_id'] == null ? undefined : json['key_id'],
        'keyLabel': json['key_label'] == null ? undefined : json['key_label'],
        'keyName': json['key_name'] == null ? undefined : json['key_name'],
        'keyRing': json['key_ring'] == null ? undefined : json['key_ring'],
        'keyType': json['key_type'] == null ? undefined : json['key_type'],
        'kmsKey': json['kms_key'] == null ? undefined : json['kms_key'],
        'library': json['library'] == null ? undefined : json['library'],
        'maxParallel': json['max_parallel'] == null ? undefined : json['max_parallel'],
        'mechanism': json['mechanism'] == null ? undefined : json['mechanism'],
        'pin': json['pin'] == null ? undefined : json['pin'],
        'project': json['project'] == null ? undefined : json['project'],
        'region': json['region'] == null ? undefined : json['region'],
        'resource': json['resource'] == null ? undefined : json['resource'],
        'secretKey': json['secret_key'] == null ? undefined : json['secret_key'],
        'slot': json['slot'] == null ? undefined : json['slot'],
        'tenantId': json['tenant_id'] == null ? undefined : json['tenant_id'],
        'tokenLabel': json['token_label'] == null ? undefined : json['token_label'],
        'usages': json['usages'] == null ? undefined : json['usages'],
        'vaultName': json['vault_name'] == null ? undefined : json['vault_name'],
    };
}
function SystemWriteManagedKeysTypeNameRequestToJSON(json) {
    return SystemWriteManagedKeysTypeNameRequestToJSONTyped(json, false);
}
function SystemWriteManagedKeysTypeNameRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'access_key': value['accessKey'],
        'algorithm': value['algorithm'],
        'allow_generate_key': value['allowGenerateKey'],
        'allow_replace_key': value['allowReplaceKey'],
        'allow_store_key': value['allowStoreKey'],
        'any_mount': value['anyMount'],
        'client_id': value['clientId'],
        'client_secret': value['clientSecret'],
        'credentials': value['credentials'],
        'crypto_key': value['cryptoKey'],
        'crypto_key_version': value['cryptoKeyVersion'],
        'curve': value['curve'],
        'endpoint': value['endpoint'],
        'environment': value['environment'],
        'force_rw_session': value['forceRwSession'],
        'key-bits': value['keyBitsDashed'],
        'key_bits': value['keyBits'],
        'key_id': value['keyId'],
        'key_label': value['keyLabel'],
        'key_name': value['keyName'],
        'key_ring': value['keyRing'],
        'key_type': value['keyType'],
        'kms_key': value['kmsKey'],
        'library': value['library'],
        'max_parallel': value['maxParallel'],
        'mechanism': value['mechanism'],
        'pin': value['pin'],
        'project': value['project'],
        'region': value['region'],
        'resource': value['resource'],
        'secret_key': value['secretKey'],
        'slot': value['slot'],
        'tenant_id': value['tenantId'],
        'token_label': value['tokenLabel'],
        'usages': value['usages'],
        'vault_name': value['vaultName'],
    };
}
