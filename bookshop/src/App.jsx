import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";

const books = [
  {
    id: 1,
    title: "Crazy Rich Asians",
    author: "Kevin Kwan",
    coverImage: "./assets/cover/crazy.png",
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
    coverImage: "./assets/cover/handmaid.png",
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
    coverImage: "./assets/cover/brave.png",
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
    coverImage: "./assets/cover/educated.png",
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
    coverImage: "./assets/cover/weight.png",
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
    coverImage: "./assets/cover/mothers.png",
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
      <div className="container mx-auto max-w-screen-lg bg-blue-300">
        <Header />
        {/* style={{ display: "flex", gap: "50px", flexWrap: "wrap" }} */}
        <div>
          <img src="./assets/banner.png" alt="" wid/>
        </div>
       
          <div className="flex flex-wrap gap-10 justify-around ">
            {books.map((book) => (
              <div className="items-center"
                key={book.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "424px",
                  display: "flex",
                  gap: "10px",

                }}
              >
                <div style={{ width: "300px", height:"300px" }}>
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      paddingTop: "90px",
                    }}
                  />
                </div>
                <div>
                  <h2>{book.title}</h2>
                  <p style={{ fontWeight: "bold" }}>{book.author}</p>
                  <p>{book.reviews}</p>
                  <p>{book.description}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "5px",
                      fontWeight: "bold",
                      paddingTop: "10px",
                    }}
                  >
                    <p style={{ textDecoration: "line-through" }}>
                      {book.price}
                    </p>
                    <p>{book.discountedPrice}</p>
                  </div>
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "#4C3DB2",
                      padding: "10px",
                      border: "1px solid #4C3DB2",
                      cursor: "pointer",
                      width: "150px",
                    }}
                  >
                    Buy Now
                  </button>
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