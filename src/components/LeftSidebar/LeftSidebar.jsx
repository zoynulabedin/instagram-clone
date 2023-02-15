
import { useState } from "react";
import { FaFacebookMessenger, FaHeart, FaHome, FaPlusCircle, FaSearch, FaVideo, FaWpexplorer } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Modal from "../Modal/Modal";
import './LeftSidebar.scss';
import logo from './logo.png';
function LeftSidebar() {
		
	const [show, setShow] = useState(false);

	const handleModal = (e) => {
		setShow(true);
	};

	return (
		<div className="sidebar">
			{/* {show && (
				<Modal title="Create an account" hide={setShow}>
					Hello world
				</Modal>
			)} */}
			{show && <Modal hide={setShow}/>}



			<div className="logo pt-4">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="nav-menu">
				<ul>
					<li>
						<Link to="/">
							<FaHome />
							Home
						</Link>
					</li>
					<li>
						<Link to="/search">
							<FaSearch />
							Search
						</Link>
					</li>
					<li>
						<Link to="/explore">
							<FaWpexplorer />
							Explore
						</Link>
					</li>
					<li>
						<Link to="/reels">
							<FaVideo />
							Reels
						</Link>
					</li>
					<li>
						<Link to="/messenger">
							<FaFacebookMessenger />
							Messages
						</Link>
					</li>
					<li>
						<Link to="/notification">
							<FaHeart />
							Notifications
						</Link>
					</li>
					<li>
						<Link to="#" onClick={handleModal}>
							<FaPlusCircle />
							Create
						</Link>
					</li>
					<li>
						<Link to="/profile">
							<img
								src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8ee2b184a6fadac80c228a2dfff3f3c6-1657250948246/e70a686a-4ed5-4e68-9958-b2353aff4e86.jpg"
								alt=""
							/>
							Profile
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftSidebar