
import './Videosec.css'; 

const VideoSection = () => {
    return (
        <section className="section">
            <div className="video-container">
               
                   <iframe 
                  
                   src="https://www.youtube.com/embed/YZ13qxi2UVg?si=b2JGKLDOrB-FNWa3" 
                   title="YouTube video player" 
                   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   referrerpolicy="strict-origin-when-cross-origin" 
                   allowfullscreen></iframe>
            
            </div>
            <div className="video-container">
            <iframe 
             src="https://www.youtube.com/embed/8-6YqxYAkd0?si=MssF0azvD8_t81mc" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
            </div>
        </section>
    );
};

export default VideoSection;
