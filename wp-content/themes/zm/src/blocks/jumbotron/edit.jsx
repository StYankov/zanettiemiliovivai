import { useBlockProps } from '@wordpress/block-editor';
import { JumbotronInspectorControls } from './inspector-controls';
import { Jumbotron } from './block';

export function Edit(props) {
	const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <JumbotronInspectorControls {...props} />
            <Jumbotron {...props} />
        </div>
    );
}