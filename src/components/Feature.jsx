export default function Feature({ title, desc, url }) {
  return (
    <div className="feature flex flex-col items-center justify-between gap-y-8">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="font-normal text-sm text-center">{desc}</p>
      <a
        href={url}
        className="bg-re-green text-white px-6 py-2 rounded-sm flex items-center justify-center space-x-1 w-fit font-semibold text-sm hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-white"
      >
        <span>Get started</span>
        <i class="ri-arrow-right-s-line"></i>
      </a>
    </div>
  );
}
