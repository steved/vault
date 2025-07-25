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
 * @interface PkiWriteRoleResponse
 */
export interface PkiWriteRoleResponse {
    /**
     * If set, clients can request certificates for any domain, regardless of allowed_domains restrictions. See the documentation for more information.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowAnyName?: boolean;
    /**
     * If set, clients can request certificates for the base domains themselves, e.g. "example.com" of domains listed in allowed_domains. This is a separate option as in some cases this can be considered a security threat. See the documentation for more information.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowBareDomains?: boolean;
    /**
     * If set, domains specified in allowed_domains can include shell-style glob patterns, e.g. "ftp*.example.com". See the documentation for more information.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowGlobDomains?: boolean;
    /**
     * If set, IP Subject Alternative Names are allowed. Any valid IP is accepted and No authorization checking is performed.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowIpSans?: boolean;
    /**
     * Whether to allow "localhost" and "localdomain" as a valid common name in a request, independent of allowed_domains value.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowLocalhost?: boolean;
    /**
     * If set, clients can request certificates for subdomains of domains listed in allowed_domains, including wildcard subdomains. See the documentation for more information.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowSubdomains?: boolean;
    /**
     * Whether to allow "localhost" and "localdomain" as a valid common name in a request, independent of allowed_domains value.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowTokenDisplayname?: boolean;
    /**
     * If set, allows certificates with wildcards in the common name to be issued, conforming to RFC 6125's Section 6.4.3; e.g., "*.example.net" or "b*z.example.net". See the documentation for more information.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowWildcardCertificates?: boolean;
    /**
     * Specifies the domains this role is allowed to issue certificates for. This is used with the allow_bare_domains, allow_subdomains, and allow_glob_domains to determine matches for the common name, DNS-typed SAN entries, and Email-typed SAN entries of certificates. See the documentation for more information. This parameter accepts a comma-separated string or list of domains.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    allowedDomains?: Array<string>;
    /**
     * If set, Allowed domains can be specified using identity template policies. Non-templated domains are also permitted.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowedDomainsTemplate?: boolean;
    /**
     * If set, an array of allowed other names to put in SANs. These values support globbing and must be in the format <oid>;<type>:<value>. Currently only "utf8" is a valid type. All values, including globbing values, must use this syntax, with the exception being a single "*" which allows any OID and any value (but type must still be utf8).
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    allowedOtherSans?: Array<string>;
    /**
     * If set, an array of allowed serial numbers to put in Subject. These values support globbing.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    allowedSerialNumbers?: Array<string>;
    /**
     * If set, an array of allowed URIs for URI Subject Alternative Names. Any valid URI is accepted, these values support globbing.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    allowedUriSans?: Array<string>;
    /**
     * If set, Allowed URI SANs can be specified using identity template policies. Non-templated URI SANs are also permitted.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    allowedUriSansTemplate?: boolean;
    /**
     * If set, an array of allowed user-ids to put in user system login name specified here: https://www.rfc-editor.org/rfc/rfc1274#section-9.3.1
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    allowedUserIds?: Array<string>;
    /**
     * Mark Basic Constraints valid when issuing non-CA certificates.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    basicConstraintsValidForNonCa?: boolean;
    /**
     * If set, certificates are flagged for client auth use. Defaults to true. See also RFC 5280 Section 4.2.1.12.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    clientFlag?: boolean;
    /**
     * List of allowed validations to run against the Common Name field. Values can include 'email' to validate the CN is a email address, 'hostname' to validate the CN is a valid hostname (potentially including wildcards). When multiple validations are specified, these take OR semantics (either email OR hostname are allowed). The special value 'disabled' allows disabling all CN name validations, allowing for arbitrary non-Hostname, non-Email address CNs.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    cnValidations?: Array<string>;
    /**
     * If set, certificates are flagged for code signing use. Defaults to false. See also RFC 5280 Section 4.2.1.12.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    codeSigningFlag?: boolean;
    /**
     * If set, Country will be set to this value in certificates issued by this role.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    country?: Array<string>;
    /**
     * If set, certificates are flagged for email protection use. Defaults to false. See also RFC 5280 Section 4.2.1.12.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    emailProtectionFlag?: boolean;
    /**
     * If set, only valid host names are allowed for CN and DNS SANs, and the host part of email addresses. Defaults to true.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    enforceHostnames?: boolean;
    /**
     * A comma-separated string or list of extended key usages. Valid values can be found at https://golang.org/pkg/crypto/x509/#ExtKeyUsage -- simply drop the "ExtKeyUsage" part of the name. To remove all key usages from being set, set this value to an empty list. See also RFC 5280 Section 4.2.1.12.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    extKeyUsage?: Array<string>;
    /**
     * A comma-separated string or list of extended key usage oids.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    extKeyUsageOids?: Array<string>;
    /**
     * If set, certificates issued/signed against this role will have Vault leases attached to them. Defaults to "false". Certificates can be added to the CRL by "vault revoke <lease_id>" when certificates are associated with leases. It can also be done using the "pki/revoke" endpoint. However, when lease generation is disabled, invoking "pki/revoke" would be the only way to add the certificates to the CRL. When large number of certificates are generated with long lifetimes, it is recommended that lease generation be disabled, as large amount of leases adversely affect the startup time of Vault.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    generateLease?: boolean;
    /**
     * Reference to the issuer used to sign requests serviced by this role.
     * @type {string}
     * @memberof PkiWriteRoleResponse
     */
    issuerRef?: string;
    /**
     * The number of bits to use. Allowed values are 0 (universal default); with rsa key_type: 2048 (default), 3072, or 4096; with ec key_type: 224, 256 (default), 384, or 521; ignored with ed25519.
     * @type {number}
     * @memberof PkiWriteRoleResponse
     */
    keyBits?: number;
    /**
     * The type of key to use; defaults to RSA. "rsa" "ec", "ed25519" and "any" are the only valid values.
     * @type {string}
     * @memberof PkiWriteRoleResponse
     */
    keyType?: string;
    /**
     * A comma-separated string or list of key usages (not extended key usages). Valid values can be found at https://golang.org/pkg/crypto/x509/#KeyUsage -- simply drop the "KeyUsage" part of the name. To remove all key usages from being set, set this value to an empty list. See also RFC 5280 Section 4.2.1.3.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    keyUsage?: Array<string>;
    /**
     * If set, Locality will be set to this value in certificates issued by this role.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    locality?: Array<string>;
    /**
     * The maximum allowed lease duration. If not set, defaults to the system maximum lease TTL.
     * @type {number}
     * @memberof PkiWriteRoleResponse
     */
    maxTtl?: number;
    /**
     * If set, certificates issued/signed against this role will not be stored in the storage backend. This can improve performance when issuing large numbers of certificates. However, certificates issued in this way cannot be enumerated or revoked, so this option is recommended only for certificates that are non-sensitive, or extremely short-lived. This option implies a value of "false" for "generate_lease".
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    noStore?: boolean;
    /**
     * If set, if a client attempts to issue or sign a certificate with attached cert_metadata to store, the issuance / signing instead fails.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    noStoreMetadata?: boolean;
    /**
     * Set the not after field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ.
     * @type {string}
     * @memberof PkiWriteRoleResponse
     */
    notAfter?: string;
    /**
     * The duration in seconds before now which the certificate needs to be backdated by.
     * @type {number}
     * @memberof PkiWriteRoleResponse
     */
    notBeforeDuration?: number;
    /**
     * If set, O (Organization) will be set to this value in certificates issued by this role.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    organization?: Array<string>;
    /**
     * If set, OU (OrganizationalUnit) will be set to this value in certificates issued by this role.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    ou?: Array<string>;
    /**
     * A comma-separated string or list of policy OIDs, or a JSON list of qualified policy information, which must include an oid, and may include a notice and/or cps url, using the form [{"oid"="1.3.6.1.4.1.7.8","notice"="I am a user Notice"}, {"oid"="1.3.6.1.4.1.44947.1.2.4 ","cps"="https://example.com"}].
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    policyIdentifiers?: Array<string>;
    /**
     * If set, Postal Code will be set to this value in certificates issued by this role.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    postalCode?: Array<string>;
    /**
     * If set, Province will be set to this value in certificates issued by this role.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    province?: Array<string>;
    /**
     * If set to false, makes the 'common_name' field optional while generating a certificate.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    requireCn?: boolean;
    /**
     * Source for the certificate subject serial number. If "json-csr" (default), the value from the JSON serial_number field is used, falling back to the value in the CSR if empty. If "json", the value from the serial_number JSON field is used, ignoring the value in the CSR.
     * @type {string}
     * @memberof PkiWriteRoleResponse
     */
    serialNumberSource?: string;
    /**
     * If set, certificates are flagged for server auth use. Defaults to true. See also RFC 5280 Section 4.2.1.12.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    serverFlag?: boolean;
    /**
     * The number of bits to use in the signature algorithm; accepts 256 for SHA-2-256, 384 for SHA-2-384, and 512 for SHA-2-512. Defaults to 0 to automatically detect based on key length (SHA-2-256 for RSA keys, and matching the curve size for NIST P-Curves).
     * @type {number}
     * @memberof PkiWriteRoleResponse
     */
    signatureBits?: number;
    /**
     * If set, Street Address will be set to this value in certificates issued by this role.
     * @type {Array<string>}
     * @memberof PkiWriteRoleResponse
     */
    streetAddress?: Array<string>;
    /**
     * The lease duration (validity period of the certificate) if no specific lease duration is requested. The lease duration controls the expiration of certificates issued by this backend. Defaults to the system default value or the value of max_ttl, whichever is shorter.
     * @type {number}
     * @memberof PkiWriteRoleResponse
     */
    ttl?: number;
    /**
     * If set, when used with a signing profile, the common name in the CSR will be used. This does *not* include any requested Subject Alternative Names; use use_csr_sans for that. Defaults to true.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    useCsrCommonName?: boolean;
    /**
     * If set, when used with a signing profile, the SANs in the CSR will be used. This does *not* include the Common Name (cn); use use_csr_common_name for that. Defaults to true.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    useCsrSans?: boolean;
    /**
     * Whether or not to use PSS signatures when using a RSA key-type issuer. Defaults to false.
     * @type {boolean}
     * @memberof PkiWriteRoleResponse
     */
    usePss?: boolean;
}
/**
 * Check if a given object implements the PkiWriteRoleResponse interface.
 */
export declare function instanceOfPkiWriteRoleResponse(value: object): value is PkiWriteRoleResponse;
export declare function PkiWriteRoleResponseFromJSON(json: any): PkiWriteRoleResponse;
export declare function PkiWriteRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteRoleResponse;
export declare function PkiWriteRoleResponseToJSON(json: any): PkiWriteRoleResponse;
export declare function PkiWriteRoleResponseToJSONTyped(value?: PkiWriteRoleResponse | null, ignoreDiscriminator?: boolean): any;
