var style = {
    backgroundColor: "#7c7c7c",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

export function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
             <p>SARC</p>  
            </div>
        </div>
    )
}

