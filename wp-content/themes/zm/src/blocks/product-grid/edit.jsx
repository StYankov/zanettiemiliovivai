import { useBlockProps } from '@wordpress/block-editor';
import { ProductGridInspectorControls } from './inspector-controls';
import { Block } from './block';

export function Edit(props) {
    return (
        <div {...useBlockProps()}>
            <ProductGridInspectorControls {...props} />
            <Block {...props} />
        </div>
    )
}