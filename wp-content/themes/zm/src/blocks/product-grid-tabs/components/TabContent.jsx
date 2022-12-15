import { Product } from './Product';

export function TabContent({ products }) {
    return (
        <div className="product-grid-tabs__grid grid-x grid-padding-x">
            { products.map(product => <Product key={product.id} product={product} />) }
        </div>
    );
}