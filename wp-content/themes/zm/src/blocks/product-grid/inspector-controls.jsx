import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, CheckboxControl, SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

export function ProductGridInspectorControls({ attributes, setAttributes }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        apiFetch( { path: '/wp/v2/product_cat?per_page=100' } ).then( ( terms ) => {
            const categories = terms.map( term => {
                return {
                    value: term.id,
                    label: term.name
                };
            } );

            categories.unshift({
                value: 0,
                label: 'None'
            });

            setCategories(categories);
        });
    }, []);

    return (
        <InspectorControls>
            <PanelBody title='Settings'>
                <PanelRow>
                    <SelectControl
                        label='Category'
                        options={categories}
                        help="By default featured products are shown in the grid. You can override this by choosing a category to fetch products from"
                        value={attributes.category}
                        onChange={category => setAttributes({ category })}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}