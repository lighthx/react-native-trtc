import React, {memo} from "react";
import TRTCVideoView from './TRTCView';
import PropTypes from 'prop-types';
const TRTCView = memo((props)=>{
    const {uid} = props;
    return(
        <TRTCVideoView {...props}/>
    )
})
TRTCView.propTypes = {
    uid: PropTypes.string,
    subUid:PropTypes.string,
    renderMode: PropTypes.number,
    style: PropTypes.any,
}

export default TRTCView;
