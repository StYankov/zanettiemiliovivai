import { useSelect } from '@wordpress/data';
import { MediaPlaceholder } from '@wordpress/block-editor';

export function MediaUploadPreview({
    imageId,
    imageUrl,
    onSelect,
    label = 'Image'
}) {
    const thumbnailUrl = useSelect( select => {
        const image = imageId && select( 'core' ).getMedia( imageId );
        return image && image?.media_details?.sizes?.medium?.source_url || imageUrl;
      }, [ imageId ] );

    const mediaPreview = !! thumbnailUrl && (
        <a href={ imageUrl }>
            <img src={ thumbnailUrl } />
        </a>
    );

    return (
        <MediaPlaceholder
            onSelect = {onSelect}
            value={{
                id: imageId,
                src: imageUrl
            }}
            allowedTypes = { [ 'image' ] }
            multiple = { false }
            mediaPreview={mediaPreview}
            labels={{ title: label }}
        />
    )
}