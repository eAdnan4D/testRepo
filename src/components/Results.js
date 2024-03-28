import { HiArrowRight } from  'react-icons/hi'

const Results = ({data = 'yes'}) => {
  return (
    <div className="b__results">
      <div className="b__results__profile">
        <div className="b__results__profile-wrapper" style={{padding: "0 15px"}}>

          <div className="pathways">
            <h1>PATHWAYS</h1>
          </div>

          <div className="b__results__profile-patient card">
            <h1>John Miller</h1>
            <h5>Patient ID: 123456</h5>
            <h5>72, male, african american</h5>

            <div className="b__results__profile-patient__stage">
              <h5>CDK STAGE 2</h5>
            </div>
          </div>

          <div className="b__results__profile-risk card">
            <h2 style={{fontWeight: "700"}}>Risk Assessment</h2>
            <div><span /><h3>Out of Range Combined Renal RFs</h3></div>
            <div><span /><h3>Out of Range Combined CV RFs</h3></div>
          </div>

          <div className="b__results__profile-tabs">
            <div className="b__results__profile-risk card">

            </div>

            <div className="b__results__profile-risk card">

            </div>

            <div className="b__results__profile-risk card">

            </div>
          </div>
          
        </div>
    </div>





      <div className="b__results-info">
        
      </div>
    </div>
  )
}

export default Results