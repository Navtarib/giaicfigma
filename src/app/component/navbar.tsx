import Link from "next/link";
export default function Navbar() {
  return ( 
  <div className="container text-white mx-auto flex flex-wrap  flex-col md:flex-row items-center  h-[91px] w-[1322px]  justify-around">
    <div>
    <a className="flex justify-center  title-font font-medium items-center text-white w-[157px]">
      <span className=" text-xl font-bold ">BrandName</span>
    </a>
    </div>
    <nav className=" flex  items-center  w-[815px] h-[58px] justify-between">
     <div className="flex justify-center gap-6 font-bold">
      <Link href="/" className=" hover:text-yellow-200">Home</Link>
      <Link href="/services" className=" hover:text-yellow-200">Product</Link>
      <Link href="/projects" className=" hover:text-yellow-200">Pricing</Link>
      <Link href="/contact" className=" hover:text-yellow-200">Contact</Link>
      </div>
      <div className="login gap-6 flex justify-center items-center  w-[189px]">
      <Link href="#" className=" hover:text-gray-900 h-[22px] w-[41px]" >Login</Link>
       <button className="btn  bg-[#23A6F0]  h-[52px] w-[110px] rounded-l-lg text-white px-[25px] py-[15px]">Join Us</button>
      </div>

    </nav>
    </div>
  );
}
