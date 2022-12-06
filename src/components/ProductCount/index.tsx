import "./styles.css";
import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-product";

export default function ProductCount() {
  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <>
      {contextProductCount > 0 && (
        <div className="dsf-product-count">
          {contextProductCount} produto(s)
        </div>
      )}
    </>
  );
}
