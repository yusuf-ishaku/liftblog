export async function blobToDataURL(blob: File) {
  const buffer = Buffer.from(await blob.arrayBuffer());
  const base64 = buffer.toString("base64");
  return `data:${blob.type};base64,${base64}`;
}
