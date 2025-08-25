const Message = ({ status }) => {
  const messages = {
    loading: "Processing payment, please wait...",
    success: "Payment Successful! Redirecting...",
    failed: "Payment Failed. Please try again.",
  };
  const colors = {
    failed: "bg-red-600",
    success: "bg-green-600",
    loading: "bg-yellow-500",
  };

  return (
    <div
      className={`p-2 px-6 md:text-lg fixed bottom-6 xl:bottom-12 right-6 xl:right-12 rounded text-white ${colors[status]}`}
    >
      {messages[status]}
    </div>
  );
};

export default Message;
