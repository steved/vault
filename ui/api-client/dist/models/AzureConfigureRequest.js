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
exports.instanceOfAzureConfigureRequest = instanceOfAzureConfigureRequest;
exports.AzureConfigureRequestFromJSON = AzureConfigureRequestFromJSON;
exports.AzureConfigureRequestFromJSONTyped = AzureConfigureRequestFromJSONTyped;
exports.AzureConfigureRequestToJSON = AzureConfigureRequestToJSON;
exports.AzureConfigureRequestToJSONTyped = AzureConfigureRequestToJSONTyped;
/**
 * Check if a given object implements the AzureConfigureRequest interface.
 */
function instanceOfAzureConfigureRequest(value) {
    return true;
}
function AzureConfigureRequestFromJSON(json) {
    return AzureConfigureRequestFromJSONTyped(json, false);
}
function AzureConfigureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'clientId': json['client_id'] == null ? undefined : json['client_id'],
        'clientSecret': json['client_secret'] == null ? undefined : json['client_secret'],
        'disableAutomatedRotation': json['disable_automated_rotation'] == null ? undefined : json['disable_automated_rotation'],
        'environment': json['environment'] == null ? undefined : json['environment'],
        'identityTokenAudience': json['identity_token_audience'] == null ? undefined : json['identity_token_audience'],
        'identityTokenTtl': json['identity_token_ttl'] == null ? undefined : json['identity_token_ttl'],
        'rootPasswordTtl': json['root_password_ttl'] == null ? undefined : json['root_password_ttl'],
        'rotationPeriod': json['rotation_period'] == null ? undefined : json['rotation_period'],
        'rotationSchedule': json['rotation_schedule'] == null ? undefined : json['rotation_schedule'],
        'rotationWindow': json['rotation_window'] == null ? undefined : json['rotation_window'],
        'subscriptionId': json['subscription_id'] == null ? undefined : json['subscription_id'],
        'tenantId': json['tenant_id'] == null ? undefined : json['tenant_id'],
    };
}
function AzureConfigureRequestToJSON(json) {
    return AzureConfigureRequestToJSONTyped(json, false);
}
function AzureConfigureRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'client_id': value['clientId'],
        'client_secret': value['clientSecret'],
        'disable_automated_rotation': value['disableAutomatedRotation'],
        'environment': value['environment'],
        'identity_token_audience': value['identityTokenAudience'],
        'identity_token_ttl': value['identityTokenTtl'],
        'root_password_ttl': value['rootPasswordTtl'],
        'rotation_period': value['rotationPeriod'],
        'rotation_schedule': value['rotationSchedule'],
        'rotation_window': value['rotationWindow'],
        'subscription_id': value['subscriptionId'],
        'tenant_id': value['tenantId'],
    };
}
