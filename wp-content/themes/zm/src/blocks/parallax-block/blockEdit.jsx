import { useEffect, useRef } from "@wordpress/element";
import Rellax from 'rellax';

export function ImageBlockParallax(props) {
    const {
        backFaceImageUrl,
        frontFaceImageUrl,
        frontImagePosition
    } = props.attributes;

    const elRef = useRef(null);

    useEffect(() => {
        if(backFaceImageUrl && elRef.current) {
            new Rellax(elRef.current.querySelector('.image-block-parallax__back img'));
        }
    }, [backFaceImageUrl]);

    useEffect(() => {
        if(frontFaceImageUrl && elRef.current) {
            new Rellax(elRef.current.querySelector('.image-block-parallax__front img'));
        }
    }, [frontFaceImageUrl]);

    return (
        <div ref={elRef} className={`image-block-parallax position-${frontImagePosition}`}>
            <div className="image-block-parallax__back">
                {backFaceImageUrl && <img src={backFaceImageUrl} />}
            </div>
            <div className="image-block-parallax__front">
                {frontFaceImageUrl && <img src={frontFaceImageUrl} />}
            </div>
        </div>
    );
}