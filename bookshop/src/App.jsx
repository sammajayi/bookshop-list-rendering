import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

const books = [
  {
    id: 1,
    title: "Crazy Rich Asians",
    author: "Kevin Kwan",
    coverImage: "./src/assets/cover/crazy.png",
    reviews: "4.5/5",
    description:
      "The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip",
    price: "$24.12",
    discountedPrice: "$4.99",
  },
  {
    id: 2,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    coverImage: "./src/assets/cover/handmaid.png",
    reviews: "4.0/5",
    description:
      "This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...",
    price: "$18.99",
    discountedPrice: "$6.99",
  },
  {
    id: 3,
    title: "Brave New World",
    author: "Aldous Huxley",
    coverImage: "./src/assets/cover/brave.png",
    reviews: "4.7/5",
    description:
      "Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...",
    price: "$42.50",
    discountedPrice: "$12.43",
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    coverImage: "./src/assets/cover/educated.png",
    reviews: "4.2/5",
    description:
      "It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...",
    price: "$34.20",
    discountedPrice: "$12.68",
  },
  {
    id: 5,
    title: "The Weight of Things",
    author: "Marianne Fritz",
    coverImage: "./src/assets/cover/weight.png",
    reviews: "4.8/5",
    description:
      "You discover not an eccentric fluke of literary nature but rather a brilliant and masterful satiris...",
    price: "$34.20",
    discountedPrice: "$18.23",
  },
  {
    id: 6,
    title: "Mothers Stories",
    author: "Chris Power",
    coverImage: "./src/assets/cover/mothers.png",
    reviews: "4.3/5",
    description:
      "the stories in Mothers lay bare the emotional and psychic damage of life, love, and abandonment...",
    price: "$20.76",
    discountedPrice: "$12.35",
  },
];

function App() {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg ">
        <Header />
        <div className=" w-full h-full"> 
          <img src="./src/assets/banner.png" alt="" />
        </div>

        <div className="flex gap-x-32 gap-y-10 flex-wrap">
          {books.map((book) => (
            <div
              className="flex w-[25rem] h-[18.75rem] items-center mx-auto"
              key={book.id}
            >
              <div className="w-[500px] h-[18.75rem]">
                <img className="w-full h-full"
                  src={book.coverImage}
                  alt={book.title}
                />
              </div>
              <div className="py-5 ml-5  text-left">
              <p className="text-[0.8rem] text-[#5C6A79] font-[Montserrat]">{book.author}</p>
                <h2 className="text-[1rem] !font-bold">{book.title}</h2>
                <p>{book.reviews}</p>
                <p className="text-[0.8rem] text-[#5C6A79] font-[Open_Sans]">{book.description}</p>
                <div className="flex my-2"
                >
                  <p className="!font-bold text-[0.9rem] line-through">{book.price}</p>
                  <p className="text-[0.9rem] text-[#5C6A79] ml-3">{book.discountedPrice}</p>
                </div>
                <Button />
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
