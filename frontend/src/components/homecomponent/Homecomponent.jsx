import React, { useEffect, useState } from 'react';


const HomeComponent = () => {
    const [showWelcome, setShowWelcome] = useState(true); 

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="component">
            <Navegador />
            <h1>VIDEO DE TIKTOK</h1>

            {showWelcome && (

                
                <div className="welcome-overlay">
                    <h2 style={{ display: 'flex', alignItems: 'center' }}>
                        cargando...
                        <img className='loading-image' src={logo} alt="Logo" />
                    </h2>
                </div>

            )}

            <div className="video-container">
                <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@johnsaboyafulca/video/7431296661177093382?lang=es" 
                    data-video-id="7431296661177093382" 
                    style={{ maxWidth: '480px', minWidth: '325px' }}>
                    <section>
                        <a target="_blank" rel="noopener noreferrer" title="@johnsaboyafulca" href="https://www.tiktok.com/@johnsaboyafulca"> @johnsaboyafulca </a>
                    </section>
                </blockquote>
            </div>
        </div>
    );
}

export default HomeComponent;