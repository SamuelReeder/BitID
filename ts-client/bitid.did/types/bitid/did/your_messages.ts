/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "bitid.did";

/** MsgDefineDIDDocument represents a request to create/update a DID document. */
export interface MsgDefineDIDDocument {
  creator: string;
  id: string;
  /** The DID document content */
  document: string;
}

/** Define any fields you want to include in the response */
export interface MsgDefineDIDDocumentResponse {
}

/** MsgRemoveDIDDocument represents a request to remove a DID document. */
export interface MsgRemoveDIDDocument {
  creator: string;
  id: string;
}

export interface MsgRemoveDIDDocumentResponse {
  /** Define any fields you want to include in the response */
  remover: string;
}

function createBaseMsgDefineDIDDocument(): MsgDefineDIDDocument {
  return { creator: "", id: "", document: "" };
}

export const MsgDefineDIDDocument = {
  encode(message: MsgDefineDIDDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineDIDDocument {
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

  fromJSON(object: any): MsgDefineDIDDocument {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      document: isSet(object.document) ? String(object.document) : "",
    };
  },

  toJSON(message: MsgDefineDIDDocument): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<MsgDefineDIDDocument>, I>>(base?: I): MsgDefineDIDDocument {
    return MsgDefineDIDDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDefineDIDDocument>, I>>(object: I): MsgDefineDIDDocument {
    const message = createBaseMsgDefineDIDDocument();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.document = object.document ?? "";
    return message;
  },
};

function createBaseMsgDefineDIDDocumentResponse(): MsgDefineDIDDocumentResponse {
  return {};
}

export const MsgDefineDIDDocumentResponse = {
  encode(_: MsgDefineDIDDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineDIDDocumentResponse {
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

  fromJSON(_: any): MsgDefineDIDDocumentResponse {
    return {};
  },

  toJSON(_: MsgDefineDIDDocumentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDefineDIDDocumentResponse>, I>>(base?: I): MsgDefineDIDDocumentResponse {
    return MsgDefineDIDDocumentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDefineDIDDocumentResponse>, I>>(_: I): MsgDefineDIDDocumentResponse {
    const message = createBaseMsgDefineDIDDocumentResponse();
    return message;
  },
};

function createBaseMsgRemoveDIDDocument(): MsgRemoveDIDDocument {
  return { creator: "", id: "" };
}

export const MsgRemoveDIDDocument = {
  encode(message: MsgRemoveDIDDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveDIDDocument {
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

  fromJSON(object: any): MsgRemoveDIDDocument {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgRemoveDIDDocument): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveDIDDocument>, I>>(base?: I): MsgRemoveDIDDocument {
    return MsgRemoveDIDDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveDIDDocument>, I>>(object: I): MsgRemoveDIDDocument {
    const message = createBaseMsgRemoveDIDDocument();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgRemoveDIDDocumentResponse(): MsgRemoveDIDDocumentResponse {
  return { remover: "" };
}

export const MsgRemoveDIDDocumentResponse = {
  encode(message: MsgRemoveDIDDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remover !== "") {
      writer.uint32(10).string(message.remover);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveDIDDocumentResponse {
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

  fromJSON(object: any): MsgRemoveDIDDocumentResponse {
    return { remover: isSet(object.remover) ? String(object.remover) : "" };
  },

  toJSON(message: MsgRemoveDIDDocumentResponse): unknown {
    const obj: any = {};
    if (message.remover !== "") {
      obj.remover = message.remover;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveDIDDocumentResponse>, I>>(base?: I): MsgRemoveDIDDocumentResponse {
    return MsgRemoveDIDDocumentResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveDIDDocumentResponse>, I>>(object: I): MsgRemoveDIDDocumentResponse {
    const message = createBaseMsgRemoveDIDDocumentResponse();
    message.remover = object.remover ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
