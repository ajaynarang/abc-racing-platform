import { Header } from "@/components/header";
import { Fixtures } from "@/components/fixtures";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto px-2 py-8">
        <Fixtures />
      </main>
    </div>
  );
}
