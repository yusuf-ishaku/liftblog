import { getRequestHeaders } from "@tanstack/react-start/server";

export function getTypesafeRequestHeaders() {
  const headers = new Headers();
  const requestHeaders = getRequestHeaders();
  for (const key in requestHeaders) {
    const value = requestHeaders[key as keyof typeof requestHeaders];
    if (value) {
      headers.append(key, value);
    }
  }
  return headers;
}
