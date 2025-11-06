import type { BunRequest } from "bun";

export async function getProps<T>(req: BunRequest) {
  return await (req.json() as Promise<T & { email: string }>);
}
