import Attribution from './components/Attribution';
import Card from './components/Card';

export default function () {
  return (
    <>
      <main className="bg-neutral-off-black grid min-h-screen place-items-center p-8">
        <Card />
      </main>
      <Attribution />
    </>
  );
}
