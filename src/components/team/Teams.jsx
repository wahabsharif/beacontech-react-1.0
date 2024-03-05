import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Teams = () => {
  return (
    <>
      <div className="news_list">
        <ul>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="img/teams/jawad.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/teams/jawad.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}
              <div className="details">
                <h3 className="title">Jawad Anwer</h3>
                <span>
                  <a href="/">Executive Head</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="img/teams/danyal-tahir.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/teams/danyal-tahir.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <h3 className="title">M Daniyal Tahir</h3>
                <span>
                  <a href="/">Finance Head</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="/img/teams/wahab-sharif.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/img/teams/wahab-sharif.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <h3 className="title">M Wahab Sharif</h3>
                <span>
                  <a href="/">Software/Web Developer</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="img/teams/zeeshan.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/teams/zeeshan.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}
              <div className="details">
                <h3 className="title">M Zeeshan</h3>
                <span>
                  <a href="/">Social Media Guru</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
        </ul>
      </div>
      <div className="news_list">
        <ul>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="img/teams/tayyab.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/teams/tayyab.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <h3 className="title">M Tayyab</h3>
                <span>
                  <a href="/">Business Development Officer</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/news/3.jpg"
                    })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <h3 className="title">Usama Amir</h3>
                <span>
                  <a href="/">Cinematographer</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="img/teams/naveed.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/teams/naveed.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <h3 className="title">M Naveed Zafar</h3>
                <span>
                  <a href="/">Production Artist</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                <img src="/img/teams/arslan-khan.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/img/teams/arslan-khan.png"
                    })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <h3 className="title">Arslan Khan</h3>
                <span>
                  <a href="/">Graphic Expert</a>
                </span>
              </div>
              {/* End details */}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Teams;
