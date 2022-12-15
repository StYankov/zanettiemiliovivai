import { useBlockProps } from '@wordpress/block-editor';
import { CategoryItemInspectorControls } from './inspector-controls';
import { CategoryItem } from './block';

export function Edit(props) {
	const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <CategoryItemInspectorControls {...props} />
            <CategoryItem {...props} />
        </div>
    );
}