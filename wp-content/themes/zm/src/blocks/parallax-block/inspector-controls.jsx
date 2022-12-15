import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { MediaUploadPreview } from '../utils/mediaPreview';

export function ImageBlockParallaxInspectorControls({ attributes, setAttributes }) {
    const {
        backFaceImageId,
        backFaceImageUrl,
        frontFaceImageId,
        frontFaceImageUrl,
        frontImagePosition
    } = attributes;

    return (
        <InspectorControls>
            <PanelBody title='Settings'>
                <PanelRow>
                    <MediaUploadPreview
                        imageId={ backFaceImageId }
                        imageUrl={ backFaceImageUrl }
                        label="Background Image"
                        onSelect={el => setAttributes({ backFaceImageUrl: el.url, backFaceImageId: el.id })}
                    />
                </PanelRow>

                <PanelRow>
                    <MediaUploadPreview
                        imageId={ frontFaceImageId }
                        imageUrl={ frontFaceImageUrl }
                        label="Front Image (Parallax)"
                        onSelect={ el => setAttributes({ frontFaceImageUrl: el.url, frontFaceImageId: el.id }) }
                    />
                </PanelRow>

                <PanelRow>
                    <SelectControl
                        label="Front Image Position"
                        value={ frontImagePosition }
                        defaultValue="front-right"
                        options={[
                            { label: 'Right', value: 'front-right' },
                            { label: 'Left', value: 'front-left' }
                        ]}
                        onChange={ value => setAttributes({ frontImagePosition: value }) }
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    );
}