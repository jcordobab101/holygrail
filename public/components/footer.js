const Footer = (props) => {
    return (
        <>
            <footer>
                <PlusMinus section="footer" handle={props.handle}/> // Pass props of handle into the component
                <div className="section">Footer:{props.data.footer}</div> //Title
                <Data data={props.data}/> //Data pass to props
            </footer>


        </>);
}