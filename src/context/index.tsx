import CitiesProvider from "./cities.context";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <CitiesProvider>{children}</CitiesProvider>;
}
