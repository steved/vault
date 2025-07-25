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
exports.instanceOfSystemWriteUtilizationResponse = instanceOfSystemWriteUtilizationResponse;
exports.SystemWriteUtilizationResponseFromJSON = SystemWriteUtilizationResponseFromJSON;
exports.SystemWriteUtilizationResponseFromJSONTyped = SystemWriteUtilizationResponseFromJSONTyped;
exports.SystemWriteUtilizationResponseToJSON = SystemWriteUtilizationResponseToJSON;
exports.SystemWriteUtilizationResponseToJSONTyped = SystemWriteUtilizationResponseToJSONTyped;
/**
 * Check if a given object implements the SystemWriteUtilizationResponse interface.
 */
function instanceOfSystemWriteUtilizationResponse(value) {
    return true;
}
function SystemWriteUtilizationResponseFromJSON(json) {
    return SystemWriteUtilizationResponseFromJSONTyped(json, false);
}
function SystemWriteUtilizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'utilizationBundle': json['utilization_bundle'] == null ? undefined : json['utilization_bundle'],
    };
}
function SystemWriteUtilizationResponseToJSON(json) {
    return SystemWriteUtilizationResponseToJSONTyped(json, false);
}
function SystemWriteUtilizationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'utilization_bundle': value['utilizationBundle'],
    };
}
