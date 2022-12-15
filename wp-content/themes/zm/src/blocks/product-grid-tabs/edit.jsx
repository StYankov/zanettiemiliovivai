import { useBlockProps } from '@wordpress/block-editor';
import { Block } from './block';
import { PGTInspectorControls } from './inspector-controls';

export function Edit(props) {
    return (
        <div {...useBlockProps()}>
            <Block {...props} />
            <PGTInspectorControls {...props} />
        </div>
    );
}