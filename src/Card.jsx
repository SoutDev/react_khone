import profilepic from './assets/logo.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilepic} alt="dsds"  width={300} height={300}/>
            <h2 className='card-title'>Bro Code</h2>
            <p className='card-text'>I make youtube videos and play video games</p>
        </div>
    );

}
export default Card