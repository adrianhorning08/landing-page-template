import Image from "next/image";
import React from "react";

function FeaturesBlocks() {
  const features = [
    {
      // TODO: add images of low bid messages
      title: "Automatically track bids",
      description: `Don't spend time messaging bidders. We will automatically and immediately send outbid, low bid, and won messages.`,
      images: [
        "/post-1.jpg",
        "/bid-1.jpg",
        "/bid-2.jpg",
        "/bid-3.jpg",
        "/bid-4.jpg",
        "/bid-5.jpg",
      ],
    },
    {
      title: "Automatically reply to BINS",
      description: `In addition to bids, we'll reply to BIN's as well!`,
      images: ["/post-2.jpg", "/bin-1.jpg", "/bin-2.jpg"],
    },
    {
      title: "Reach out to winners",
      description:
        "We will track when a bid ends and send out a message to the winner.",
      images: [
        "/post-3.jpg",
        "/bid-6.jpg",
        "/bid-7.jpg",
        "/bid-8.jpg",
        "/bid-9.jpg",
        "/white-space.jpg",
        "/dm-1.jpg",
        "/dm-2.jpg",
        "/dm-3.jpg",
      ],
    },
    {
      title: "Auto message next highest bidder",
      description:
        "If the winner doesn't pay, we will message the next highest bidder, and keep going down the list.",
      images: [
        "/post-4.jpg",
        "/bid-10.jpg",
        "/bid-11.jpg",
        "/bid-12.jpg",
        "/bid-13.jpg",
        "/bid-14.jpg",
        "/bid-15.jpg",
      ],
    },
    {
      title: "Confirm payment",
      description: "We will track that a person has paid.",
      images: ["/dm-1.jpg", "/dm-4.jpg", "/dm-5.jpg"],
    },
    {
      title: "Create shipping labels",
      description:
        "Once payment is confirmed, we will create a shipping label for you to print, and send tracking info to the winner (coming soon).",
    },
  ];

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center md:pb-20">
            <h2 className="text-4xl h2 mb-4">
              We help you <span className="text-pink-500">sell more!</span>
            </h2>
            {/* <p className="text-xl text-gray-600">
              Save you time, so you can make more 💰💰💰
            </p> */}
            <p className="text-xl text-gray-600">
              How? By freeing up the hours you would have spent moderating bids,
              collecting payments {"&"} shipping info, sending tracking, DMing
              buyers, etc, and allowing you to focus on sourcing, posting,
              engagement {"&"} growing your business. See how below 👇
            </p>
          </div>

          {/* Items */}
          <div className="">
            {features.map((feature, idx) => (
              <div key={feature.title} className="">
                <div className="text py-16">
                  <h4 className="text-3xl text-center font-bold leading-snug tracking-tight mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
                <div className="images">
                  {feature?.images?.map?.((image, idx) => (
                    <Image
                      height={200}
                      width={200}
                      data-aos="zoom-y-out"
                      className="shadow-lg"
                      key={image}
                      src={image}
                      alt={image}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className="">
              <div className="text py-16">
                <h4 className="text-3xl text-center font-bold leading-snug tracking-tight mb-1">
                  Want to see it in action?
                </h4>
                <p className="text-gray-600 text-center">
                  Go to our{" "}
                  <a
                    href="https://www.instagram.com/get_reseller_helper/"
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-pink-500"
                  >
                    Instagram
                  </a>{" "}
                  and bid on a &apos;Test Post&apos; to see it in action 🚀
                </p>
              </div>
              <div className="images"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
