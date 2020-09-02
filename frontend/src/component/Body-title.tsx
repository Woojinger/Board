import React from "react"
import { connect, ConnectedProps } from 'react-redux';

interface RootState {
    page: String;
}

const mapState = (state: RootState) => {
    return ({
    page:state.page
    })
}

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const Body_title = (props: Props) => {
    return(
        <div className="body_title">
            <h1>{props.page}</h1>
        </div>
    )
}


export default connector(Body_title)