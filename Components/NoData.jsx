"use client"
import loading from '../assets/images/loading.svg'
import loadingcircle from '../assets/images/loading-circle.svg'
const NoData = () => {
    return (
        <>
            <div className="loading" data-loading>
                <img src={loading} width="55" height="55" alt="loading" className="img" />
                <img src={loadingcircle} width="70" height="70" alt="please wait" className="circle" />
            </div>
        </>
    )
}

export default NoData