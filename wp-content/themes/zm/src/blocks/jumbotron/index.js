import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

import { Edit } from './edit';
import { Jumbotron } from './block';

registerBlockType(metadata.name, {
    apiVersion: 2,
    title: metadata.title,
    attributes: metadata.attributes,
    edit: Edit,
    save(props) {
        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps}>
                <Jumbotron {...props} />
            </div>
        );
    }
});