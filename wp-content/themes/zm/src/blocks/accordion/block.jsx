import { InnerBlocks } from '@wordpress/block-editor';

export function Block(props) {
    return (
        <ul className="accordion" data-accordion style={{ minHeight: '150px' }}>
            <InnerBlocks allowedBlocks={['zm/accordion-item']} />
        </ul>
    );
}