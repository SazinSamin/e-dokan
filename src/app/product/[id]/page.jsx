import Link from "next/link";
export default function Product ({params}) {

  console.log(params);

  return <div>
    <h1>Product: {params.id}</h1>
  </div>
}