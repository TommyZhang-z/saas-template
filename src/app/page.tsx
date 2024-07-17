"use client";

// import { SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // const handleClick = async () => {
  //   const res = await fetch("/api/checkout", {
  //     method: "POST",
  //   });
  //   const data = await res.json();
  //   router.push(data.result.url);
  // };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <SignedIn>
        <button onClick={handleClick} className="border p-2 rounded">
          Subscribe
        </button>
      </SignedIn> */}
    </main>
  );
}
