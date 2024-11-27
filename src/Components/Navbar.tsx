const Navbar = () => {
  return (
    <div className="w-full justify-between flex h-16 px-32 shadow-xl border ">
      <div className="flex w-full items-center">
        <h2 className="text-base">Turama</h2>
      </div>
      <div className="w-full flex justify-end">
        <ul className="flex space-x-8 items-center">
          <li>Home</li>
          <li>About Me</li>
          <li>Gallery</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
