import Attribution from "./components/Attribution";
import QrCode from "./components/QrCode";

export default function () {
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-light-gray p-8">
        <QrCode />
      </main>
      <Attribution />
    </>
  );
}
