import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const defaultTerm = () => ({
    featuredImage: 'https://dummyimage.com/300x300/fff/aaa',
    url: '#',
    name: 'Example Term',
    count: 4
});

export function CategoryItem({ attributes }) {
    const { categoryId } = attributes;
    const [category, setCategory] = useState(defaultTerm());

    useEffect(() => {
        if(!categoryId) {
            return;
        }

        apiFetch( {
            path: `/wp/v2/product_cat/${categoryId}`
        } ).then( term => {
            setCategory({
                featuredImage: term.featured_image, 
                url: term.link,
                name: term.name,
                count: term.count
            });
        } );
    }, [categoryId]);

    return (
        <div className="category-item">
            <div className="category-item__thumbnail">
                <img src={ category.featuredImage } />
            </div>
            <a className="category-item__link" href={ category.url }>
                <span className="category-item__name h4">{ category.name }</span>
                <span className="category-item__count">{ category.count } products</span>
            </a>
        </div>
    );
}