import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Expertise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
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
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }

  return (
    <div className="service_list">
      <ul>
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
              <h3>Search Engine Optimization</h3>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* SEO */}
          <Modal
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
              {/* End close icon */}

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
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal SEO*/}
        </li>
        {/* SEO one-1 END */}

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
              <h3>3-D Visualization</h3>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
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
              {/* End close icon */}

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
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>
        {/* 3-D Two-2 End */}

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
              <h4>Software Development</h4>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
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
              {/* End close icon */}

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
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>
        {/* Software Development Three-3 End*/}

        {/* Advertisement Four-4 */}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalFour}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img className="svg" src="img/svg/4.svg" alt="" />
            <div className="service_title">
              <h5>Advertisement</h5>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFour}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

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
                            "img/service/advertising.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>The definition of advertisement</h3>
                      <p>
                        In order to grasp the concept of an advertisement, it's
                        essential to start with an understanding of advertising.
                        Advertising is an industry devoted to capturing the
                        public's attention, typically with the aim of promoting
                        a product or service.
                      </p>
                      <p>
                        An advertisement, on the other hand, can be defined as a
                        method of communication used to promote a product,
                        brand, or service to an audience, with the ultimate goal
                        of generating interest, engagement, and sales.
                        Advertisements, often referred to as ads or adverts,
                        take various formats, ranging from written content to
                        interactive videos, and they have evolved to become a
                        vital component of the app marketplace.
                      </p>
                      <h3>Why are advertisements important?</h3>
                      <p>
                        Advertisements provide a reliable means of connecting
                        with an audience. Through the creation of compelling ads
                        and allocating sufficient resources to reach the
                        intended audience, advertisements can deliver immediate
                        benefits to a business. These outcomes may manifest as
                        enhanced sales, heightened brand visibility, and
                        numerous other measurable metrics. Typically, an
                        advertising strategy incorporates Key Performance
                        Indicators (KPIs) to gauge and assess the impact of
                        these efforts.
                      </p>
                      <h3>What do in-app ads look like?</h3>
                      <p>
                        In-app advertising can take many forms, including text,
                        banners, push notifications and pre or post-roll video
                        ads. Such video adverts are usually around 10-15 seconds
                        long (though they can vary) and normally showcase the
                        product within that time. Increasingly, advertising is
                        becoming interactive, providing more engagement for
                        users in the era of scrolling. One such example is the
                        use of deep linking, a feature which allows advertisers
                        to send users directly to an install page in a single
                        click. As CTV continues to gain prominence in the
                        advertising space we’re seeing creative, interactive
                        methods emerge, including the use of QR codes to direct
                        users from their TVs to the source of the ad on mobile.
                      </p>
                      <h3>Which ad format should I use?</h3>
                      <p>
                        Opting for the appropriate ad format can often be a
                        pivotal choice in the realm of advertising. It can
                        significantly influence the success or failure of a
                        campaign. Let's explore some prevalent ad formats in
                        mobile advertising and pinpoint scenarios where they can
                        be especially impactful.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <h5>Banner ads</h5>
                            <p>
                              With banner ads, the aim is to display an image
                              and wait for users to view, click and convert –
                              making quality graphics and a compelling call to
                              action (CTA) essential components.
                            </p>
                          </li>
                          <li>
                            <h5>Interstitial ads</h5>
                            <p>
                              Interstitial ads offer a full-screen experience.
                              These can be used to avoid ‘banner blindness’,
                              when users become so accustomed to seeing banner
                              ads that they no longer take notice. Interstitial
                              ads can also be expandable (known as expandable
                              ads), which start out as regular banner ads before
                              taking up the whole screen.
                            </p>
                          </li>
                          <li>
                            <h5>Native ads</h5>
                            <p>
                              Native advertising is when ads are designed to
                              match the environment in which they are placed.
                              For example, when you see a ‘sponsored’ tag
                              attached to a YouTube video, this is native
                              advertising on that particular platform.
                            </p>
                          </li>
                          <li>
                            <h5>Video ads</h5>
                            <p>
                              As their name suggests, video ads are
                              advertisements in video format. By their nature,
                              video ads are a popular advertising method because
                              they can be highly engaging, offering great CTR
                              (click through rate).
                            </p>
                          </li>
                          <li>
                            <h5>Playable ads</h5>
                            <p>
                              By giving users access to interactive gameplay,
                              playable ads let you try before you buy. This
                              gives users a limited look at an app, offering
                              highlights that should push users to install.
                              Because users can gauge their interest before
                              purchasing the app, playable ads can be used to
                              reduce app uninstall rates.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
        {/* Advertisement Four-4 End*/}

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
              <h3>Branding</h3>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Motion Graphy */}
          <Modal
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
              {/* End close icon */}

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
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
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
              <h4>Web Development</h4>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
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
              {/* End close icon */}

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
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>
        {/* Web Development Six-6 End */}

        {/* Content Writing Seven-7 */}
        <li>
          <div
            className="list_inner"
            onClick={toggleModalSeven}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img className="svg" src="/img/svg/content-writing.svg" alt="" />
            <div className="service_title">
              <h4>Content Writing</h4>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen7}
            onRequestClose={toggleModalSeven}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalSeven}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

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
                            "img/service/content-writing.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>What is content writing?</h3>
                      <p>
                        Content writing encompasses the creation of digital
                        content that forms an integral part of a brand's
                        marketing strategy. This content can encompass a wide
                        range of materials, including:
                      </p>
                      <h5>Website Content:</h5>
                      <p>
                        This includes crafting engaging and informative content
                        for a brand's website, such as homepage copy, product or
                        service descriptions, about pages, and blog posts.
                      </p>
                      <h5>Blog Posts and Articles: </h5>
                      <p>
                        Content writers often produce blog articles and
                        informative posts that provide value to the target
                        audience. These can cover industry trends, how-to
                        guides, insights, and more.
                      </p>
                      <h5>Social Media Content: </h5>
                      <p>
                        Content writers develop text and captions for social
                        media platforms like Facebook, Instagram, Twitter, and
                        LinkedIn to engage the audience, promote products or
                        services, and share relevant information.
                      </p>
                      <h5>Email Marketing:</h5>
                      <p>
                        Writing persuasive and personalized email campaigns,
                        newsletters, and email sequences to connect with
                        subscribers, promote offers, or nurture leads.
                      </p>
                      <h5>Video Scripts: </h5>
                      <p>
                        Crafting scripts for video content, such as explainer
                        videos, tutorials, or promotional videos.
                      </p>
                      <h5>Ebooks and Whitepapers: </h5>
                      <p>
                        Creating in-depth and informative resources like ebooks
                        and whitepapers to showcase expertise and generate
                        leads.
                      </p>
                      <h5>Press Releases: </h5>
                      <p>
                        Writing press releases to announce important company
                        news, product launches, or events.
                      </p>
                      <h5>Info graphics: </h5>
                      <p>
                        Developing content for infographics that convey complex
                        information in a visually appealing and
                        easy-to-understand format.
                      </p>
                      <h5>Product Descriptions: </h5>
                      <p>
                        Crafting compelling product descriptions for e-commerce
                        websites, highlighting features, benefits, and
                        uniqueness.
                      </p>
                      <h5>Advertising Copy: </h5>
                      <p>
                        Creating persuasive ad copy for online advertising
                        campaigns, including Google Ads, Facebook Ads, and
                        display ads.
                      </p>
                      <h5>SEO Content: </h5>
                      <p>
                        Writing content optimized for search engines (SEO),
                        which involves using keywords strategically to improve
                        organic search rankings.
                      </p>
                      <h5>Content Strategy: </h5>
                      <p>
                        Developing a content strategy that aligns with the
                        brand's goals, target audience, and marketing
                        objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>
        {/* Content Writing Seven-7 End*/}

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
              <h3>Video Production</h3>
            </div>
            {/* <div className="learn_more">
              Learn More<span></span>
            </div> */}
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
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
              {/* End close icon */}

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
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
        {/* Video Production Eight-8 End*/}
      </ul>
    </div>
  );
};

export default Expertise;
