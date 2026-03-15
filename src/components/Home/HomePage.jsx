import VideoHomePage from '../../assets/3.mp4'

const HomePage = (props)=>{
    return(
        <div className='homepage-container'>
            <video   autoPlay muted loop>
                <source src={VideoHomePage} 
                        type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-st'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate.</div>
                <div className='title-nd'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id magni 
                    sint sequi assumenda repudiandae.</div>
                <div>
                    <button className='title-th'>Lorem ipsum dolor sit amet.</button>
                </div>
            </div>
            
        </div>
    )
}
export default HomePage