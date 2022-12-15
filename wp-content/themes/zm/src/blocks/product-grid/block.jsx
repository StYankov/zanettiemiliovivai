import { useEffect, useState } from "@wordpress/element";
import apiFetch from '@wordpress/api-fetch';

function Product({ product }) {
    return (
        <div className="cell medium-3">
            <div className="product-square">
                <div className="product-square__thumbnail">
                    { product.images.length && <img src={product.images[0].src} /> }
                </div>
                <div className="product-square__overlay">
                    <h5 className="product-square__title">{ product.name }</h5>
                    <div className="product-square__price" dangerouslySetInnerHTML={{ __html: product.price_html }} />
                </div>
                <a href={product.permalink} className="product-square__permalink"></a>
            </div>
        </div>
    )
}

export function Block({ attributes }) {
    const { category } = attributes;
    const [products, setProducts] = useState([]);

    const key = 'ck_6698fe97c5b09db859422506c3b30cc8e6ec85e1';
    const secret = 'cs_fb73e9e2afabc98f512e2e69b9452a379ce76667';

    useEffect(() => {
        const query = category ? `category=${category}` : 'featured=true';
        apiFetch({
            path: `/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&${query}&per_page=4`,
        }).then(products => {
            console.log(products);
            setProducts(products);
        });
    }, [category]);

    return (
        <div className="grid-x grid-margin-x">
            {products.map(p => <Product key={p.id} product={p} />)}
            {products.length === 0 ? <h2 style={{ textAlign: 'center' }}>No Products</h2> : null}
        </div>
    );
}