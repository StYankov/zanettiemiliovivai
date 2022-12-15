export function Tabs({ attributes }) {
    const {
        onSaleProducts,
        featuredProducts,
        newProducts
    } = attributes;

    const tabs = [];

    if(onSaleProducts)
        tabs.push({
            key: 'on-sale',
            label: 'On Sale'
        });
    
    if(featuredProducts)
        tabs.push({
            key: 'features',
            label: 'Featured'
        });

    if(newProducts)
        tabs.push({
            key: 'new-arrivals',
            label: 'New Arrivals'
        });

    return (
        <ul className="product-grid-tabs__tabs">
            { tabs.map( t => <li key={t.key} data-tab={t.key}>{ t.label }</li> ) }
        </ul>
    );
}