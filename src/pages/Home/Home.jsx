import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from '../../components/card/Card';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Slider from '../../components/Slider/Slider';
import './Home.scss';
function Home() {
	const [fullwidth, setFullwidth] = useState(false);

	

	const handleFullwidth = (e) => {
		setFullwidth((prevState) => !prevState);
		
	}



  return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<LeftSidebar />
					<button onClick={handleFullwidth} className="btn full-width">
						{fullwidth ? <FaArrowRight /> : <FaArrowLeft />}
					</button>
				</div>

				<div className="col-md-6">
					<div className="row justify-content-end">
						<div className={fullwidth ? "col-md-12" : "col-md-7"}>
							<Slider />
							<Card />
						</div>
					</div>
				</div>
				<div className="col-md-2">
					<RightSidebar />
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	);
}

export default Home