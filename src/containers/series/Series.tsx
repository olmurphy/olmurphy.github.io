import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useAnalyticsContext } from "../../contexts/AnalyticsContext";
import { seriesSection } from "../../portfolio";
import "./Series.scss";

export default function Series() {
  const { trackEvent } = useAnalyticsContext();

  useEffect(() => {
    trackEvent("Section", "View", "Journey");
  }, [trackEvent]);

  return (
    <div className="series-page">
      <Header />
      <main className="series-content">
        <section className="series-hero">
          <p className="series-label">Journey to become a polymath</p>
          <h1 className="series-title">{seriesSection.title}</h1>
          <p className="series-subtitle">{seriesSection.subTitle}</p>
          <p className="series-description">{seriesSection.description}</p>
          <Link to="/" className="series-back-link" onClick={() => trackEvent("Navigation", "Click", "Home")}>
            Back to homepage
          </Link>
        </section>

        <section className="series-grid">
          {seriesSection.videos.map((video) => (
            <article key={video.title} className="series-card">
              {video.videoUrl ? (
                <div className="series-video-wrapper">
                  <iframe
                    title={video.title}
                    src={video.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="series-card-iframe"
                  />
                </div>
              ) : (
                <div className="series-video-placeholder">
                  <p>Embed URL not provided yet.</p>
                  <p>
                    Add your reel embed link in <code>src/portfolio.ts</code> to render the video here.
                  </p>
                </div>
              )}

              <div className="series-card-body">
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                {video.tags?.length ? (
                  <div className="series-card-tags">
                    {video.tags.map((tag) => (
                      <span key={tag} className="series-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
