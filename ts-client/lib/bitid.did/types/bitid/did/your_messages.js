/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "bitid.did";
function createBaseMsgDefineDIDDocument() {
    return { creator: "", id: "", document: "" };
}
export const MsgDefineDIDDocument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.document !== "") {
            writer.uint32(26).string(message.document);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDefineDIDDocument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.creator = reader.string();
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
                    message.document = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "",
            document: isSet(object.document) ? String(object.document) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.document !== "") {
            obj.document = message.document;
        }
        return obj;
    },
    create(base) {
        return MsgDefineDIDDocument.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDefineDIDDocument();
        message.creator = object.creator ?? "";
        message.id = object.id ?? "";
        message.document = object.document ?? "";
        return message;
    },
};
function createBaseMsgDefineDIDDocumentResponse() {
    return {};
}
export const MsgDefineDIDDocumentResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDefineDIDDocumentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgDefineDIDDocumentResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgDefineDIDDocumentResponse();
        return message;
    },
};
function createBaseMsgRemoveDIDDocument() {
    return { creator: "", id: "" };
}
export const MsgRemoveDIDDocument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveDIDDocument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return MsgRemoveDIDDocument.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveDIDDocument();
        message.creator = object.creator ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMsgRemoveDIDDocumentResponse() {
    return { remover: "" };
}
export const MsgRemoveDIDDocumentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.remover !== "") {
            writer.uint32(10).string(message.remover);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveDIDDocumentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.remover = reader.string();
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
        return { remover: isSet(object.remover) ? String(object.remover) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.remover !== "") {
            obj.remover = message.remover;
        }
        return obj;
    },
    create(base) {
        return MsgRemoveDIDDocumentResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveDIDDocumentResponse();
        message.remover = object.remover ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
