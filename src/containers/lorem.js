import React from 'react';

export default function Lorem(props){
    const {textRange,children} = props;
    let text = 'What is art? – The dictionary definition of art says that it is “the conscious use of skill and creative imagination especially in the production of aesthetic objects” (Merriam-Webster)';
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
