import "./styles.css";
import { useContext, useEffect, useState } from "react";
import * as productService from "../../services/product-service";
import { ProductDTO } from "../../types/product";
import Filter from "../Filter";
import Listing from "../Listing";
import { ContextProductCount } from "../../utils/context-product";

type QueryParams = {
  priceMin: number;
  priceMax: number;
};

export default function ListingBody() {
  const { contextProductCount, setContextProductCount } =
    useContext(ContextProductCount);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParam] = useState<QueryParams>({
    priceMin: 0,
    priceMax: Number.MAX_VALUE,
  });

  useEffect(() => {
    const prod = productService.findByPrice(
      queryParams.priceMin,
      queryParams.priceMax
    );
    setContextProductCount(prod.length);
    setProducts(prod);
  }, [queryParams]);

  function handleSearch(searchPriceMin: number, searchPriceMax: number) {
    setProducts([]);
    setQueryParam({
      ...queryParams,
      priceMin: searchPriceMin,
      priceMax: searchPriceMax,
    });
  }

  return (
    <main>
      <section id="dsf-listing-section">
        <Filter onFilter={handleSearch} />
        {contextProductCount == 0 ? (
          <div className="dsf-listing-text">
            <h1>Nenhum produto encontrado!</h1>
          </div>
        ) : (
          <div className="dsf-listing-container">
            {products.map((product) => (
              <Listing key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
