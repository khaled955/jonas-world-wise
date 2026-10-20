export function emojiToCountryCode(emoji: string): string {
  return [...emoji]
    .map((char) => String.fromCharCode(char.codePointAt(0)! - 127397))
    .join("")
    .toLowerCase();
}
