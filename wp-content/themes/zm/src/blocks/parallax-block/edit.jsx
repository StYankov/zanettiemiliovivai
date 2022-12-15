import { useBlockProps } from '@wordpress/block-editor';
import { ImageBlockParallaxInspectorControls } from './inspector-controls';

import { ImageBlockParallax } from './blockEdit';

export function Edit(props) {
	const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <ImageBlockParallaxInspectorControls {...props} />
            <ImageBlockParallax {...props} />
        </div>
    )
}