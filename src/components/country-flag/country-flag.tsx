import { emojiToCountryCode } from "../../utils/emoji-to-country-code";

type CountryFlagProps = {
  emoji: string;
  country: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function CountryFlag({
  emoji,
  country,
  width = 40,
  height = 36,
  className,
}: CountryFlagProps) {
  return (
    <img
      src={`https://flagcdn.com/48x36/${emojiToCountryCode(emoji)}.png`}
      alt={`${country} flag`}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
}
