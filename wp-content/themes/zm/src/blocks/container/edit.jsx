import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { ContainerInspectorControls } from './inspector-controls';

export function Edit(props) {
    const mobileNoPadding = props.attributes.mobileNoPadding || false;
    return (
        <div {...useBlockProps()} className={`grid-container${mobileNoPadding ? ' mp-0' : ''}`}>
            <ContainerInspectorControls {...props} />
            <InnerBlocks />
        </div>
    );
}