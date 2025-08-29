import main from "../main";

const PrivacyPolicy = () => {
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
        <h4 className="text-2xl md:text-4xl font-black text-center underline">
          PRIVACY POLICIES
        </h4>

        <p className="text-lg md:text-xl">
          This Privacy Policies outlines how we collect, use, and protect your
          personal information when you purchase and access our ebook.
        </p>

        <h4 className="text-xl md:text-2xl font-bold">
          1. Information We Collect
        </h4>
        <p className="text-lg md:text-xl">
          When you make a purchase, we may collect personal details such as:
        </p>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>Name</li>
          <li>Email address</li>
          <li>Contact Number</li>
          <li>Payment details (processed securely via Razorpay)</li>
        </ul>

        <h4 className="text-xl md:text-2xl font-bold">
          2. How We Use Your Information
        </h4>
        <p className="text-lg md:text-xl">We use the information to:</p>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>Process payments securely</li>
          <li>Provide access to the ebook through our Telegram channel</li>
          <li>Send updates about your order and related content</li>
          <li>Improve our services and user experience</li>
        </ul>

        <h4 className="text-xl md:text-2xl font-bold">
          3. Third-Party Services We Use
        </h4>
        <p className="text-lg md:text-xl">
          We work with trusted third-party services to deliver our product:
        </p>
        <ul className="list-disc pl-6 text-lg md:text-xl">
          <li>
            <strong>Razorpay</strong> - for secure payment processing. We do not
            store your card details; Razorpay handles all payment data securely.
          </li>
          <li>
            <strong>Telegram</strong> - to provide you access to the eBook via a
            private channel.
          </li>
        </ul>

        <h4 className="text-xl md:text-2xl font-bold">4. Data Protection</h4>
        <p className="text-lg md:text-xl">
          We implement industry-standard security measures to protect your
          personal and payment information. All payments are handled through
          Razorpay's secure gateway.
        </p>

        <h4 className="text-xl md:text-2xl font-bold">
          5. Sharing of Information
        </h4>
        <p className="text-lg md:text-xl">
          We do not sell, trade, or share your personal information with third
          parties, except:
        </p>
        <ul className="list-disc ml-6 text-lg md:text-xl">
          <li>When required by law</li>
          <li>For secure payment processing through Razorpay</li>
        </ul>

        <h4 className="text-xl md:text-2xl font-bold">6. Cookies</h4>
        <p className="text-lg md:text-xl">
          Our website may use cookies to enhance user experience and track site
          performance. You may disable cookies in your browser settings if you
          prefer.
        </p>

        <h4 className="text-xl md:text-2xl font-bold">7. Your Rights</h4>
        <p className="text-lg md:text-xl">
          You have the right to request access, correction, or deletion of your
          personal data by contacting us via email.
        </p>

        <h4 className="text-xl md:text-2xl font-bold">8. Contact Us</h4>
        <p className="text-lg md:text-xl">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at:
          <br />
        </p>
        <p className="text-lg md:text-xl font-semibold">{main.email}</p>

        <p className="mt-2 text-sm text-stone-600">
          *We use third-party services such as Razorpay (for payments) and
          Telegram (for delivering the eBook). By purchasing, you agree to their
          respective privacy policies in addition to ours.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
