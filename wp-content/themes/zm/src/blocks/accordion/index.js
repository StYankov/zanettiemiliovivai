import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import { Edit } from './edit';

registerBlockType(metadata.name, {
    title: metadata.title,
    attributes: metadata.attributes,
    edit: Edit,
    save(props) {
        return (
            <ul {...useBlockProps.save()} className='accordion' data-accordion>
                <InnerBlocks.Content />
            </ul>
        );
    }
});