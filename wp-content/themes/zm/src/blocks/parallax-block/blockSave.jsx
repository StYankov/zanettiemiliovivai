import { useBlockProps } from '@wordpress/block-editor';

export function Save(props) {
    const {
        backFaceImageUrl,
        frontFaceImageUrl,
        frontImagePosition
    } = props.attributes;

    const blockProps = useBlockProps.save();
    
    return (
        <div {...blockProps}>
            <div className={`image-block-parallax position-${frontImagePosition}`}>
                <div className="image-block-parallax__back">
                    {backFaceImageUrl && <img src={backFaceImageUrl} />}
                </div>
                <div className="image-block-parallax__front">
                    {frontFaceImageUrl && <img src={frontFaceImageUrl} />}
                </div>
            </div>
        </div>
    );
}