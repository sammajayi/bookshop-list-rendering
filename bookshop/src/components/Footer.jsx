
const Footer = () => {
  return (
    <div className="flex justify-center bg-slate-100 pt-10 pb-10">
        
        <div className="flex">
            <div>
            <img src="./src/assets/logo.png" alt="logo" />
                <p className="text-left">Bookshop is a platform for book lovers to find their favorite books and authors.<br/> We provide a wide range of books in different genres and languages.</p>
            </div>
            <div className="ml-10">
                <h1 className="text-xl !font-bold">Quick Links</h1>
                <ul>
                    <li>Home</li>
                    <li>Books</li>
                    <li>AudioBooks</li>
                    <li>Stationery & Gifts</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="ml-10"> 
                <h1 className="text-xl !font-bold"> Follow Us</h1>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer