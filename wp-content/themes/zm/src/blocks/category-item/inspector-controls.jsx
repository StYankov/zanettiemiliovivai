import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

export function CategoryItemInspectorControls({ attributes, setAttributes }) {
    const { categoryId, categories = [] } = attributes;

    useEffect(() => {
        apiFetch( { path: '/wp/v2/product_cat?per_page=100' } ).then( ( terms ) => {
            const categories = terms.map( term => {
                return {
                    value: term.id,
                    label: term.name
                };
            } );

            setAttributes({ categories });
        } );
    }, []);

    return (
        <InspectorControls>
            <PanelBody title='Settings' initialOpen>
                <PanelRow>
                    <SelectControl
                        name='categoryId'
                        className='category-item-selector'
                        label="Category"
                        value={categoryId}
                        options={categories}
                        onChange={ value => setAttributes({ categoryId: parseInt(value) }) }
                        default="Select Category"
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    );
}