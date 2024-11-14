export default function FeedbackSlider() {

    const settings = {
        // dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 3,
           slidesToScroll: 2,
           nextArrow: <SampleNextArrow />,
           prevArrow: <SamplePrevArrow />,
           responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 2,
               infinite: true,
               
             }
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 2,
               initialSlide: 2
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2
             }
           }
         ]
       };
  return (
    
      <div id="root" className="taggbox-widget-root">
        <div id="controllerContent">
          <div id="wPostData">
            <div
              id="scrlBarComanW"
              className="scrlBarComan themesWrapper themeStart47 themeType1 null"
              style="background-repeat: repeat; background-size: 100%; background-position: center top; overflow: hidden; outline: none; margin-top: 0px; background-attachment: fixed; display: block;"
            >
              <Slider {...settings}>
              {feedback?.map((data,index)=>(
                          <div
            
                            className="slick-slide slick-cloned"
                            aria-hidden="true"
                            style="width: 270px;"
                          >
                            <div>
                              <div
                                
                                className=" postItem item flatCard col-ms-6 col-xs-12"
                              >
                                <div
                                  className="post "
                                  style="background-color: rgb(255, 255, 255);"
                                >
                                  <div className="postContent">
                                    <div className="image">
                                      <div className="tb_multiple_media_0"></div>
                                      <img data-src="" />
                                    </div>
                                    <div className="postContentCard">
                                      <h4>
                                        <div
                                          className="authorDetails"
                                          style="margin-top: -34px;"
                                        >
                                          <img
                                            src=""
                                            alt=""
                                            style="border-color: rgb(255, 255, 255);"
                                            className="gm-added gm-observing gm-observing-cb"
                                          />
                                          <div
                                            className="postAuthorName"
                                            style="color: rgb(69, 69, 69);"
                                          >
                                            jeetj2002
                                          </div>
                                          <div className="authrHandleTime">
                                            <span
                                              className="authrHandle"
                                              target="_blank"
                                              style="color: rgb(69, 69, 69);"
                                            >
                                              @jeetj2002
                                            </span>
                                            <div
                                              className="sepratedot"
                                              style="color: rgb(69, 69, 69); padding-right: 2px;"
                                            ></div>
                                            <span
                                              className="timePost"
                                              data-livestamp="1677330774"
                                              style="color: rgb(69, 69, 69);"
                                            >
                                              25 days ago
                                            </span>
                                          </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="postNetwork">
                                          <i
                                            className="fa fa-instagram"
                                            style="color: rgb(205, 72, 107);"
                                          ></i>
                                        </div>
                                      </h4>
                                      <div
                                        className="postedTxt  setFont sGFfonte-regular"
                                        style='font-family: "Open Sans"; font-size: 14px; color: rgb(69, 69, 69);'
                                      >
                                        <p
                                          className="chtrLimits emojiApplied sGFfonte-regular"
                                          style='font-family: "Open Sans";'
                                        >
                                          Believer = Achiever….”Sucess in golf
                                          <span
                                            title=":golf:"
                                            style='text-indent: -9999em; font-size: inherit; height: 32px; width: 32px; top: -3px; position: relative; display: inline-block; margin: 0px 0.15em; line-height: normal; vertical-align: middle; background-image: url("https://github.com/pladaria/react-emojione/blob/emojione3/assets/sprites/emojione-3.1.2-64x64.png?raw=true"); background-repeat: no-repeat; background-position: -1722.5px -1007.5px; background-size: 2080px 1365px;'
                                          >
                                            ⛳
                                          </span>
                                          ️
                                          <span
                                            title=":man_golfing:"
                                            style='text-indent: -9999em; font-size: inherit; height: 32px; width: 32px; top: -3px; position: relative; display: inline-block; margin: 0px 0.15em; line-height: normal; vertical-align: middle; background-image: url("https://github.com/pladaria/react-emojione/blob/emojione3/assets/sprites/emojione-3.1.2-64x64.png?raw=true"); background-repeat: no-repeat; background-position: -877.5px -1072.5px; background-size: 2080px 1365px;'
                                          >
                                            🏌️&zwj;♂️
                                          </span>{" "}
                                          depends less on strength of body than
                                          upon strength of mind &amp; character
                                          “ ~Jeet~ #golf #believer #achiever
                                          #jeena #jeetj2002 #jeetusangam
                                          #bakedbysona #clubmahindra
                                          #clubmahindraresort #vacation
                                          #vacationmode #family #yummsnspices
                                          #kensville clubmahindra
                                          club_mahindra_ahmedabad
                                          kensvillegolfliving mahindrakensville
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

            ))}     
             </Slider>           
                        </div>
                      </div>
                    </div>
                  </div>
               

  );
}

export const feedback=[
    {},
]