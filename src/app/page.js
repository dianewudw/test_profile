import Header from '../components/Header'

export default function Home() {
  // Shop: Header, List of Cards, Search Bar Input with Button
  return (
    <>
      <h1>Hello, Diane!</h1>
      <div className="Shop-Header">
        <Header />
        <p>List of Cards</p>
        <p>Search Bar</p>
        <p>Button</p>
      </div>
    </>
  );
}
