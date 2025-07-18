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
 * Check if a given object implements the DatabaseWriteRoleRequest interface.
 */
export function instanceOfDatabaseWriteRoleRequest(value) {
    return true;
}
export function DatabaseWriteRoleRequestFromJSON(json) {
    return DatabaseWriteRoleRequestFromJSONTyped(json, false);
}
export function DatabaseWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'creationStatements': json['creation_statements'] == null ? undefined : json['creation_statements'],
        'credentialConfig': json['credential_config'] == null ? undefined : json['credential_config'],
        'credentialType': json['credential_type'] == null ? undefined : json['credential_type'],
        'dbName': json['db_name'] == null ? undefined : json['db_name'],
        'defaultTtl': json['default_ttl'] == null ? undefined : json['default_ttl'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'renewStatements': json['renew_statements'] == null ? undefined : json['renew_statements'],
        'revocationStatements': json['revocation_statements'] == null ? undefined : json['revocation_statements'],
        'rollbackStatements': json['rollback_statements'] == null ? undefined : json['rollback_statements'],
    };
}
export function DatabaseWriteRoleRequestToJSON(json) {
    return DatabaseWriteRoleRequestToJSONTyped(json, false);
}
export function DatabaseWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'creation_statements': value['creationStatements'],
        'credential_config': value['credentialConfig'],
        'credential_type': value['credentialType'],
        'db_name': value['dbName'],
        'default_ttl': value['defaultTtl'],
        'max_ttl': value['maxTtl'],
        'renew_statements': value['renewStatements'],
        'revocation_statements': value['revocationStatements'],
        'rollback_statements': value['rollbackStatements'],
    };
}
