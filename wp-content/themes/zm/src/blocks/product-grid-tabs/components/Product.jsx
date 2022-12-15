export function Product({ product }) {
    const now = new Date();
    const createdAt = new Date(product.date_created);
    const diffTime = Math.abs(now - createdAt);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const isNew = diffDays < 30;

    const salePercentage = Math.ceil((parseFloat(product.regular_price) - parseFloat(product.sale_price)) / parseFloat(product.regular_price) * 100); 

    return (
        <div className="cell medium-3">
            <div className="product-mini">
                <div className="product-mini__thumbnail">
                    { product.images.length && <img src={product.images[0].src} /> }
                </div>
                <div className="product-mini__caption">
                    <h6 className="product-mini__title">{ product.name }</h6>
                    <div className="product-mini__price" dangerouslySetInnerHTML={{ __html: product.price_html }} />
                </div>
                { product.on_sale && <div className="product-mini__sale">-{ salePercentage }%</div> }
                { isNew && <div className="product-mini__new">New</div> }
                <a href={product.permalink} className="product-mini__permalink"></a>
            </div>
        </div>
    );
}