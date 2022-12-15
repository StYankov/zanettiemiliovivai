export function Jumbotron({ attributes }) {
    const { imageUrl, heading, title, subtitle } = attributes;

    return (
        <div className="jumbotron" style={{
            backgroundImage: `url(${imageUrl || 'https://via.placeholder.com/1920x1080' })`
        }}>
            <div className="jumbotron__inner">
                <h1 className="jumbotron__title">{ title }</h1>

                <h4 className="jumbotron__heading">{ heading }</h4>

                <div className="jumbotron__footer">
                    <div className="jumbotron__line"></div>
                    <div className="jumbotron__subtitle h1">{ subtitle }</div>
                    <div className="jumbotron__line right"></div>
                </div>
            </div>
        </div>
    );
}