<<<<<<< HEAD
import loading from '../assets/images/loading.svg'
import loadingcircle from '../assets/images/loading-circle.svg'
=======
"use client"
import Image from 'next/image'
// import loading from '../assets/images/loading.svg'
// import loadingcircle from '../assets/images/loading-circle.svg'
>>>>>>> a885a359905d40dfeb7046a96a7c89bf0b7eaa58
const NoData = () => {
    return (
        <>
            <div className="loading" data-loading>
                {/* <img src={"/public/assets/images/loading.svg"} width="55" height="55" alt="loading" className="img" />
                
                <img src={"/public/assets/images/loading-circle.svg"} width="70" height="70" alt="please wait" className="circle" /> */}
                <Image
                    src="public/assets/images/loading.svg"
                    width={55}
                    height={55}
                    alt="Picture of the author"
                />
                <Image
                    src="public/assets/images/loading-circle.svg"
                    width={70}
                    height={70}
                    alt="Picture of the author"
                />
            </div>
        </>
    )
}

export default NoData