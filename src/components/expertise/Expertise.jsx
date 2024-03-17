import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Expertise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }

  return (
    <div className="service_list">
      <ul>
        {/* Video Production Eight-8 */}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalEight}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img className="svg" src="/img/svg/video-production.svg" alt="" />
            <div className="service_title">
              <h3>Video ads Production</h3>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          {/* <Modal
            isOpen={isOpen8}
            onRequestClose={toggleModalEight}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalEight}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "img/service/video-production.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>What is Video Production?</h3>
                      <p>
                        Video production encompasses all aspects involved in
                        conceptualizing, organizing, and carrying out the
                        creation of a video. Traditionally, video production
                        comprises three distinct phases: Pre-production,
                        Production, and Post-production.
                      </p>
                      <h3>What’s the Difference?</h3>
                      <p>
                        Video production stands out as a distinct genre,
                        utilizing a diverse range of technical, creative, and
                        design methodologies to convey a concise narrative,
                        typically for the promotion of a product, idea, company,
                        or concept. Here's how this medium compares to other
                        similar video styles:
                      </p>
                      <h5>Video production vs. film production</h5>
                      <p>
                        The key distinction between video production and film
                        production lies in the medium employed to achieve the
                        final outcome. Film production relies on the use of film
                        stock to record the visual content captured by the
                        camera, whereas video production records images using
                        formats like tape or memory cards. Although the
                        prevalence of film is diminishing, the term "film
                        production" continues to persist in common usage,
                        reflecting a longstanding industry convention.
                      </p>
                      <h5>Video production vs. videography</h5>
                      <p>
                        Video production distinguishes itself from videography
                        through the extensive planning and storytelling
                        direction involved. In video production, meticulous
                        attention is given to every facet, starting from the
                        creative concept and progressing to the execution, often
                        accompanied by comprehensive scripts, storyboards, and
                        scene planning. Conversely, video graphy tends to be
                        more spontaneous, focusing on capturing interviews or
                        events with greater reliance on the camera operator's
                        control and intuition.
                      </p>
                      <h5>Video production vs. video editing</h5>
                      <p>
                        Video editing, also known as post-production,
                        constitutes a distinct phase within the broader video
                        production process. It involves the technical
                        manipulation of recorded footage by an editor at a
                        computer workstation after the filming is complete. On
                        the other hand, video production encompasses the
                        comprehensive process executed by a team of specialists
                        who collaborate to capture, process, and edit the visual
                        elements to create the final video product. In essence,
                        video production is the encompassing workflow, whereas
                        video editing is a crucial step within that workflow.
                      </p>
                      <h3>Why Video Production?</h3>
                      <p>
                        Video stands as one of the most effective and
                        influential forms of media utilized today to captivate,
                        motivate, or instruct an audience. Through the fusion of
                        visual and auditory components, video production offers
                        the capability to completely immerse a particular
                        audience and guide them through a narrative using both
                        creative and technical craftsmanship. Given its
                        remarkable versatility, many contend that video
                        production is the ultimate medium for achieving a wide
                        array of storytelling objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal> */}
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
        {/* Video Production Eight-8 End*/}
        {/* Branding & Design Five-5 */}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalFive}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="/img/svg/megaphone.svg" alt="" />
            <div className="service_title">
              <h4>Branding Advertisement</h4>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Motion Graphy */}
          {/* <Modal
            isOpen={isOpen5}
            onRequestClose={toggleModalFive}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFive}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "/img/service/branding.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>What is Branding in Marketing?</h3>
                      <p>
                        Branding is the strategic endeavor of establishing a
                        robust and favorable image of a company, its offerings,
                        or services within the minds of consumers. This is
                        achieved by amalgamating various elements, including a
                        distinctive logo, cohesive design, a clearly defined
                        mission statement, and a consistent thematic approach
                        across all marketing communications. Successful branding
                        serves to set companies apart from their rivals and
                        fosters the cultivation of a devoted customer following.
                      </p>
                      <h3>Why is Branding Important?</h3>
                      <p>
                        A distinctive brand can exert a substantial influence on
                        your financial performance by furnishing you with a
                        competitive edge in the market. It aids in the
                        cost-effective acquisition and retention of customers,
                        thereby contributing to a healthier bottom line. This is
                        especially pronounced in the realm of eCommerce, an
                        arena characterized by the continual emergence of new
                        companies and, consequently, fresh competitors. In this
                        context, an established brand can prove to be an
                        invaluable asset, attracting customers and driving
                        profitable outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal> */}
          {/* End Modal Motion Graphy */}
        </li>
        {/* Branding & Design Five-5 End*/}
        {/* Web Development Six-6 */}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalSix}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <img className="svg" src="/img/svg/web-dev.svg" alt="" />
            <div className="service_title">
              <h4>Web Design & Development</h4>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Branding & Design */}
          {/* <Modal
            isOpen={isOpen6}
            onRequestClose={toggleModalSix}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalSix}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "img/service/web-development.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>What Exactly is Web Development?</h3>
                      <p>
                        Web development is intricately connected to the task of
                        conceptualizing and crafting the features and
                        functionalities of websites and applications, which is
                        commonly referred to as "web design." However, the term
                        "web development" typically specifically refers to the
                        tangible process of building and programming these
                        websites and applications, encompassing the technical
                        aspects involved in bringing the design concepts to
                        life.
                      </p>
                      <p>
                        Consider all the web pages you've interacted with over
                        the years; it's the work of web developers that ensures
                        these sites operate seamlessly and provide an
                        exceptional user experience. Web developers achieve this
                        by meticulously crafting lines of code, employing an
                        array of programming languages tailored to their
                        specific tasks and the platforms they are working on.
                      </p>
                      <h3>Types of Web Development</h3>
                      <p>
                        Web development can be broadly categorized into three
                        primary types:
                      </p>
                      <p>
                        <b>Front-end Development:</b> Front-end developers focus
                        on the user interface and user experience aspects of a
                        website or application. They work on the design and
                        functionality that users interact with directly in their
                        web browsers. This involves coding the layout, visuals,
                        and interactive elements using technologies like HTML,
                        CSS, and JavaScript. Front-end developers aim to create
                        an engaging and responsive user interface.
                      </p>
                      <p>
                        <b>Back-end Development:</b> Back-end developers are
                        responsible for the server-side of web development. They
                        work on the behind-the-scenes logic, databases, and
                        server infrastructure that power a website or
                        application. Back-end development often involves working
                        with programming languages like Python, Ruby, PHP, and
                        frameworks like Node.js. Back-end developers ensure that
                        data is processed, stored, and retrieved efficiently and
                        securely
                      </p>
                      <p>
                        <b>Full-stack Development:</b> Full-stack developers are
                        proficient in both front-end and back-end development.
                        They have a comprehensive understanding of the entire
                        web development stack, from designing user interfaces to
                        implementing server-side functionality. Full-stack
                        developers are versatile and can work on all aspects of
                        a project, making them valuable in smaller teams or
                        startups where resources are limited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </Modal> */}
          {/* End Modal Branding & Design */}
        </li>
        {/* Web Development Six-6 End */}
        {/* Software Development Three-3*/}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalThree}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img className="svg" src="img/svg/3.svg" alt="" />
            <div className="service_title">
              <h4>PPC & Performance Marketing</h4>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Mobile App Design */}
          {/* <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalThree}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "img/service/software-development.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>What is Software Development?</h3>
                      <p>
                        Software development encompasses the activities of
                        conceiving, crafting, verifying, and upkeeping diverse
                        software applications. It draws upon a range of
                        principles and methodologies derived from computer
                        science, engineering, and mathematical analysis. The
                        overarching objective of software development is to
                        produce software that is both effective, dependable, and
                        user-friendly.
                      </p>
                      <p>
                        The process of software development typically begins
                        with the requirements-gathering phase.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>
                              In this phase, the software application
                              requirements are gathered from various
                              stakeholders.
                            </p>
                          </li>
                          <li>
                            <p>
                              These requirements are then analyzed and used to
                              create a software design.
                            </p>
                          </li>
                          <li>
                            <p>
                              And the software design is then implemented in
                              code, which is then tested to ensure that it meets
                              the requirements. Once the code is verified, it is
                              deployed to the production environment.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal> */}
          {/* End Modal Mobile App Design*/}
        </li>
        {/* Software Development Three-3 End*/}
        {/* 3-D Two-2 */}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalTwo}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <img className="svg" src="img/svg/2.svg" alt="" />
            <div className="service_title">
              <h3>3D Rendering & Visualization</h3>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Branding & Design */}
          {/* <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalTwo}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "img/service/3-D-vissualisation.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>What is 3-D Visualization Rendering?</h3>
                      <p>
                        3D visualization is a multifaceted process that combines
                        technical and artistic elements to produce
                        three-dimensional representations of real or future
                        real-world objects. Its application spans various
                        industries, including manufacturing, architecture, and
                        multimedia. 3D visualization empowers the portrayal of
                        visual graphics with tangible shape and depth,
                        effectively breathing life into projects for engineers
                        and artists alike.
                      </p>
                      <h5>1- Real-time 3D visualization</h5>
                      <p>
                        While it is a relatively recent addition to the field,
                        real-time 3D visualization is rapidly gaining
                        prominence. Real-time 3D software allows for the swift
                        digital rendering of fully interactive 3D models,
                        environments, digital twins, and complete virtual
                        worlds. This capability represents a substantial
                        advantage compared to conventional content creation
                        tools.
                      </p>
                      <h5>2- Physical modeling</h5>
                      <p>
                        Physical models, encompassing 3D printed models, clay
                        models for cars, drawings, and foam board replicas,
                        constitute the most prevalent category of visualization
                        methods. These physical representations are favored by
                        those who adhere to traditional practices. However, it's
                        important to note that physical models fall short in
                        terms of providing high fidelity or interactivity.
                        Additionally, they prove to be costly and time-intensive
                        when it comes to iterating on multiple concepts or
                        versions.
                      </p>
                      <h5>3- 2D visualization</h5>
                      <p>
                        More efficient and cost-effective than physical
                        modeling, 2D visualization involves the presentation of
                        static two-dimensional images. This includes digital
                        drawings, computer-generated images (CGI), and
                        photographs. While it ranks as the second most widely
                        used visualization method, 2D visualization has
                        limitations in conveying scale and proportion
                        effectively. Designers frequently need to generate
                        multiple renderings to simulate the necessary
                        perspective and depth of field (DoF) to achieve a
                        convincing real-world semblance.
                      </p>
                      <h3>Why is 3D visualization important?</h3>
                      <p>
                        Companies that make physical objects often use various
                        tools like images and videos for visualization. But 3D
                        visualization provides richer information than 2D
                        images.
                      </p>
                      <p>
                        3D visualization's strength lies in its capacity to
                        mimic reality, offering several advantages, such as:
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>
                              <b>Cost savings</b> result from reduced dependence
                              on costly physical prototypes and early detection
                              of design and engineering issues.
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Quicker market entry</b> is achieved by
                              facilitating collaboration and communication among
                              teams.
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Enhanced sales</b> are realized by showcasing
                              products in captivating ways beyond conventional
                              multimedia formats.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal> */}
          {/* End Modal Branding & Design */}
        </li>
        {/* 3-D Two-2 End */}
        {/* SEO one-1 */}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalOne}
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/1.svg" alt="" />
            <div className="service_title">
              <h3>Content Writing & SEO</h3>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* SEO */}
          {/* <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalOne}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL +
                            "img/service/search-enginue-optimization.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>SEO: Search Engine Optimization</h3>
                      <h5>What is SEO?</h5>
                      <p>
                        SEO, an acronym for "search engine optimization," is the
                        systematic method of enhancing your website's online
                        presence to boost its visibility on popular search
                        engines like Google, Microsoft Bing, and others when
                        individuals search for specific products or services.
                      </p>
                      <p>
                        Increased visibility of your web pages in search results
                        leads to a higher probability of discovery and
                        click-through. In essence, the overarching objective of
                        search engine optimization is to draw in website
                        visitors who can potentially convert into customers,
                        clients, or a recurring audience.
                      </p>
                      <h3>SEO vs. SEM</h3>
                      <p>
                        SEM, which stands for search engine marketing or search
                        marketing, is a facet of digital marketing that
                        encompasses a combination of SEO (search engine
                        optimization) and PPC (pay-per-click) activities. The
                        primary objective of search marketing is to generate
                        website traffic and enhance visibility through both
                        organic search (SEO) and paid search (PPC) methods.
                      </p>
                      <p>
                        To simplify the distinction between SEO and SEM, it's
                        important to note that SEO is a subset of SEM:
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>
                              SEO involves the pursuit of organic traffic from
                              search engines.
                            </p>
                          </li>
                          <li>
                            <p>
                              SEM encompasses the acquisition of both organic
                              and paid traffic from search engines.
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        However, in contemporary usage, SEM is frequently used
                        interchangeably with PPC, which can create some
                        confusion. It's essential to recognize that SEO and PPC
                        are both integral components of marketing.
                      </p>
                      <p>To provide a clearer perspective on SEO and SEM:</p>
                      <p>
                        Think of SEM as a coin, where SEO represents one side,
                        and PPC is the other side. These two aspects, SEO and
                        PPC, collectively form the realm of search engine
                        marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal> */}
          {/* End Modal SEO*/}
        </li>
        {/* SEO one-1 END */}
      </ul>
    </div>
  );
};

export default Expertise;
