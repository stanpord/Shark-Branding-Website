import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
        404
      </p>
      <h1 className="display-hero text-white mb-5">Page not found.</h1>
      <p className="lead-airy text-[#cccccc] max-w-[480px] mb-10">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-press bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-[#1ec8ee] transition-colors duration-150"
      >
        Back to Home
      </Link>
    </section>
  );
}
