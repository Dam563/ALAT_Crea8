import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import logo from "./assets/logo.png";
import appstore from "./assets/appstore.png";
import playstore from "./assets/playstore.png";
import checkbox from "./assets/checkbox.png";
import image_one from "./assets/image_one.png";
import image_two from "./assets/image_two.png";
import image_three from "./assets/image_three.png";
import icon_one from "./assets/icon_one.png";
import icon_two from "./assets/icon_two.png";
import icon_three from "./assets/icon_three.png";
import categoryImage from "./assets/categoryImage.png";
import featureTwoImage from "./assets/featureTwoImage.png";
import invoiceImage from "./assets/invoiceImage.png";
import heroImage from "./assets/heroImage.png";
import menu from "./assets/menu.png";
import mobileCategory from "./assets/mobile_category.png";
import mobileSave from "./assets/mobile_save.png";
import preloader from "./assets/preloader.gif";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import mobileInvoice from "./assets/mobile_invoice.png";
import twitter from "./assets/twitter.png";
import whatssap from "./assets/whatsapp.png";
import linkedin from "./assets/linkedin.png";
import youtube from "./assets/youtube.png";
import close from "./assets/close.png";
import mobileAnalysis from "./assets/mobile_analysis.png";
import mobileLogo from "./assets/mobile_logo.png"
import "./App.css";
import "./fonts/OtomanopeeOne-Regular.ttf";
import analysisImage from "./assets/analysisImage.png";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const customStyles = {
    content: {
      width: '100%',
      left: '0',
      // height: '1',
      top: '0',
      // top: '50%',
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
    },
  };

  
  useEffect(() => {document.body.style.overflow = isMenuOpen == true ? "hidden" : "unset"}, [isMenuOpen]);

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-gradient-to-r from bg-[rgba(168,8,54,1)] to [rgba(168,8,54,0.7)] text-white relative">
        {/* Navigation */}
        <div className="">
          {/* Mobile menu */}
          <nav className="flex justify-between pt-5 md:hidden lg:hidden sm:hidden">
            <img src={logo} alt="logo" className="w-[38px] h-[36px] ml-5" />
            <img src={menu} alt="logo" className="w-[24px] h-[24px] mr-5" onClick={toggleMenu}/>
          </nav>

          {/* Menu items */}
          <div className="w-full">
          <Modal isOpen={isMenuOpen} onRequestClose={toggleMenu} style={customStyles} className="" >
          {/* {isMenuOpen && (      */}
          <div className="lg:hidden bg-white text-[#2E2E2E] font-secondary rounded px-5 pt-2 pb-5 mt-1">
            <div className="flex justify-between mb-5">
              <img src={mobileLogo} alt="mobile" className="w-[38px] h-[38px]"/>
             <img src={close} alt="logo" className="w-[24px] h-[24px]" onClick={toggleMenu}/>
             </div>
            <ul>
            <li className=" font-secondary font-normal leading-6 py-3 mb-4 px-4 text-[#1A1A1A] rounded-xl border-[rgba(212,159,174,0.1)] bg-[rgba(212,159,174,0.1)] ">
                Personal
              </li>
              <li className=" font-secondary font-normal leading-6 mb-4 py-3 px-4 text-[#1A1A1A] rounded-xl border-[rgba(212,159,174,0.1)] bg-[rgba(212,159,174,0.1)]">
                Business
              </li>
              <li className=" font-secondary font-normal leading-6 py-3 px-4 mb-4 text-[#fff] rounded-xl border-[#9A1A3F] bg-[#9A1A3F]">
                ALAT Crea8
              </li>
              <li className="font-secondary font-normal leading-6 py-3 px-4 text-[#1A1A1A] mb-4 rounded-xl border-[rgba(212,159,174,0.1)] bg-[rgba(212,159,174,0.1)]">
                About
              </li>
              <a href="#features">
              <li className=" font-secondary font-normal leading-6 py-3 px-4 text-[#1A1A1A] mb-4 rounded-xl border-[rgba(212,159,174,0.1)] bg-[rgba(212,159,174,0.1)]">
                Features
              </li>
              </a>
              <li className="font-secondary font-normal leading-6 py-3 px-4 text-[#1A1A1A] mb-4 rounded-xl border-[rgba(212,159,174,0.1)] bg-[rgba(212,159,174,0.1)]">
                ALAT Life
              </li>
              <li className=" font-secondary font-normal leading-6 py-3 px-4 text-[#1A1A1A] mb-4 rounded-xl border-[rgba(212,159,174,0.1)] bg-[rgba(212,159,174,0.1)]">
                Help
              </li>
              <li className=" font-secondary font-normal leading-6 py-3 px-4 text-[#1A1A1A] rounded-xl border-[rgba(212,159,174,0.1)] bg-[rgba(212,159,174,0.1)]">
                Developer
              </li>
              </ul>
            </div>
          {/* )} */}
          </Modal>
          </div>

          {/* Other screens nav bar */}
          <nav className="lg:flex md:flex sm:flex justify-between pt-2 hidden">
            <div className="flex gap-5">
              <img src={logo} alt="logo" className="w-[84px] h-[80px] ml-10" />
              <a href="">
              <p className=" font-secondary font-medium leading-6 text-base pt-10">
                Personal
              </p>
              </a> <a href="">
              <p className=" font-secondary font-medium leading-6 text-base pt-10">
                Business
              </p>
              </a>
              <a href="">
              <p className=" font-secondary font-bold leading-6 h-[65px] text-base pt-10 border-b-2">
                ALAT Crea8
              </p>
              </a>
            </div>
            <div className="flex gap-4 mr-10">
            <a href="">
              <p className=" font-secondary font-medium leading-6 text-base pt-10">
                About
              </p>
              </a>
              <a href="#features">
              <p className=" font-secondary font-medium leading-6 text-base pt-10">
                Features
              </p>
              </a> 
              <a href="">
              <p className=" font-secondary font-medium leading-6 text-base pt-10">
                {/* ALAT Life */}
                ALAT Life
              </p>
              </a>
              <a href="">
              <p className=" font-secondary font-medium leading-6 text-base pt-10">
                {/* Help */}
                Help
              </p>
              </a>
              <a href="">
              <p className=" font-secondary font-medium leading-6 text-base pt-10">
                {/* Developer */}
                Developer
              </p>
              </a>
            </div>
          </nav>
        </div>

        <p className=" w-[300px] h-[70px] text-[24px] text-white text-center leading-[34px] lg:w-[688px] lg:h-[122px] mt-[50px] mx-auto
        font-primary font-normal lg:text-[42px] lg:leading-[61px]">
          Take Charge of your Income as a
        Creative
        </p>
        <p className="font-normal w-[320px] h-[100px] font-secondary text-center mx-auto text-[16px] mt-5 lg:text-[20px] lg:leading-[32px] lg:w-[800px] lg:h-[64px]">
        With ALAT Crea8 you are empowered to take control of your income with categorization, income tracking features. Our user-friendly 
        app makes managing your income quick and easy.
        </p>
        <p className="font-semibold font-secondary text-center text-[16px] leading-[25px] lg:text-[20px] lg:leading-[32px] mt-10 mb-5">
          Download on
        </p>
        <div className="flex w-[220px] lg:w-[345px] mx-auto gap-3">
          <a href="https://play.google.com/store/apps?hl=en&gl=US&pli=1">
          <img src={playstore} alt="playstore" className=" w-[104px] h-[36px] rounded lg:w-[152px] lg:h-[67px]" />
          </a>
          <a href="https://www.apple.com/app-store/">
          <img src={appstore} alt="appstore" className=" w-[104px] h-[36px] rounded lg:w-[152px] lg:h-[67px]" />
          </a>
        </div>
          <img src={heroImage} alt="hero_Image" className=" lg:w-[900px] lg:h-[400px] mx-auto mt-[50px]"/>
      </div>

      {/* Features */}
      <section id="features">
        {/* Feature One */}
        <div className="flex gap-2 mt-[150px] ml-[20px] lg:ml-[120px]">
              <div className="border-2 border-[#920F35] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#920F35]"></div>
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
            </div>
        <div className=" ml-[20px] lg:flex mt-[30px] lg:w-[1000px] lg:mx-auto">
          <div className="">
            <p className="font-normal font-primary
             lg:w-[368px] lg:h-[104px] lg:text-[36px] lg:leading-[52px] 
             w-[186px] h-[58px] text-[20px] leading-[28px] mb-[40px] mt-[50px]">
              Categorize your Income Efficiently.
            </p>
            <p className=" font-medium font-secondary lg:w-[400px] lg:h-[96px] w-[280px] h-[66px] 
            lg:text-[20px] text-[16px] leading-[25px] lg:leading-[32px] text-[#777777] mb-[20px]">
              Whether it's salary, passive income, or side hustles, assigning each stream its rightful category enables smarter financial decisions. 
            </p>
            <div className="flex gap-5">
              <img
                src={checkbox}
                alt=""
                className=" w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mt-[40px]"
              />
              <div>
              <p className="font-normal font-primary
              lg:w-[400px] lg:h-[35px] lg:text-[24px] text-[16px] leading-[23px]
              lg:leading-[35px] text-[#2E2E2E] mt-[30px]">
                Track your Income
              </p>
            <p className="font-medium font-secondary lg:w-[400px] 
            lg:h-[96px] lg:text-[20px]
             w-[280px] h-[66px] text-[14px] leading-[22px] 
             lg:leading-[32px] text-[#777777] 
             mb-[10px] mt-[5px]">
           By monitoring every naira earned, you gain a clear picture of your financial health and opportunities for growth.
            </p>
            </div>
            </div>
            <div className="flex gap-5">
              <img
                src={checkbox}
                alt=""
                className="w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mt-[40px]"
              />
              <div>
              <p className="font-normal font-primary w-[400px] h-[35px] mt-[30px] lg:text-[24px] sm:text-[16px] leading-[35px] text-[#2E2E2E]">
                Virtual Account
              </p>
            <p className="font-medium font-secondary lg:w-[400px] 
            lg:h-[96px] lg:text-[20px] w-[280px] h-[66px] text-[14px] leading-[22px] 
             lg:leading-[32px] text-[#777777] 
             mb-[10px]">
             Embrace the future of banking with a virtual account and enjoy hassle-free, efficient money management.
            </p>
            </div>
          </div>
          </div>
          {/* Category Image */}
        <img src={categoryImage} alt="category image" className=" hidden lg:block lg:w-[500px] lg:h-[600px] mt-[40px] lg:mt-0"/>
        <img src={mobileCategory} alt="" className=" lg:hidden"/>
        </div>

        {/* Feature Two */}
        <div className=" ml-[20px] lg:flex mt-[90px] lg:w-[1000px] lg:mx-auto flex-row-reverse justify-around gap-40">
          <div className="">
          <div className=" flex lg:hidden gap-2 mt-[100px]">
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
              <div className="border-2 border-[#920F35] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#920F35]"></div>
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
            </div>
            <p className="font-normal font-primary
             lg:w-[368px] lg:h-[104px] lg:text-[36px] lg:leading-[52px] 
             w-[186px] h-[58px] text-[20px] leading-[28px] mb-[40px] mt-[40px]">
              Save Money Automatically.
            </p>
            <p className="font-medium font-secondary
             lg:w-[400px] lg:h-[96px] w-[300px] h-[78px] 
             lg:text-[20px] sm:text-[16px] leading-[32px] text-[#777777] mb-[10px]">
              Secure your financial future effortlessly by saving money automatically.
            </p>
            <div className="flex gap-5">
              <img
                src={checkbox}
                alt=""
                className="w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mt-[10px]"
              />
              <p className="font-normal font-primary 
              w-[400px] h-[35px] lg:text-[24px] sm:text-[16px] 
              leading-[35px] text-[#2E2E2E]">
                Receive and Save
              </p>
            </div>
            <p className="font-medium font-secondary lg:w-[400px] 
            lg:h-[96px] lg:text-[20px]
             w-[280px] h-[66px] text-[14px] leading-[22px] 
             lg:leading-[32px] text-[#777777] 
             mb-[10px] mt-[5px]">
             Build your nest egg with every payment received, ensure that a portion goes straight into your savings.
            </p>
            <div className="flex gap-5">
              <img
                src={checkbox}
                alt=""
                className="w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mt-[40px]"
              />
              <p className="font-normal 
              font-primary w-[400px] 
              h-[35px] lg:text-[24px] text-[16px] 
              leading-[35px] text-[#2E2E2E] mt-[30px]">
                Financial Stability
              </p>
            </div>
            <p className="font-medium font-secondary lg:w-[400px] 
            lg:h-[96px] lg:text-[20px]
             w-[280px] h-[66px] text-[14px] leading-[22px] 
             lg:leading-[32px] text-[#777777] 
             mb-[10px] mt-[5px]">
              Take control of your finances today and pave the way to lasting stability.
            </p>
            <div className="hidden lg:flex gap-2 mt-[40px] mb-[40px]">
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
              <div className="border-2 border-[#920F35] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#920F35]"></div>
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
            </div>
          </div>

          {/* Feature Two Image */}
          <img src={featureTwoImage} alt="Feature Two Image" className="hidden lg:block lg:w-[472px] lg:h-[640px] mt-[50px] lg:mt-0"/>
          <img src={mobileSave} alt="" className="lg:hidden" />
        </div>

        {/* Feature Three */}
        <div className=" ml-[20px] lg:flex mt-[90px] lg:w-[1000px] lg:mx-auto justify-evenly my-10">
          <div className="">
          <div className=" flex lg:hidden gap-2 mt-[100px]">
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
              <div className="border-2 border-[#920F35] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#920F35]"></div>
            </div>
            <p className="font-normal font-primary
             lg:w-[368px] lg:h-[104px] lg:text-[36px] lg:leading-[52px] 
             w-[186px] h-[58px] text-[20px] leading-[28px] mb-[40px] mt-[40px]">
              Generate Invoice for your Clients
            </p>
            <p className="font-medium font-secondary
             lg:w-[400px] lg:h-[96px] w-[300px] h-[78px] 
             lg:text-[20px] text-[16px] leading-[32px] text-[#777777] mb-[10px]">
             Generate professional invoices for your clients enhancing your brand image and ensures clarity and transparency in your transactions
            </p>
            <div className="flex gap-5">
              <img
                src={checkbox}
                alt=""
                className="w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mt-[40px]"
              />
              <p className="font-normal font-primary 
              w-[400px] h-[35px] lg:text-[24px] text-[16px] 
              leading-[35px] text-[#2E2E2E] mt-[30px]">
                Track your Invoice
              </p>
            </div>
            <p className="font-medium font-secondary lg:w-[400px] 
            lg:h-[96px] lg:text-[20px]
             w-[280px] h-[66px] text-[14px] leading-[22px] 
             lg:leading-[32px] text-[#777777] mt-[5px]">
             Have better control over your cash flow with the ability to track payments and overdue invoices.
            </p>
            <div className="flex gap-5">
              <img
                src={checkbox}
                alt=""
                className="w-[18px] h-[18px] lg:w-[23px] lg:h-[23px] mt-[40px]"
              />
              <p className="font-normal font-primary
              w-[400px] h-[35px] lg:text-[24px] text-[16px] 
              leading-[35px] text-[#2E2E2E] mt-[30px]">
                Share directly with Clients
              </p>
            </div>
            <p className="font-medium font-secondary lg:w-[400px] 
            lg:h-[96px] lg:text-[20px]
             w-[280px] h-[66px] text-[14px] leading-[22px] 
             lg:leading-[32px] text-[#777777] 
             mb-[10px] mt-[5px]">
            Share invoices directly with your clients through social media platforms today and elevate your business operations.
            </p>
            <div className=" hidden lg:flex gap-2 mt-[100px]">
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
              <div className="border-2 border-[#D9D9D9] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#D9D9D9]"></div>
              <div className="border-2 border-[#920F35] w-[50px] lg:w-[120px] h-[1px] rounded-lg bg-[#920F35]"></div>
            </div>
          </div>

          {/* Feature Three Image */}

          <img src={invoiceImage} alt="invoice image" className=" hidden lg:block lg:w-[450px] lg:h-[660px] mt-[60px] lg:mt-0"/>
          <img src={mobileInvoice} alt="" className=" lg:hidden" />
          
        </div>
      </section>

        {/* Analysis section */}

      <section className="lg:flex lg:h-[487px] bg-[#F9CDCE] mt-20 sm:block lg:gap-[100px] lg:pl-[40px]">
        <div className="mt-[80px]">
          <p className="font-normal font-primary
          lg:w-[380px] lg:h-[156px] w-[300px] h-[58px] mx-auto text-[20px] lg:text-[36px] leading-[28px] 
          lg:leading-[52px] text-[#2E2E2E] mb-[40px] pt-[30px] text-center lg:text-start">
            Get Detailed analysis on your income and savings{" "}
          </p>
          <p className="lg:w-[350px] lg:h-[96px] w-[300px]
          h-[120px] mx-auto font-medium font-secondary text-[16px] lg:text-[20px] leading-[25px]
          lg:leading-[32px] text-[#777777] pt-[30px] text-center lg:text-start ">
            Uncover trends. This in-depth analysis empowers you to take control of your financial future.
          </p>
        </div>

        {/* Analysis Image */}
        <img src={analysisImage} alt="analysis image" className="hidden lg:block lg:mx-auto lg:w-[700px] lg:h-[560px]"/>
        <img src={mobileAnalysis} alt="analysis image" className="mx-auto lg:hidden"/>
      </section>

      {/* Getting started section */}
      <section className=" mt-[200px] lg:mt-[150px] mb-[100px]">
        <p className="text-center font-normal 
        font-primary text-[20px] lg:text-[36px] leading-[28px]
        lg:leading-[52px] text-[#2E2E2E]">
          How to get started
        </p>
        
        <div className=" lg:flex mt-[50px] justify-evenly block">
          {/* Item One */}
          <div className="">
            <img
              src={icon_one}
              alt=""
              className=" w-[36px] h-[36px] lg:w-[56px] lg:mt-[60px] lg:h-[56px] mx-auto"
            />
            <p className=" font-normal font-primary
             text-[14px] leading-[20px] text-center
            lg:text-[20px] lg:leading-[28px] pt-[15px] pb-[15px] text-[#2E2E2E]">
              Select ALAT Crea8
            </p>
            <img src={image_one} alt="" className=" w-[200px] h-[400px] mx-auto
            lg:w-[230px] lg:h-[460px]" />
          </div>

          {/* Item Two */}
          <div>
            <img
              src={icon_two}
              alt=""
              className=" w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] mx-auto mt-[50px]"
            />
            <p className=" font-normal font-primary 
            lg:text-[20px] text-[14px] leading-[20px]
            lg:leading-[28px] pt-[15px] pb-[15px] text-[#2E2E2E] text-center">
              Login with details
            </p>
            <img src={image_two} alt="" className=" w-[200px] h-[400px] lg:w-[230px] 
            lg:h-[460px] mx-auto" />
          </div>

          {/* Item Three */}
          <div>
            <img
              src={icon_three}
              alt=""
              className=" w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] mx-auto mt-[50px]"
            />
            <p className=" font-normal text-center font-primary text-[14px]
            lg:text-[20px] leading-[20px] lg:leading-[28px] pt-[15px] pb-[15px] text-[#2E2E2E]">
              Set up your ALAT Crea8
            </p>
            <img src={image_three} alt="" className=" w-[200px] h-[400px] lg:w-[230px]
             lg:h-[460px] mx-auto" />
          </div>
        </div>
      </section>

      <img src={preloader} alt="preloader" className="hidden sm:hidden md:hidden lg:hidden"/>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from bg-[rgba(168,8,54,1)] 
      to [rgba(168,8,54,0.7)] text-white lg:flex lg:gap-2 justify-evenly lg:py-[30px] pt-[10px]">
        <div className="ml-[10px]">
          <img src={logo} alt='' className="w-[38px] h-[36px]" />
          <p className="w-[292px] h-[17px] font-secondary
          font-normal text-[14px] leading-[16px] mt-[20px]">Licensed by the Central bank of Nigeria </p>
          <p className="w-[292px] h-[17px] font-secondary
          font-normal text-[14px] leading-[16px] mt-3">Proudly supported by Wema Bank</p>
          <div className="hidden sm:flex lg:flex gap-[10px] mt-[20px]">
            <img src={instagram} alt="instagram" className="w-[24px] h-[24px]"/> 
            <img src={facebook} alt="facebook" className="w-[24px] h-[24px]"/>
            <img src={twitter} alt="twitter" className="w-[24px] h-[24px]"/>
            <img src={whatssap} alt="whatssap" className="w-[24px] h-[24px]"/>
            <img src={linkedin} alt="linkedin" className="w-[24px] h-[24px]"/>
            <img src={youtube} alt="youtube" className="w-[24px] h-[24px]"/>
          </div>
        </div>
        <div className="flex mt-[30px] lg:mt-[10px] justify-between">
        <section className="ml-[10px]">
          <p className="font-bold font-secondary text-[16px] lg:text-[20px] 
          leading-[19px] lg:leading-[24px] text-white">
            Company
          </p>
          <a href="">
            <p className="font-normal font-secondary 
            text-[14px] leading-[16px] pt-[10px]">
              About ALAT
            </p>
          </a>
          <a href="">
            <p className="font-normal font-secondary 
            text-[14px] leading-[16px] pt-[15px]">
              Wema Bank
            </p>
          </a>
          <a href="">
            <p className="font-normal font-secondary 
            text-[14px] leading-[16px] pt-[15px]">
              Help Center
            </p>
          </a>
          <a href="">
            <p className="font-normal font-secondary
            text-[14px] leading-[16px] pt-[15px]">
              Security and Fraud
            </p>
          </a>
          <a href="">
            <p className="font-normal font-secondary
            text-[14px] leading-[16px] pt-[15px]">
              Website Accessibility
            </p>
          </a>
          <a href="">
            <p className="font-normal font-secondary
            text-[14px] leading-[16px] pt-[15px]">
              Privacy Policy
            </p>
          </a>
        </section>
        <section className="block lg:flex gap-10">
        <div>
          <p className="font-bold font-secondary text-[16px] lg:text-[20px] 
          leading-[19px] lg:leading-[24px]">
            Partner With Us
          </p>
          <a href="">
            <p className="font-normal font-secondary 
            text-[14px] leading-[16px] pt-[15px]">
              Join us
            </p>
          </a>
          <a href="">
            <p className="font-normal font-secondary
            text-[14px] leading-[16px] pt-[15px]">
              Developers
            </p>
          </a>
        </div>
        <div>
          <p className="font-bold font-secondary text-[16px] lg:text-[20px] 
          leading-[19px] lg:leading-[24px] pt-[35px] lg:pt-0">
            Quick Links
          </p>
          <a href="">
            <p className="font-normal font-secondary 
            text-[14px] leading-[16px] pt-[15px]">
              Media Center
            </p>
          </a>
          <a href="">
            <p className="font-normal font-secondary
            text-[14px] leading-[16px] pt-[15px]">
              Information Security
            </p>
          </a>
        </div>
        </section>
        <div>
        </div>
        </div>
        <div className="block">
        <p className="font-bold font-secondary text-[16px] lg:text-[20px] 
          leading-[19px] lg:leading-[24px] pt-[35px] ml-[10px] lg:pt-[12px]">
            Join Our Newsletter
          </p>
          <a href="">
            <p className="font-normal font-secondary
            text-[14px] leading-[16px] pt-[5px] ml-[10px]">
              Subscribe to ALAT
            </p>
          </a>
          <input
            type="text"
            placeholder="Enter your email address"
            className="rounded text-[14px] border-[#F9F9F9] bg-[#F9F9F9] text-black
            font-secondary font-normal leading-[22px] w-[280px] h-[45px] mx-auto mb-[40px] mt-[10px] ml-[10px] p-[10px] relative"
          />
          <button className=" bg-[#A80836] border-[#A80836] text-[14px]
           font-secondary leading-[22px] font-bold w-[88px] h-[41px] px-[10px]
            py-[5px] rounded-md absolute left-0 ml-[200px] lg:ml-[1115px] mt-[12px]">Submit</button>
          </div>

      </footer>

      {/* All rights reserved */}
      <div className="bg-[#F9CDCE]">
        <p className="text-center text-[#2E2E2E] font-bold font-secondary text-[12px] leading-[15px] py-[15px]">&copy;ALAT 2024 | All Rights Reserved </p>
      </div>
    </div>
  );
};

export default App;
