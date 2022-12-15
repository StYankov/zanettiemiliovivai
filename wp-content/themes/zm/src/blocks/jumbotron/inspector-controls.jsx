import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { MediaUploadPreview } from '../utils/mediaPreview';

export function JumbotronInspectorControls({ attributes, setAttributes}) {
    const { imageId, imageUrl, heading, title, subtitle } = attributes;
    
    return (
        <InspectorControls>
            <PanelBody
                title="Settings"
                initialOpen
            >
                <PanelRow>
                    <MediaUploadPreview
                        imageId={imageId}
                        imageUrl={imageUrl}
                        onSelect={el => setAttributes({ imageUrl: el.url, imageId: el.id })}
                        label='Background Image'
                    />
                </PanelRow>

                <PanelRow>
                    <TextControl
                        label="Heading"
                        onChange={ heading => setAttributes({ heading }) }
                        value={heading}
                    />
                </PanelRow>


                <PanelRow>
                    <TextControl
                        label="Title"
                        onChange={ title => setAttributes({ title }) }
                        value={title}
                    />
                </PanelRow>

                <PanelRow>
                    <TextControl
                        label="Subtitle"
                        onChange={ subtitle => setAttributes({ subtitle }) }
                        value={subtitle}
                    />
                </PanelRow>

            </PanelBody>
        </InspectorControls>
    );
}