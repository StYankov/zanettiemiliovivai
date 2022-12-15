import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';

import { Tabs } from './components/Tabs';
import { TabContent } from './components/TabContent';

export function Block({ attributes, setAttributes }) {
    const key = 'ck_6698fe97c5b09db859422506c3b30cc8e6ec85e1';
    const secret = 'cs_fb73e9e2afabc98f512e2e69b9452a379ce76667';

    const {
        onSaleProducts,
        featuredProducts,
        newProducts,
        featuredProductsList,
        newProductsList,
        onSaleProductsList
    } = attributes;

    useEffect(() => {
        apiFetch({
            path: `/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&featured=true&per_page=8`,
        }).then(products => {
            setAttributes({ featuredProductsList: products });
        });

        apiFetch({
            path: `/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&orderby=date&order=desc&per_page=8`,            
        }).then(products => {
            setAttributes({ newProductsList: products });
        });

        apiFetch({
            path: `/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&on_sale=true&per_page=8`,            
        }).then(products => {
            setAttributes({ onSaleProductsList: products });
        });

    }, []);

    return (
        <div className="product-grid-tabs">
            <div className="product-grid-tabs__header">
                <h4>Just arrived in our store</h4>
                <Tabs attributes={attributes} />
            </div>
            <div className="product-grid-tabs__content">
                { featuredProducts && featuredProductsList && <TabContent products={featuredProductsList} /> }
                { newProducts && newProductsList && <TabContent products={newProductsList} />}
                { onSaleProducts && onSaleProductsList && <TabContent products={onSaleProductsList } /> }
            </div>
        </div>
    );
}