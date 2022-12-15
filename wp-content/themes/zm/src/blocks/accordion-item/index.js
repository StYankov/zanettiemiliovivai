import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import { Edit } from './edit';

registerBlockType(metadata.name, {
    title: metadata.title,
    attributes: metadata.attributes,
    edit: Edit,
    save(props) {
        const { title } = props.attributes;

        const blockProps = useBlockProps.save();
        
        return (
            <li {...blockProps} className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">
                    { title }
                </a>

                <div className="accordion-content" data-tab-content>
                    <InnerBlocks.Content />
                </div>
            </li>  
        );
    }
});