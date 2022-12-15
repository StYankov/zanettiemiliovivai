import { registerBlockType } from "@wordpress/blocks";
import metadata from './block.json';

import { Edit } from './edit';
import { Save } from './blockSave';

registerBlockType(metadata.name, {
    title: metadata.title,
    attributes: metadata.attributes,
    edit: Edit,
    save: Save,
});