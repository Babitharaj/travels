
import Heading from "../../components/Heading/headingComp"
import FeedbackSlider from "../../components/Sliders/feedbackSlider/feedbackSlider"
export default function FeedbackSec() {
  return (
    <section style="margin-bottom: 75px;">
      <div className="container">
        <div className="row">
        <Heading heading="Magical Memories" subheading=" Wonderful #ClubMahindra holidays are made of moments like these "/>
        </div>
        <div
      className="taggbox-container tag-padding"
      style="width:100%;height:100%;overflow: auto;"
    >
        <FeedbackSlider/>
    </div>
      </div>
    </section>
  );
}
