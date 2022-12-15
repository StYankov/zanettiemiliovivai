import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import { Edit } from './edit';

registerBlockType(metadata.name, {
    title: metadata.title,
    attributes: metadata.attributes,
    edit: Edit,
    save(props) {
        const classes = ['grid-container'];

        if(props.attributes.mobileNoPadding)
            classes.push('mp-0')

        return (
            <div {...useBlockProps.save()} className={classes.join(' ')}>
                <InnerBlocks.Content />
            </div>
        );
    }
});