import React from 'react';
import HlamItem from './HlamItem';

class HlamGrid extends React.Component {
    render() {
        return <div className="HlamGrid">
            {
                this.props.posts.map((p, i) =>
                    <HlamItem
                        key={i}
                        post={p}
                        onDelete={() => this.props.onDelete(p.id)}
                        onLike={() => this.props.onLike(p.id)}
                        onChoose={() => this.props.onChoose(p.id)}/>)
            }
        </div>;
    }
}

export default HlamGrid;