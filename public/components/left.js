const Left = (props) => {
    return (
        <>
            <aside>
                <PlusMinus section="left" handle={props.handle}/> // Pass props of handle into the component
                <div className="section">Left:{props.data.left}</div> //Title
                <Data data={props.data}/> //Data pass to props
            </aside>


        </>);
}