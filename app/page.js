import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>AI INTERVIEW </title>
        <meta
          name="description"
          content="Ace your next interview with AI-powered mock interviews"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="w-full py-8 bg-gray-100 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <h1 className="text-3xl font-bold text-primary">AI INTERVIEW </h1>
            <nav className="flex flex-col sm:flex-row items-center justify-between mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#features" className="text-lg text-gray-800 md:mx-4">
                Features
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Ace Your Next Interview
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Practice with AI-powered mock interviews
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="/dashboard"
              className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-gray-200"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:bg-gray-800"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI INTERVIEW offers a range of powerful features:
            </p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold">AI Mock Interviews</h3>
              <p className="mt-2">
                Experience realistic interview scenarios with our advanced AI.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold">Instant Feedback</h3>
              <p className="mt-2">
                Get instant, personalized feedback to improve your performance.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold">Comprehensive Reports</h3>
              <p className="mt-2">
                Receive detailed reports highlighting your strengths and
                weaknesses.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
