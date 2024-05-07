const getTag = (tag, text, props) => {
    switch (tag) {
        case 'h1':
            return <h1 {...props}>{text}</h1>
        case 'h2':
            return <h2 {...props}>{text}</h2>
        case 'h3':
            return <h3 {...props}>{text}</h3>
        case 'h4':
            return <h4 {...props}>{text}</h4>
        case 'h5':
            return <h5 {...props}>{text}</h5>
        case 'h6':
            return <h6 {...props}>{text}</h6>
        case 'span':
            return <span {...props}>{text}</span>
        default: 
            return <p {...props}>{text}</p>
    }

}

const Typography = ({title, tag = 'p', ...rest}) => {
    return getTag(tag, title, rest)
}
export default Typography;