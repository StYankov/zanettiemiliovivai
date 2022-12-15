import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

export function PGTInspectorControls({ attributes, setAttributes }) {
    const {
        onSaleProducts,
        featuredProducts,
        newProducts
    } = attributes;

    return (
        <InspectorControls>
            <PanelBody title='Settings'>
                <PanelRow>
                    <ToggleControl
                        label='Enable On Sale Tab'
                        checked={onSaleProducts}
                        onChange={value => setAttributes({ onSaleProducts: value })}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label='Enable Featured Products Tab'
                        checked={featuredProducts}
                        onChange={value => setAttributes({ featuredProducts: value })}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label='Enable New Products Tab'
                        checked={newProducts}
                        onChange={value => setAttributes({ newProducts })}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    );
}