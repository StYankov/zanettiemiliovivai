import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import { Post } from './Post';

export function Edit(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        apiFetch({ path: 'wp/v2/posts?per_page=3' })
        .then(posts => {
            console.log(posts);
            setPosts(posts);
        });
    }, []);

    return (
        <div {...useBlockProps()}>
            <div className='grid-x grid-margin-x'>
                {posts.map(post => <Post post={post} />)}
            </div>
        </div>
    );
}