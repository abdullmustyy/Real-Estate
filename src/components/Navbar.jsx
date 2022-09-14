export default function Navbar() {
  return (
    <nav className="navbar container font-finlandica mx-auto py-5 pr-5">
      <div className="flex item-center justify-between">
        <div className="navbar--logo flex items-center space-x-1 font-bold">
          <span>Real</span>
          <span className="text-re-green">Estate</span>
        </div>
        <div className="navbar--nav container hidden md:flex items-center justify-end space-x-16 font-medium">
          <a href="#" className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4">Home</a>
          <a href="#" className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4">Service</a>
          <a href="#" className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4">About</a>
          <a href="#" className="hover:border-b-2 border-re-green active:text-re-green focus:border-b-4">Contact</a>
          <a
            href="#"
            className="bg-re-green text-white px-5 py-1 rounded-sm hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
