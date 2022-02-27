import React, { useState } from "react";

const API = "https://lulu-backend.onrender.com";

function Cta() {
  const [instaHandle, setInstaHandle] = useState("");
  const [message, setMessage] = useState("");

  async function sendText() {
    if (!instaHandle.length) {
      return;
    }
    fetch(`${API}/sendText`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: "+13303541427",
        message: `insta handle: ${instaHandle}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInstaHandle("");
        setMessage("Thanks for your interest! We'll contact you shortly.");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="bg-purple-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">
                  {/* Ready to sell more? Faster, and easier? */}
                  Create your website with one click!
                </h3>
                <p className="text-white text-lg opacity-75">
                  Don&apos;t waste another minute. Sign up now and start saving
                  more time.
                  {/* Super charge your Instagram Shop with our automation software */}
                </p>
              </div>

              {/* CTA button */}
              <div>
                <div>
                  <input
                    style={{ marginBottom: "1rem", padding: ".75rem" }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter your insta handle"
                    value={instaHandle}
                    onChange={(e) => setInstaHandle(e.target.value)}
                  ></input>
                  {message && (
                    <p className="font-bold text-lg text-green-600">
                      {message}
                    </p>
                  )}
                  <button
                    onClick={sendText}
                    className="btn text-purple-600 bg-white hover:bg-white w-full mb-4 sm:w-auto sm:mb-0"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
