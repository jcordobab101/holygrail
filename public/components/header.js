const Header = (props) => {
    return (
        <>
            <header>
                <PlusMinus section="header" handle={props.handle}/> // Pass props of handle into the component
                <div className="section">Header:{props.data.header}</div> //Title
                <Data data={props.data}/> //Data pass to props
            </header>


        </>);
}