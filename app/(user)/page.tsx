import { previewData } from "next/headers";

export default function HomePage() {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello world! </h1>
    </div>
  );
}
// Next step 1.14.13 create groq ******