import { LoaderFunction } from 'remix';

export default function Index() {
  return (
  <div className="mx-auto max-w-screen-xl px-4 py-8">
    <div className="text-center">
      <h1 className="text-3xl fsont-bold">
        BoilerPlate
      </h1>
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
      </p>
      <button className="bg-sonrBlue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  </div>
  );
}
