export function extractNameInitials(name: string) {
  return name
    .split(" ")
    .map((txt) => txt[0])
    .join("");
}
