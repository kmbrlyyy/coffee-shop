import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 text-center p-8">
      <h1 className="text-5xl font-bold text-amber-700 mb-6">
        Welcome to Coffee Shop
        <br />
        Your favorite coffee, brewed to perfection.
      </h1>
      <Button>Click Me</Button>
    </div>
  );
}
