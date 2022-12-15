import { useBlockProps } from '@wordpress/block-editor';
import { Block } from './block';

export function Edit(props) {
    return (
        <div {...useBlockProps()}>
            <Block {...props} />
        </div>
    );
}