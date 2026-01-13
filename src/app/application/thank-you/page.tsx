import Link from "next/link";

export default function ThankyouPage() {
  return (
    <div className="flex flex-col items-center justify-center py-28 w-8/12 mx-auto text-center">
      <h1 className="text-5xl font-bold mb-8">Thank You for Applying!</h1>

      <p className="text-lg mb-8 text-gray-700">
        We appreciate your interest to become a Zent Ambassador. Your
        application has been successfully submitted and is under review. If
        selected, our team will reach out with next steps on how you can start
        earning, creating impact, and growing with Zent.
      </p>

      <Link href="/">
        <button
          type="button"
          className="w-48 h-10 bg-black text-white rounded-xl flex items-center justify-center text-base hover:bg-gray-900 transition"
        >
          Home
        </button>
      </Link>
    </div>
  );
}
