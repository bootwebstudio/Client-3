import main from "../main";

const RefundPolicy = () => {
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
          REFUND POLICY
        </h2>

        <p className="text-lg md:text-xl">
          Our goal is to provide you with a powerful ebook that delivers results
          when followed exactly as instructed. Since this is a digital product,
          we generally <strong>do not offer refunds</strong>.
        </p>

        <h2 className="text-xl md:text-2xl font-black">
          When You Can Request a Refund:
        </h2>
        <p className="text-lg md:text-xl">
          If you have applied the methods in the ebook exactly as instructed,
          and it <strong>does not work as claimed</strong>, you are eligible for
          a full refund. To claim this, simply:
        </p>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>
            Send us an email at <strong>{main.email}</strong>.
          </li>
          <li>
            Attach proof (screenshots, tracker, or results) showing you
            implemented the steps consistently.
          </li>
          <li>
            Once verified, we will process a full refund back to your original
            payment method.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-black">
          When Refunds Will NOT Be Given:
        </h2>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>If you did not follow or complete the steps in the ebook.</li>
          <li>If you simply “changed your mind” after purchasing.</li>
          <li>
            If you request a refund without providing proof of implementation.
          </li>
          <li>
            For minor technical issues (we will re-send the file/link instead).
          </li>
          <li>
            For duplicate payments (a separate refund process is already in
            place).
          </li>
        </ul>

        <p className="mt-2 text-sm text-stone-600">
          *Refund approval is subject to verification. We are committed to
          fairness but also need to prevent misuse of this policy.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
