import '../styles/hero.css';
import '../styles/globals.css';

export default function Hero() {
    return (
        <>
         <section className='hero'>
            <div className='container hero-content'>
                <h1>Iphone 16</h1>
                <div className='hero-tagline'>Built for Apple Intelligence.</div>
                <p>Designed for brilliance.</p>

                <div className='phone-container'>
                    <div className='phone'>
                        <img className='phone-image' src="../assets/images/blue-iphone.png" alt="Iphone 16 blue" />
                    </div>
                </div>

                <div className='color-options'>
                    <div className='color-option active'id='blue' data-color="blue"></div>
                    <div className='color-option'id='green' data-color="green"></div>
                    <div className='color-option'id='pink' data-color="pink"></div>
                    <div className='color-option'id='white' data-color="white"></div>
                    <div className='color-option'id='black' data-color="black"></div>
                </div>

                <div className='size-options'>
                    <div className='size-option active' data-size='6.1'>6.1" Display</div>
                    <div className='size-option' data-size='6.7'>6.7" Display</div>
                </div>
            </div>
         </section>
        </>
    )
}