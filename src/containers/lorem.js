import React from 'react';

export default function Lorem(props){
    const {textRange,children} = props;
    let text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, vero? Suscipit dignissimos aperiam id rerum amet reprehenderit autem, enim voluptatum excepturi eaque, beatae explicabo ut aliquam tenetur reiciendis distinctio voluptas! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, vero? Suscipit dignissimos aperiam id rerum amet reprehenderit autem, enim voluptatum excepturi eaque, beatae explicabo ut aliquam tenetur reiciendis distinctio voluptas!';
    if (textRange) {
        text = text.slice(0,textRange);
    }

    return (
        <React.Fragment>
        {children}
        <p>
            {text}
        </p>
        </React.Fragment>
        );
        
}
