const Article = (props) => {
    return (
        <>
            <article>
                <PlusMinus section="article" handle={props.handle}/> // Pass props of handle into the component
                <div className="section">Article:{props.data.article}</div> //Title
                <Data data={props.data}/> //Data pass to props
            </article>


        </>);
}