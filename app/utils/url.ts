export function isValidURL(input: string): boolean {
  try {
    new URL(input);
    return true;
  } catch {
    return false;
  }
}
