import dotenv from "dotenv";
import path from "path";
import { InitOptions } from "payload/config";
import payload, { Payload } from "payload";
import { env } from "process";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (!env.PAYLOAD_SECRET) {
    throw new Error("No PAYLOAD_SECRET found in env");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...initOptions,
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.client;
};
