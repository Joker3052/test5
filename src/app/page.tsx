import Link from "next/link";
// import { Border } from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <div className="my-4 m-0 px-0 flex items-center justify-center">
        <img className="w-full h-auto" src="/images/img_1.png" alt="" />
      </div>
      <div className="container mx-auto">
        <div className="m-4">
          <h2 className="text-center font-bold text-3xl leading-12">Discover NEW Arrivals</h2>
          <p className="text-center font-normal">Recently added shirts!</p>
        </div>
        <div className="px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            <div className="border p-4">
              <img className="w-full h-auto" src="/images/card1.png" alt="Plain White Shirt" />
              <div className="text-center">
                <h3 className="text-xl font-semibold">Plain White Shirt</h3>
                <p className="text-blue-500">$123</p>
              </div>
            </div>

            {/* Lặp lại các component cho sản phẩm khác */}
            <div className="border p-4">
              <img className="w-full h-auto" src="/images/card2.png" alt="Another Shirt" />
              <div className="text-center">
                <h3 className="text-xl font-semibold">Another Shirt</h3>
                <p className="text-blue-500">$99</p>
              </div>
            </div>

            {/* Lặp lại các component cho sản phẩm khác */}
          </div>

          {/* Lặp lại các dòng cho các dãy sản phẩm khác */}
        </div>
      </div>
    </>
  );
}
