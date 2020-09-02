import React from "react"
import { connect, ConnectedProps } from 'react-redux';
import "../style/Navstyle.scss"

interface RootState {
    page: String;
}

const mapState = (state: RootState) => ({
    page:state.page
})

const mapDispatch = {
    turnHome: () => ({
        type:"HOME"
    }),
    turnAbout: () => ({
        type:"ABOUT"
    }),
    turnPortfolio: () => ({
        type:"PORTFOLIO"
    })
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const Navbar = (props: Props) => {
    console.log(props)
    return(
        <div className="header">
            <span className="Home" onClick={props.turnHome}>Home</span>
            <span className="About" onClick={props.turnAbout}>About</span>
            <span className="Portfolio" onClick={props.turnPortfolio}>Portfolio</span>
        </div>
    )
}


export default connector(Navbar)