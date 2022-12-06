import ProductCount from "../ProductCount";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="nav-header">
        <a href="/"><h1>DSFilter</h1></a>
        <ProductCount />
      </nav>
    </header>
  );
}
