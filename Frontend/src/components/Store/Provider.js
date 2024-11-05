import Context from "./Context";

function Provider({children, value}) {
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export default Provider;