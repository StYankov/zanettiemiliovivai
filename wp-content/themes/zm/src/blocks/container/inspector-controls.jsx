import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

export function ContainerInspectorControls({ attributes, setAttributes }) {
    console.log(attributes);
    return (
        <InspectorControls>
            <PanelBody title='Settings'>
                <PanelRow>
                    <ToggleControl
                        label='Remove Padding Mobile'
                        checked={attributes.mobileNoPadding}
                        onChange={val => setAttributes({ mobileNoPadding: val })}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    );
}