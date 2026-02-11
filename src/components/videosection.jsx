import "../styles/videosection.css";

export default function videosection() {
  return (
    <section className='video_section'>
       <div className='videocontent'>
         <h1>Never run out of scroll-stopping ads again</h1>
         <p>
           From sourcing to scripting to final cut – we run your entire creative pipeline. 
           You get ready-to-launch ads<br/>
            that convert cold traffic, without chasing creators or drowning in briefs.

         </p>

       </div>
         <div className="video-wrapper">
  <iframe
    loading="lazy"
    src="https://fast.wistia.net/embed/iframe/ob3i70kc2c?videoFoam=true"
    allow="autoplay; fullscreen"
    frameBorder="0"
    scrolling="no"
    className="wistia_embed"
  ></iframe>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
</div>


    </section>


    );
}