import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About IMDB CLONE
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>Welcome to IMDB CLONE!</p>

            <p>
              Explore captivating reviews, inspiring stories, and helpful guides
              on our movie blog.
            </p>

            <p>
              {" "}
              🔍 Explore: Dive into a diverse range of topics and expand your
              horizons.
            </p>

            <p>
              🌟 Engage: Join our vibrant community and share your thoughts with
              like-minded individuals.
            </p>

            <p>
              🚀 Grow: Learn new skills and stay updated with our insightful
              content.
            </p>

            <p>
              Visit our{" "}
              <a
                target="_blank"
                href="https://github.com/Aakif9866/movie-website"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                {" "}
                GitHub
              </a>{" "}
              repository to learn more about the project.
            </p>

            <p>
              {" "}
              Connect with us on{" "}
              <a
                target="_blank"
                href="https://github.com/Aakif9866"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                {" "}
                GitHub
              </a>{" "}
              and be part of our journey!
            </p>

            <p>
              Thank you for choosing Aakif's Blog. Let's inspire and empower
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
