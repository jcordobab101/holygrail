//PlusMinus component
const PlusMinus = props => {
    const handle = e => {
        if(e.target.id.includes('minus')){
            props.handle({name:props.section, value: -1});
            return;    
        }
        props.handle({name:props.section, value: 1});    
    }
    return (<>
        <img src={`icons/${props.section}_plus.png`} id="plus" onClick={((e) => handle(e))}/>
        <img src={`icons/${props.section}_minus.png`} id="minus" onClick={((e) => handle(e))}/>
    </>);
}


//Pass Data to props
const Data = props => {
    return (<div>
        Header:  {props.data.header}, 
        Left:    {props.data.left}, 
        Article: {props.data.article}, 
        Right:   {props.data.right}, 
        Footer:  {props.data.footer}
    </div>);
}
//Asynchronous calls  update
const update = (section, value) => {
    return new Promise((resolve, reject) => {
        var url = `/update/${section}/${value}`;        
        superagent
            .get(url)
            .end(function(err, res){
                err ? reject(null) : resolve(res.body);
            });
    });
}
//Asynchronous call read
const read = () => {
    return new Promise((resolve, reject) => {
        var url = '/data';
        superagent
            .get(url)
            .end(function(err, res){
                err ? reject(null) : resolve(res.body);
            });
    });
}

//Main component - App
const App = () => {
    const [data, setData]   = React.useState({header:0,left:0,article:0,right:0,footer:0});    

    // const handle = section => {
    //     print('pong', section);
    //     const value = data[section.name] + section.value;
    //     const object = {[section.name]:value};
    //     setData({...data, ...object});
    // }

    React.useEffect(() => {
        // read db data & update UI
        const response = read()
            .then(res => {
                setData(res)
        });        
    }, []);

    const handle = section => {
        // update db & local state
        const response = update(section.name, section.value)
            .then(res => {
                setData(res)
            });
    }

    return (<>
        <div className="grid">        
            <Header  handle={handle} data={data}/>
            <Left    handle={handle} data={data}/>
            <Article handle={handle} data={data}/>
            <Right   handle={handle} data={data}/>
            <Footer  handle={handle} data={data}/>
        </div>
    </>);
}

//React document render
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
var print      =     console.log.bind(print);


