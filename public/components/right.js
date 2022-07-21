const Right = (props) => {
    return (
        <>
            <aside>
                <PlusMinus section="right" handle={props.handle}/> // Pass props of handle into the component
                <div className="section">Right:{props.data.right}</div> //Title
                <Data data={props.data}/> //Data pass to props
            </aside>


        </>);
}