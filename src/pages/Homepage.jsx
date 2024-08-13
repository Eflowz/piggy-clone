import PlayStoreButton from "../Components/playStoreBadge";
import SecrityNotice from "../Components/SecrityNotice";
import Cards from "../Components/Cards";
import Diverse from "../Components/diverse";
import VideoWithText from "../Components/video";
import Footer from "../Components/footer";

const Homepage = () => {
    
  return (
    
          <>
          <PlayStoreButton /> 
          <SecrityNotice/>
          <Cards/>
          <Diverse/>
          <VideoWithText 
        title="Meet Our Saver of the Month" 
        subtitle="Every month, we shine a spotlight on one saver, asking them about their savings culture and how Piggyvest has helped them." 
        videoUrl="https://www.youtube.com/embed/Kuo-I6uiVJw?si=aUyf_FGuQQepJdNm" 
      />
      <Footer/>
          </>
        
    );
};

export default Homepage;
