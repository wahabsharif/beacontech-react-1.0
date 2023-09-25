import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ServiceAnimation = () => {
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
                            "img/service/seo-optimization-vactor.webp"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>SEO: Search Engine Optimization</h3>
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
                            "img/service/3-D-vissualisation.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Branding &amp; Design Breakdown In Cinema 4D</h3>
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
                            "img/service/software-development.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Mobile App Design Breakdown In Cinema 4D</h3>
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
                            "img/service/advertising-ads.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>
                        Ui/Ux Consultancy is the trending Part of Graphics
                      </h3>
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
                            process.env.PUBLIC_URL + "/img/service/branding.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Motion Graphic Breakdown In Cinema 4D</h3>
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
                            "/img/service/web-development.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Branding &amp; Design Breakdown In Cinema 4D</h3>
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
                            "img/service/content-writing.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>Mobile App Design Breakdown In Cinema 4D</h3>
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
                            "img/service/video-production.png"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="description">
                      <h3>
                        Ui/Ux Consultancy is the trending Part of Graphics
                      </h3>
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

export default ServiceAnimation;
