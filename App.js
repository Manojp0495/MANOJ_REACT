const element=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h2",{},"From h2")
    )
)




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(element);