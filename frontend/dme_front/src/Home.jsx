import { Box, Container, Heading } from "@chakra-ui/react";
import ImageUploadForm from "./components/ImageUploadForm";

function Home() {
  return (
    <>
    

<section id="intro">
  <div className="container">
    <div className="ror">
      <div className="col-md-8 col-md-offset-2">
        <h1>Computer-aided Disease Diagnosis</h1>
        <p>
          We are doing research on the application of deep learning techniques
          in the medical and healthcare domain, targeting improved disease
          diagnosis and an increased sense of well-being. This web application
          is available to the public free of charge.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="section4 text-center">
  <div className="general-title">
    <h4>Glaucoma Detection</h4>
    <hr />
  </div>
  <p>This tool is only for non-commercial use.</p>
  <p>
    To determine whether glaucomatous symptoms are present in an eye fundus
    image, please upload the image through the pane that can be found below.
    Depending on your network connection, it will take about 1~3 minutes to
    present the result on the screen.
  </p>
  <p></p>
  <p>
    ** Note: This is a prototype tool for glaucoma diagnosis, using experimental
    deep learning techniques. It is recommended to consult a medical doctor for
    a proper diagnosis. Furthermore, the usage of images other than eye fundus
    images will typically result in a random diagnosis.
  </p>
  <br />
  <br />
  <p>
    You can also try our prototype tool for glaucoma diagnosis by making use of
    one of the example images below.
  </p>
  <div className="portfolio-wrapper">
    <div
      id="owl-demo"
      className="owl-carousel owl-theme"
      style={{ opacity: 1, display: "block" }}
    >
      <div className="owl-wrapper-outer">
        <div
          className="owl-wrapper"
          style={{
            width: 2470,
            left: 0,
            display: "flex",
            transition: "all 1000ms ease 0s",
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div className="owl-item" style={{ width: 247 }}>
            <div className="item">
              <a href="javascript:fromExamples('/src/assets/example1.jpg');">
                <img
                  className="lazyOwl"
                  src="/src/assets/example1.jpg"
                  style={{
                    display: "block",
                    opacity: 1,
                    transitionProperty: "all",
                    transitionDuration: "0s",
                    transitionTimingFunction: "ease"
                  }}
                />
              </a>
            </div>
          </div>
          <div className="owl-item" style={{ width: 247 }}>
            <div className="item">
              <a href="javascript:fromExamples('/src/assets/example2.jpg');">
                <img
                  className="lazyOwl"
                  src="/src/assets/example2.jpg"
                  style={{
                    display: "block",
                    opacity: 1,
                    transitionProperty: "all",
                    transitionDuration: "0s",
                    transitionTimingFunction: "ease"
                  }}
                />
              </a>
            </div>
          </div>
          <div className="owl-item" style={{ width: 247 }}>
            <div className="item">
              <a href="javascript:fromExamples('/src/assets/example3.jpg');">
                <img
                  className="lazyOwl"
                  src="/src/assets/example3.jpg"
                  style={{
                    display: "block",
                    opacity: 1,
                    transitionProperty: "all",
                    transitionDuration: "0s",
                    transitionTimingFunction: "ease"
                  }}
                />
              </a>
            </div>
          </div>
          <div className="owl-item" style={{ width: 247 }}>
            <div className="item">
              <a href="javascript:fromExamples('/src/assets/example4.jpg');">
                <img
                  className="lazyOwl"
                  src="/src/assets/example4.jpg"
                  style={{
                    display: "block",
                    opacity: 1,
                    transitionProperty: "all",
                    transitionDuration: "0s",
                    transitionTimingFunction: "ease"
                  }}
                />
              </a>
            </div>
          </div>
          <div className="owl-item" style={{ width: 247 }}>
            <div className="item">
              <a href="javascript:fromExamples('/src/assets/example5.jpg');">
                <img
                  className="lazyOwl"
                  src="/src/assets/example5.jpg"
                  style={{
                    display: "block",
                    opacity: 1,
                    transitionProperty: "all",
                    transitionDuration: "0s",
                    transitionTimingFunction: "ease"
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end owl-demo */}
      <div className="owl-controls clickable" style={{ display: "none" }}>
        <div className="owl-buttons">
          <div className="owl-prev" />
          <div className="owl-next" />
        </div>
      </div>
    </div>
    {/* end portfolio-wrapper */}
  </div>
  <h3> OR </h3>


</section>



      <Container backgroundColor={'white'}>
        <Box p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h1" size="xl" textAlign="center">
            Upload Image
          </Heading>
          <ImageUploadForm />
        </Box>
      </Container>
    </>
  );
}

export default Home;
