import './Products.css'

function Products ({title, price, onSale}){
    return(
        <div className="border-solid rounded-3xl border-3 shadow-xs p-20 max-w-2xs ">
            <h1>{title}</h1>
            <p>Kaina: {price}</p>
            {onSale && <span className="text-red-400 font-bold ">SALE!</span>}
        </div>
    )
}

export default Products;