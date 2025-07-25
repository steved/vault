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
exports.instanceOfTerraformCloudWriteRoleRequest = instanceOfTerraformCloudWriteRoleRequest;
exports.TerraformCloudWriteRoleRequestFromJSON = TerraformCloudWriteRoleRequestFromJSON;
exports.TerraformCloudWriteRoleRequestFromJSONTyped = TerraformCloudWriteRoleRequestFromJSONTyped;
exports.TerraformCloudWriteRoleRequestToJSON = TerraformCloudWriteRoleRequestToJSON;
exports.TerraformCloudWriteRoleRequestToJSONTyped = TerraformCloudWriteRoleRequestToJSONTyped;
/**
 * Check if a given object implements the TerraformCloudWriteRoleRequest interface.
 */
function instanceOfTerraformCloudWriteRoleRequest(value) {
    return true;
}
function TerraformCloudWriteRoleRequestFromJSON(json) {
    return TerraformCloudWriteRoleRequestFromJSONTyped(json, false);
}
function TerraformCloudWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'credentialType': json['credential_type'] == null ? undefined : json['credential_type'],
        'description': json['description'] == null ? undefined : json['description'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'organization': json['organization'] == null ? undefined : json['organization'],
        'teamId': json['team_id'] == null ? undefined : json['team_id'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
    };
}
function TerraformCloudWriteRoleRequestToJSON(json) {
    return TerraformCloudWriteRoleRequestToJSONTyped(json, false);
}
function TerraformCloudWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'credential_type': value['credentialType'],
        'description': value['description'],
        'max_ttl': value['maxTtl'],
        'organization': value['organization'],
        'team_id': value['teamId'],
        'ttl': value['ttl'],
        'user_id': value['userId'],
    };
}
