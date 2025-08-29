import main from "../main";

const TermsConditions = () => {
  const ORIGINAL_PRICE = import.meta.env.VITE_ORIGINAL_PRICE;

  return (
    <div className="w-full min-h-screen flex flex-col text-stone-800 bg-white font-['Space_Grotesk']">
      {/* Infinite Text Scroll */}
      <div
        id="Infinite-Scroll"
        className="w-full p-2 overflow-hidden text-white bg-green-600"
      >
        <div className="space-x-6 flex whitespace-nowrap animate-scroll">
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
          <span>{main.infiniteText}</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full h-full p-6 xl:p-12 xl:px-80 flex flex-col gap-6">
        <h2 className="text-2xl md:text-4xl font-black text-center underline">
          TERMS & CONDITIONS
        </h2>

        <p className="text-lg md:text-xl">
          By accessing and purchasing from our website, you agree to the terms
          and conditions outlined below. Please read them carefully before
          making a purchase.
        </p>

        <h2 className="text-xl md:text-2xl font-black">1. Digital Product</h2>
        <p className="text-lg md:text-xl">
          Our ebook is a <strong>digital product</strong>. No physical copy will
          be shipped. Access is provided instantly through the{" "}
          <strong>/thanks page</strong> with a link to our official Telegram
          channel.
        </p>

        <h2 className="text-xl md:text-2xl font-black">2. Payment & Pricing</h2>
        <p className="text-lg md:text-xl">
          All payments must be completed in full before gaining access to the
          ebook. Prices are displayed in INR (₹), and payment is processed
          securely through our payment gateway.
        </p>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>
            The <strong>original price</strong> of the ebook is ₹{ORIGINAL_PRICE}.
          </li>
          <li>
            The <strong>current price</strong> may be lower depending on ongoing
            promotions or offers.
          </li>
          <li>
            We reserve the right to change prices at any time as part of future
            promotions, discounts, or adjustments.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black">3. Refund Policy</h2>
        <p className="text-lg md:text-xl">
          Refunds are subject to our{" "}
          <a href="/refund-policies" className="text-green-600 underline">
            Refund Policies
          </a>
          . In summary, refunds are not provided except when the ebook does not
          deliver on its claims <strong>and</strong> you can provide proof of
          full implementation.
        </p>

        <h2 className="text-xl md:text-2xl font-black">4. Delivery</h2>
        <p className="text-lg md:text-xl">
          After successful payment, you will be redirected to the{" "}
          <strong>/thanks page</strong>, where the Telegram channel link will be
          provided. Joining this channel gives you access to download the ebook
          file.
        </p>

        <h2 className="text-xl md:text-2xl font-black">5. Usage Rights</h2>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>The ebook is licensed for personal use only.</li>
          <li>
            Sharing, reselling, or distributing the ebook or Telegram channel
            link is strictly prohibited.
          </li>
          <li>
            Any unauthorized distribution may result in removal of access and
            legal action.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black">6. Responsibility</h2>
        <p className="text-lg md:text-xl">
          The strategies, methods, and insights in the ebook are for{" "}
          <strong>educational purposes only</strong>. Results may vary depending
          on your level of effort, consistency, and circumstances. We do not
          guarantee any specific financial or personal outcome.
        </p>

        <h2 className="text-xl md:text-2xl font-black">7. Age Restriction</h2>
        <p className="text-lg md:text-xl">
          There is <strong>no strict age restriction</strong> for purchasing or
          reading this ebook. However, the content is primarily intended for
          individuals aged <strong>13 and above</strong>, as it involves
          business, finance, and digital strategies that may not be suitable for
          younger audiences.
        </p>

        <h2 className="text-xl md:text-2xl font-black">8. Support</h2>
        <p className="text-lg md:text-xl">
          If you face technical issues with payment, accessing the /thanks page,
          or joining the Telegram channel, contact our support team at{" "}
          <strong>{main.email}</strong>. We aim to respond within 24 hours.
        </p>

        <h2 className="text-xl md:text-2xl font-black">9. Amendments</h2>
        <p className="text-lg md:text-xl">
          We reserve the right to update these Terms & Conditions at any time.
          Changes will be effective immediately once updated on this page.
        </p>

        <p className="mt-2 text-sm text-stone-600">
          *By purchasing our ebook, you confirm that you have read, understood,
          and agreed to abide by these Terms & Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
