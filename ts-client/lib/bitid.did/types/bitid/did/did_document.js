/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "bitid.did";
function createBaseDIDDocument() {
    return { context: "", id: "", authentication: [], service: [], created: "", updated: "" };
}
export const DIDDocument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.context !== "") {
            writer.uint32(10).string(message.context);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.authentication) {
            VerificationMethod.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.service) {
            Service.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.created !== "") {
            writer.uint32(42).string(message.created);
        }
        if (message.updated !== "") {
            writer.uint32(50).string(message.updated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDIDDocument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.context = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.authentication.push(VerificationMethod.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.service.push(Service.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.created = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.updated = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            context: isSet(object.context) ? String(object.context) : "",
            id: isSet(object.id) ? String(object.id) : "",
            authentication: Array.isArray(object?.authentication)
                ? object.authentication.map((e) => VerificationMethod.fromJSON(e))
                : [],
            service: Array.isArray(object?.service) ? object.service.map((e) => Service.fromJSON(e)) : [],
            created: isSet(object.created) ? String(object.created) : "",
            updated: isSet(object.updated) ? String(object.updated) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context !== "") {
            obj.context = message.context;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.authentication?.length) {
            obj.authentication = message.authentication.map((e) => VerificationMethod.toJSON(e));
        }
        if (message.service?.length) {
            obj.service = message.service.map((e) => Service.toJSON(e));
        }
        if (message.created !== "") {
            obj.created = message.created;
        }
        if (message.updated !== "") {
            obj.updated = message.updated;
        }
        return obj;
    },
    create(base) {
        return DIDDocument.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDIDDocument();
        message.context = object.context ?? "";
        message.id = object.id ?? "";
        message.authentication = object.authentication?.map((e) => VerificationMethod.fromPartial(e)) || [];
        message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
        message.created = object.created ?? "";
        message.updated = object.updated ?? "";
        return message;
    },
};
function createBaseVerificationMethod() {
    return { id: "", type: "", controller: "", publicKeyPem: "" };
}
export const VerificationMethod = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.controller !== "") {
            writer.uint32(26).string(message.controller);
        }
        if (message.publicKeyPem !== "") {
            writer.uint32(34).string(message.publicKeyPem);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerificationMethod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.controller = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.publicKeyPem = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? String(object.type) : "",
            controller: isSet(object.controller) ? String(object.controller) : "",
            publicKeyPem: isSet(object.publicKeyPem) ? String(object.publicKeyPem) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.controller !== "") {
            obj.controller = message.controller;
        }
        if (message.publicKeyPem !== "") {
            obj.publicKeyPem = message.publicKeyPem;
        }
        return obj;
    },
    create(base) {
        return VerificationMethod.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerificationMethod();
        message.id = object.id ?? "";
        message.type = object.type ?? "";
        message.controller = object.controller ?? "";
        message.publicKeyPem = object.publicKeyPem ?? "";
        return message;
    },
};
function createBaseService() {
    return { id: "", type: "", serviceEndpoint: "" };
}
export const Service = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.serviceEndpoint !== "") {
            writer.uint32(26).string(message.serviceEndpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseService();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.serviceEndpoint = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? String(object.type) : "",
            serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.serviceEndpoint !== "") {
            obj.serviceEndpoint = message.serviceEndpoint;
        }
        return obj;
    },
    create(base) {
        return Service.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseService();
        message.id = object.id ?? "";
        message.type = object.type ?? "";
        message.serviceEndpoint = object.serviceEndpoint ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
