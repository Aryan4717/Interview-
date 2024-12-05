"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="w-full max-w-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
        <p className="text-lg mb-6">Your feedback has been submitted successfully.</p>
        <Button
          onClick={() => router.replace("/dashboard")}
          className="px-8 py-4 text-lg bg-white text-blue-500 hover:bg-gray-200 shadow-lg rounded-lg"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
