import { InnerBlocks } from '@wordpress/block-editor';

export function Edit({ attributes, setAttributes }) {
    const { title } = attributes;

    return (
        <li className="accordion-item is-active" data-accordion-item>
            <a href="#" className="accordion-title">
                <input type="text" value={title} placeholder='Tab Heading' onInput={e => setAttributes({ title: e.target.value })} />
            </a>

            <div className="accordion-content" style={{ display: 'block', padding: '20px' }} data-tab-content>
                <InnerBlocks />
            </div>
        </li>  
    )
}