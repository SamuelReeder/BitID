/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "bitid.did";

export interface DIDDocument {
  context: string;
  id: string;
  authentication: VerificationMethod[];
  service: Service[];
  created: string;
  updated: string;
}

export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  /** Public key in PEM format */
  publicKeyPem: string;
}

export interface Service {
  id: string;
  type: string;
  serviceEndpoint: string;
}

function createBaseDIDDocument(): DIDDocument {
  return { context: "", id: "", authentication: [], service: [], created: "", updated: "" };
}

export const DIDDocument = {
  encode(message: DIDDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.context !== "") {
      writer.uint32(10).string(message.context);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.authentication) {
      VerificationMethod.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.created !== "") {
      writer.uint32(42).string(message.created);
    }
    if (message.updated !== "") {
      writer.uint32(50).string(message.updated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DIDDocument {
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

  fromJSON(object: any): DIDDocument {
    return {
      context: isSet(object.context) ? String(object.context) : "",
      id: isSet(object.id) ? String(object.id) : "",
      authentication: Array.isArray(object?.authentication)
        ? object.authentication.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
      created: isSet(object.created) ? String(object.created) : "",
      updated: isSet(object.updated) ? String(object.updated) : "",
    };
  },

  toJSON(message: DIDDocument): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<DIDDocument>, I>>(base?: I): DIDDocument {
    return DIDDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DIDDocument>, I>>(object: I): DIDDocument {
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

function createBaseVerificationMethod(): VerificationMethod {
  return { id: "", type: "", controller: "", publicKeyPem: "" };
}

export const VerificationMethod = {
  encode(message: VerificationMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
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

  fromJSON(object: any): VerificationMethod {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      publicKeyPem: isSet(object.publicKeyPem) ? String(object.publicKeyPem) : "",
    };
  },

  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<VerificationMethod>, I>>(base?: I): VerificationMethod {
    return VerificationMethod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationMethod>, I>>(object: I): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.publicKeyPem = object.publicKeyPem ?? "";
    return message;
  },
};

function createBaseService(): Service {
  return { id: "", type: "", serviceEndpoint: "" };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
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

  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : "",
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Service>, I>>(base?: I): Service {
    return Service.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
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
