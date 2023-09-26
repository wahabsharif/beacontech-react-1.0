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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
                      <h3>Desktop &amp; Mobile Application</h3>
                      <p>
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you're prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Nullam blandit constituto eam ne, te nam ignota
                        vituper.atoribus. Malis cetero quem saipe, prou
                        thendrerit voluptaria.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
                      <h3>Advertisement</h3>
                      <p>
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you're prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Nullam blandit constituto eam ne, te nam ignota
                        vituper.atoribus. Malis cetero quem saipe, prou
                        thendrerit voluptaria.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
                      <h3>Branding</h3>
                      <p>
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you're prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Nullam blandit constituto eam ne, te nam ignota
                        vituper.atoribus. Malis cetero quem saipe, prou
                        thendrerit voluptaria.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
                      <h3>Web Development</h3>
                      <p>
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you're prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Nullam blandit constituto eam ne, te nam ignota
                        vituper.atoribus. Malis cetero quem saipe, prou
                        thendrerit voluptaria.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
                      <h3>Content Writing</h3>
                      <p>
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you're prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Nullam blandit constituto eam ne, te nam ignota
                        vituper.atoribus. Malis cetero quem saipe, prou
                        thendrerit voluptaria.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
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
            <div className="learn_more">
              Learn More<span></span>
            </div>
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
                      <h3>Video Production</h3>
                      <p>
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to taking pictures. There’s
                        still plenty you can do, provided you're prepared to use
                        some imagination. Here are a few ideas to keep you
                        shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now we
                        can remember them when it is all over.
                      </p>
                      <h3>What Is Branding?</h3>
                      <p>
                        Nullam blandit constituto eam ne, te nam ignota
                        vituper.atoribus. Malis cetero quem saipe, prou
                        thendrerit voluptaria.
                      </p>
                      <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
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
