import { Box, Container, Heading } from "@chakra-ui/react";
import ImageUploadForm from "./components/ImageUploadForm";

function Home() {
  return (
    <>
    

<section id="intro">
  <div className="container">
    <div className="ror">
      <div className="col-md-8 col-md-offset-2">
        <h1>About Diabetic Macular Edema</h1>
        <p>
          Diabetic Macular Edema (DME) is a medical condition that affects the
          retina in individuals with diabetes. It results from the accumulation
          of fluid in the macula, a part of the retina responsible for sharp,
          central vision. DME can lead to vision impairment and even blindness if
          left untreated. Early detection and proper management are crucial in
          preventing vision loss.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="section4 text-center">
  <div className="general-title">
    <h4>How it works?</h4>
    <hr />
  </div>
  <p>
    This website is designed to be a valuable resource for individuals at
    risk of or affected by Diabetic Macular Edema (DME) and healthcare
    professionals in the ophthalmology field. Specifically, it serves the
    following groups:

    <div style={{ textAlign: 'left', paddingLeft: '50px',marginLeft: '50px', wordWrap: 'break-word'}}>
    <ul>
      <li>
        <b>Individuals with Diabetes:</b> If you have diabetes, you are at risk of
        developing DME. This website can help you assess the likelihood of
        DME based on retinal scans. However, it's crucial to remember that
        the results are preliminary, and a professional diagnosis is
        essential.
      </li>
      <li>
        <b>Healthcare Providers:</b>  Ophthalmologists, optometrists, and other
        medical professionals can use this tool as an additional resource to
        diagnose DME. It can assist in the early detection of the condition
        and help guide treatment decisions.
      </li>
      <li>
        <b>Caregivers and Family Members:</b>  If you are caring for someone with
        diabetes or DME, this website can provide information and support in
        understanding the condition and its detection methods.
      </li>
    </ul>
    </div>
    </p>
 </section>

<section className="section4 text-center">
  <div className="general-title">
    <h4>How it works?</h4>
    <hr />
  </div>
  <p>
    Our website employs cutting-edge AI technology to analyze retinal scans
    and assist in the early detection of Diabetic Macular Edema. Upload a
    digital fundus image in jpg/tif format to get started. The image should
    be of good quality and capture the macula area. Our system will then
    process the uploaded image and provide a preliminary assessment of the
    likelihood of DME.
  </p>
  <p>
    Note: While this website can be helpful, it is not a substitute for
    professional medical advice. Always consult a qualified healthcare
    provider for a comprehensive diagnosis and appropriate treatment.
  </p>
 </section>

<section className="section4 text-center">
  <div className="general-title">
    <h4>Disclamer</h4>
    <hr />
  </div>
  <p>
    This website is intended for informational purposes and as a prototype
    for demonstrating AI-based DME detection. It does not replace a
    comprehensive medical examination by a qualified healthcare provider.
    The use of this website is subject to our privacy policy and terms of
    service. We do not collect or store personal data without your consent,
    and any data provided for analysis is processed securely and
    confidentially.
  </p>
 </section>

<section className="section4 text-center">
  <div className="general-title">
    <h4>Prototype Notice</h4>
    <hr />
  </div>
  <p>
    Please note that this website is a prototype and is provided as-is. It
    may have limitations and may not be entirely accurate in diagnosing
    DME. While we strive for accuracy, the diagnosis provided here is
    preliminary. Always consult a healthcare professional for a definitive
    diagnosis and treatment plan. Your health is our top priority.
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