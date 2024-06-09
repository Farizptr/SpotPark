import SpotParkIcon from "./icons/SpotParkIcon";

export default function Header() {
  return (
    <header className="flex items-center px-8 pt-4">
      <SpotParkIcon width={100} height={100} className="text-main-500 mr-5" />
      <h1 className="text-main-500 font-semibold text-2xl">SpotPark</h1>
    </header>
  );
}
