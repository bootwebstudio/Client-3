import main from "../main";

const HelpSupport = () => {
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
          HELP & SUPPORT
        </h2>

        <p className="text-lg md:text-xl">
          We are committed to providing a smooth experience for all customers of
          our ebook. Below you'll find support details, common solutions, and
          ways to reach us.
        </p>

        <h4 className="text-xl md:text-2xl font-bold">1. Access Issues</h4>
        <p className="text-lg md:text-xl">
          After successful payment, you will be redirected to the{" "}
          <strong>/thanks</strong> page where you'll receive the link to join
          our private <strong>Telegram Channel</strong>. The ebook is available
          inside this channel.
        </p>
        <p className="text-lg md:text-xl">
          If you face any issue (e.g., not being redirected or link not
          working), please check your internet connection and payment
          confirmation first. If the issue persists, contact us via email.
        </p>

        <h4 className="text-xl md:text-2xl font-bold">2. Payment Issues</h4>
        <ul className="list-disc list-inside text-lg md:text-xl">
          <li>
            If your payment is successful but you didn't get redirected, send us
            your <strong>payment ID or screenshot</strong>.
          </li>
          <li>
            If you paid twice by mistake, we will process a refund for the extra
            transaction within <strong>5-7 business days</strong>.
          </li>
          <li>
            Failed transactions (money deducted but order not confirmed) will be
            verified with Razorpay and refunded if valid.
          </li>
        </ul>

        <h4 className="text-xl md:text-2xl font-bold">3. Refund Support</h4>
        <p className="text-lg md:text-xl">
          As per our{" "}
          <a href="/refund-policies" className="text-green-600 underline">
            Refund Policies
          </a>
          , a full refund is provided only if the ebook does not deliver results
          as claimed. You must send <strong>proof of implementation</strong> via
          email.
        </p>

        <h4 className="text-xl md:text-2xl font-bold">4. Contact Us</h4>
        <p className="text-lg md:text-xl">
          For any help, reach out to us at: <br />
          <strong>Email:</strong> {main.email} <br />
          <strong>Response Time:</strong> 24-48 hours (Mon-Sat) <br />
          <br />
          <strong>Address:</strong> <br />
          Koramangala, Bangalore, <br />
          Karnataka - 560034, India
        </p>

        <p className="mt-2 text-sm text-stone-600">
          *All customer support queries will be handled only via email. Physical
          visits are not accepted.
        </p>
      </div>
    </div>
  );
};

export default HelpSupport;
