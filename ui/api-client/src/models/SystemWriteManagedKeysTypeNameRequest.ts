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
 * @interface SystemWriteManagedKeysTypeNameRequest
 */
export interface SystemWriteManagedKeysTypeNameRequest {
    /**
     * Access key for authenticating to AWS
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    accessKey?: string;
    /**
     * The signature algorithm to use with this key
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    algorithm?: string;
    /**
     * If true, allows users of the key to trigger key generation. If false and generation is needed, it will fail.
     * @type {boolean}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    allowGenerateKey?: boolean;
    /**
     * If true, allows users of the key to provide key material which may replace keys that were previously present. allow_store_key being false overrides this behavior.
     * @type {boolean}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    allowReplaceKey?: boolean;
    /**
     * If true, allows users of the key to provide key material where none was present.
     * @type {boolean}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    allowStoreKey?: boolean;
    /**
     * If true, this key may be accessed by any mount without the mount's allowed_manage_keys field being set.
     * @type {boolean}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    anyMount?: boolean;
    /**
     * The client ID for credentials to invoke the Azure APIs.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    clientId?: string;
    /**
     * The client secret for credentials to invoke the Azure APIs.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    clientSecret?: string;
    /**
     * The path for the GCP credential file
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    credentials?: string;
    /**
     * The name of the key in GCP Cloud KMS
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    cryptoKey?: string;
    /**
     * The key version of an existing key in GCP Cloud KMS
     * @type {number}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    cryptoKeyVersion?: number;
    /**
     * For ECDSA keys, the desired elliptic curve if the key is to be generated, either P256, P384, or P521.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    curve?: string;
    /**
     * The AWS endpoint to use
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    endpoint?: string;
    /**
     * The Azure Cloud environment API endpoints to use.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    environment?: string;
    /**
     * If true, forces read/write sessions on the HSM, to work around some buggy HSMs.
     * @type {boolean}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    forceRwSession?: boolean;
    /**
     * The desired key length in bits if the RSA key is to be generated, either 2048, 3072, or 4096.
     * @type {number}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    keyBitsDashed?: number;
    /**
     * For RSA keys, the desired key length in bits if the key is to be generated, either 2048, 3072, or 4096.
     * @type {number}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    keyBits?: number;
    /**
     * The id of a PKCS#11 key to use. As key ids are created by the HSM, it is an error if the key does not yet exist. This value or key_label must be specified.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    keyId?: string;
    /**
     * The label of a PKCS#11 key to use. If the key does not exist and generation is enabled, this is the label that will be given to the generated key. This value or key_id must be specified.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    keyLabel?: string;
    /**
     * The name of the Azure Key Vault Key.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    keyName?: string;
    /**
     * The name of the key ring in GCP Cloud KMS
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    keyRing?: string;
    /**
     * The type of the Azure Key Vault Key. Currently only `RSA-HSM` is supported.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    keyType?: string;
    /**
     * An identifier for the AWS KMS key. If the key already exists, this can be either the AWS-generated key ID or an alias. If the key is to be generated and the field is non-empty, the provided value will be used to create an alias for the key.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    kmsKey?: string;
    /**
     * The name of a managed key access library, as defined in the Vault server configuration.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    library?: string;
    /**
     * The maximum number of concurrent operations that may be submitted to the HSM at a time.
     * @type {number}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    maxParallel?: number;
    /**
     * The mechanism for the given key, specified as a decimal or hexadecimal (prefixed by 0x) string.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    mechanism?: string;
    /**
     * The access PIN for the slot.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    pin?: string;
    /**
     * The name of the GCP project
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    project?: string;
    /**
     * The GCP region used for the key ring
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    region?: string;
    /**
     * The Azure Key Vault resource's DNS Suffix to connect to. Needs to be changed to connect to Azure's Managed HSM KeyVault instance type.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    resource?: string;
    /**
     * Secret key ID for authenticating to AWS
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    secretKey?: string;
    /**
     * The slot number to use, specified as a string (e.g. "0").
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    slot?: string;
    /**
     * The tenant ID for the Azure Active Directory organization.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    tenantId?: string;
    /**
     * The slot token label to use.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    tokenLabel?: string;
    /**
     * A comma-delimited list of the allowed usages of this key. Valid values are encrypt, decrypt, sign, verify, wrap, unwrap, mac, and random.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    usages?: string;
    /**
     * The name of an existing Azure Key Vault instance.
     * @type {string}
     * @memberof SystemWriteManagedKeysTypeNameRequest
     */
    vaultName?: string;
}

/**
 * Check if a given object implements the SystemWriteManagedKeysTypeNameRequest interface.
 */
export function instanceOfSystemWriteManagedKeysTypeNameRequest(value: object): value is SystemWriteManagedKeysTypeNameRequest {
    return true;
}

export function SystemWriteManagedKeysTypeNameRequestFromJSON(json: any): SystemWriteManagedKeysTypeNameRequest {
    return SystemWriteManagedKeysTypeNameRequestFromJSONTyped(json, false);
}

export function SystemWriteManagedKeysTypeNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteManagedKeysTypeNameRequest {
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

export function SystemWriteManagedKeysTypeNameRequestToJSON(json: any): SystemWriteManagedKeysTypeNameRequest {
    return SystemWriteManagedKeysTypeNameRequestToJSONTyped(json, false);
}

export function SystemWriteManagedKeysTypeNameRequestToJSONTyped(value?: SystemWriteManagedKeysTypeNameRequest | null, ignoreDiscriminator: boolean = false): any {
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

