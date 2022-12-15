export function Post({ post }) {
    return (
        <div className="cell medium-4">
            <div className="post-grid">
                <div className="post-grid__featured-image">
                    <a href="#">

                    </a>
                </div>
                <div className="post-grid__body">
                    <p className="post-grid__date">December 10, 2022</p>
                    <h4 className="post-grid__name"><a href="#">New Roses whatever</a></h4>
                    <p className="post-grid__excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eaque suscipit, </p>
                </div>
            </div>
        </div>
    );
}