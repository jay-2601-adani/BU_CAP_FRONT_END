import "./drcss.css";
import Logo from '../adani_logo.png'
const Home = () => {
  return (
    <div>
      <div className="banner-area">
        <div className="wrapper">
          <div className="banner-text">
            <div className="text-area">
              <h2><img src={Logo} style={{width:"25%"}}></img><br></br> Group Enterprise Architecture</h2><br></br>
              <p>
                In any organization, enterprise architecture (EA) is the link
                between the strategic goals and execution. It can be thought of
                as the organizing logic of business processes and IT
                capabilities in an organization. Its primary goal is to achieve
                a tight alignment between business priorities and IT
                capabilities. In Adani Group, this is achieved through a
                combination of various disciplines around architecture planning,
                design and governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
