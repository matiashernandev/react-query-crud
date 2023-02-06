import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";

export default function App() {
	return (
		<>
			<ProductForm />
			<Products />
		</>
	);
}
