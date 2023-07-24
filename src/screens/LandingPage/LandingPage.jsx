import React from "react";
import { Button } from "../../components/Button";
import { Thelogo } from "../../components/Thelogo";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="frame">
        <Thelogo className="thelogo-instance" />
        <div className="login">
          <div className="login-wrapper">
            <div className="login-2">Pricing</div>
          </div>
          <div className="sign-up-wrapper">
            <div className="sign-up">Purchase NOW</div>
          </div>
        </div>
      </div>
      <div className="home">
        <div className="hero-section">
          <div className="frame-2">
            <div className="text">
              <h1 className="product-showcase">
                <span className="span">
                  Product Showcase <br />
                </span>
                <span className="text-wrapper-2">made easy</span>
                <span className="span">&nbsp;</span>
              </h1>
              <p className="p">Where to grow your business and increase your sales.</p>
            </div>
            <Button
              className="button-instance"
              icon="no"
              labelClassName="design-component-instance-node"
              size="medium"
              state="default"
              text="Purchase NOW"
              type="primary"
            />
          </div>
          <img
            className="illustration"
            alt="Illustration"
            src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/illustration.svg"
          />
        </div>
        <div className="community">
          <div className="community-2">
            <p className="section-title">
              AI-Powered Product Showcase: <br />
              Easy Landing Pages, Zero Coding Required
            </p>
            <p className="description">Who Can Benefit from SmartLander&#39;s Landing Pages?</p>
          </div>
          <div className="frame-3">
            <div className="div-2">
              <div className="member">
                <div className="div-3">
                  <div className="div-3">
                    <div className="rectangle" />
                    <img
                      className="icon"
                      alt="Icon"
                      src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-20.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-3">E-commerce Entrepreneurs</div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-4">
                  SmartLander helps e-commerce entrepreneurs effortlessly create captivating product landing pages
                  without coding, driving more sales and reaching a wider audience.
                </p>
              </div>
            </div>
            <div className="div-2">
              <div className="member">
                <div className="div-3">
                  <div className="div-3">
                    <div className="rectangle" />
                    <img
                      className="icon"
                      alt="Icon"
                      src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-19.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-3">Digital Marketers and Agencies</div>
              </div>
              <div className="digital-marketers-wrapper">
                <p className="digital-marketers">
                  Digital marketers and agencies save time and achieve better results with SmartLander&#39;s automated,
                  AI-driven landing page generation for their clients&#39; products.
                </p>
              </div>
            </div>
            <div className="div-2">
              <div className="member">
                <div className="div-3">
                  <div className="div-3">
                    <div className="rectangle" />
                    <img
                      className="icon"
                      alt="Icon"
                      src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-18.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper-5">Small Business Owners</div>
              </div>
              <div className="p-wrapper">
                <p className="text-wrapper-4">
                  Small business owners can boost their online presence with SmartLander&#39;s easy-to-create landing
                  pages, showcasing their products effectively and attracting more customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <p className="section-title">
          AI-Powered Product Showcase: <br />
          Easy Landing Pages, Zero Coding Required
        </p>
        <div className="plans">
          <div className="plan-card">
            <div className="features">
              <div className="feature">
                <div className="text-wrapper-6">Unlimited device linking</div>
                <img
                  className="img"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-17.svg"
                />
              </div>
              <div className="feature-2">
                <p className="text-wrapper-7">30-day file and account history</p>
                <img
                  className="img"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-16.svg"
                />
              </div>
              <div className="feature-3">
                <p className="text-wrapper-8">Large file delivery with Dropbox Transfer (up to 2GB)</p>
                <img
                  className="icon-2"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-17.svg"
                />
              </div>
              <div className="feature-4">
                <p className="text-wrapper-9">3 free eSignatures per month</p>
                <img
                  className="img"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-14.svg"
                />
              </div>
            </div>
            <div className="button-2">
              <img
                className="icon-3"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-13.svg"
              />
              <div className="text-wrapper-10">Buy now</div>
            </div>
            <p className="text-wrapper-11">2 TB (2,000 GB) • 1 user</p>
            <div className="text-wrapper-12">$9.99 / month</div>
            <div className="text-wrapper-13">Plus</div>
            <div className="suggested-user-type">
              <div className="text-wrapper-14">For individuals</div>
              <img
                className="icon-4"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-12.svg"
              />
            </div>
            <div className="callout">
              <div className="text-wrapper-15">Best Value</div>
              <img
                className="icon-5"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-11.svg"
              />
            </div>
          </div>
          <div className="plan-card-2">
            <div className="features-2">
              <div className="features-3">
                <div className="feature-5">
                  <p className="text-wrapper-16">Always-on security monitoring, notifications, and alerts</p>
                  <img
                    className="icon-2"
                    alt="Icon"
                    src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-10.svg"
                  />
                </div>
                <div className="feature-6">
                  <p className="text-wrapper-17">Data classification for sensitive and confidential information</p>
                  <img
                    className="icon-2"
                    alt="Icon"
                    src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-16.svg"
                  />
                </div>
                <div className="feature-7">
                  <p className="text-wrapper-8">Large file delivery with Dropbox Transfer (up to 100GB)</p>
                  <img
                    className="icon-2"
                    alt="Icon"
                    src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-8.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-18">Everything in Standard, and:</div>
            </div>
            <img
              className="icon-6"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-7.svg"
            />
            <div className="text-wrapper-19">or buy now</div>
            <div className="button-3">
              <img
                className="icon-3"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-13.svg"
              />
              <p className="text-wrapper-20">Try free for 30 days</p>
            </div>
            <p className="text-wrapper-21">As much space as needed, once purchased • 3+ users</p>
            <p className="text-wrapper-22">$24 / user / month</p>
            <div className="text-wrapper-23">Advanced</div>
            <div className="suggested-user-type-2">
              <div className="text-wrapper-24">For larger teams</div>
              <img
                className="icon-4"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-5.svg"
              />
            </div>
          </div>
          <div className="plan-card-2">
            <div className="features-4">
              <div className="features-5">
                <div className="feature">
                  <p className="text-wrapper-25">Enterprise-grade security and visibility tools</p>
                  <img
                    className="img"
                    alt="Icon"
                    src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-16.svg"
                  />
                </div>
                <div className="feature-2">
                  <p className="text-wrapper-26">Integrations with best-in-class security solutions</p>
                  <img
                    className="img"
                    alt="Icon"
                    src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-3.svg"
                  />
                </div>
                <div className="feature-8">
                  <div className="text-wrapper-27">Dedicated customer success manager</div>
                  <img
                    className="img"
                    alt="Icon"
                    src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-8.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-28">Everything in Advanced, and:</div>
            </div>
            <div className="button-3">
              <img
                className="icon-3"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-13.svg"
              />
              <div className="text-wrapper-29">Contact us</div>
            </div>
            <p className="text-wrapper-30">As much space as needed • Customizable</p>
            <div className="text-wrapper-31">Contact sales for pricing</div>
            <div className="text-wrapper-32">Enterprise</div>
            <div className="suggested-user-type-2">
              <div className="text-wrapper-33">For organizations</div>
              <img
                className="icon-4"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/icon-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <Thelogo className="thelogo-instance" smartlanderClassName="thelogo-2" />
        <p className="copyright">
          Copyright @ 2023 Smartlander
          <br />
          all Rights Reserved
        </p>
      </footer>
    </div>
  );
};
