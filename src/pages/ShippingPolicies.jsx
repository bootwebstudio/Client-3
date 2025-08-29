import main from "../main";

const ShippingPolicy = () => {
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
          SHIPPING POLICY
        </h2>

        <p className="text-lg md:text-xl">
          Our ebook is a <strong>digital product</strong>, so there is{" "}
          <strong>no physical shipping involved</strong>. Access is provided
          instantly after successful payment.
        </p>

        <h2 className="text-xl md:text-2xl font-black">How Delivery Works:</h2>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>
            After completing payment, you will be automatically redirected to
            the <strong>/thanks page</strong>.
          </li>
          <li>
            On the <strong>/thanks page</strong>, you will find a secure{" "}
            <strong>Telegram channel link</strong>.
          </li>
          <li>
            Inside that Telegram channel, the ebook file will be available for
            you to download immediately.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black">
          If You Miss the Link:
        </h2>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>
            If you accidentally close the page before joining the Telegram
            channel, contact us at <strong>{main.email}</strong> with your
            payment receipt.
          </li>
          <li>
            We will verify your order and re-send the official channel link.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black">Important Notes:</h2>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>No physical book will ever be shipped to your address.</li>
          <li>
            Ensure your payment is successful to be redirected properly to the{" "}
            <strong>/thanks page</strong>.
          </li>
          <li>
            The Telegram channel link is{" "}
            <strong>for paying customers only</strong>— sharing it with others
            is not allowed.
          </li>
        </ul>

        <p className="text-lg md:text-xl">
          Our priority is to make delivery <strong>instant and seamless</strong>
          . If you face any issue in accessing the channel or downloading your
          ebook, just reach out and we'll help you immediately.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
