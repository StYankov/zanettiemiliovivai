import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import { Edit } from './edit';

registerBlockType(metadata.name, {
    title: metadata.title,
    attributes: metadata.attributes,
    edit: Edit,
    save(props) {
        return null;
    }
});