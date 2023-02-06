import { useQuery } from "react-query";
import { getProducts } from "../api/productsAPI";

export default function Products() {
	const { isLoading, data, isError, error } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	} else if (isError) {
		return <div>Error : {error.message}</div>;
	}

	return <div>{JSON.stringify(data)}</div>;
}
