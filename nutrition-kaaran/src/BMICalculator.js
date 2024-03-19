import React, { useState } from 'react';
// import bmi from '../component/bmiimg.jpg'
// import bmiImage from '../src/component/img/bmiimg.jpg'; 
import bmi from '../src/component/img/bmi1.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBMIResult] = useState(null);

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height) / 100;

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      setBMIResult('Please enter valid weight and height.');
      return;
    }

    const bmi = weightValue / (heightValue * heightValue);
    setBMIResult(`Your BMI is: ${bmi.toFixed(2)}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline dotted' }}> BMI Calculator</h1>
    <div className='bmical'>
      <div>
        <label htmlFor="weight">Weight (kg): </label>
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label htmlFor="height">Height (cm): </label>
        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button><br></br><br></br>
      {bmiResult && <div>{bmiResult}</div>}
    </div>
    <div >
    <img className='bmii' src={bmi} alt="BMI Image" />
    <br></br><br></br>

    <footer>
        <h1 id="fbf">Contact us</h1>
        <div className="footer">
        <div className="foot1"> <FontAwesomeIcon icon={faFacebook} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faInstagram} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faTwitterSquare} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faYoutube} /> </div>
        </div>
        <h3 id="fbf">All copyright are reserved@2024</h3>
      </footer>
    </div>
    </div>
  );
};

export default BMICalculator;
