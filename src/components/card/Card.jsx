import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import InputEmoji from "react-input-emoji";
import DeleteModal from "../DeleteModal/DeleteModal";
import { Link, useParams } from "react-router-dom";
import './Card.scss';
import swal from "sweetalert";
function Card () {

    const [text, setText] = useState("");
	const [post, setPost] = useState([]);
	const [show, setShow] = useState(false);
    function handleOnEnter(text){
        console.log("enter",text);
    }

	useEffect(() => {
		axios.get("http://localhost:5050/posts").then((res) => {
			setPost(res.data);
		});
	}, [setPost]);
	
	const handleDeleteItem = async(id) => {

		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			
			if (willDelete) {
				axios.delete(`http://localhost:5050/posts/${id}`).then((res) => {
					setPost(post.filter((singlePost) => singlePost.id !== id));
					setShow(false);
				});
				swal("Poof! Your imaginary file has been deleted!", {
					icon: "success",
				});
			} else {
				swal("Your imaginary file is safe!");
			}
		});
		
	};

	const handleItemEdit = async(id) => {
		
	};


    return (
			<>
				{post.reverse().map((post, index) => (
					<div className="card border" key={index}>
						{show && (
							<DeleteModal hide={setShow}>
								<ul>
									<li className="redColor">
										<Link onClick={() => handleItemEdit(post.id)} to="" >Edit</Link>
									</li>
									<li className="redColor">
										<Link onClick={() => handleDeleteItem(post.id)} to="">Delete</Link>
									</li>
									<li>
										<Link to="">Add to favorites</Link>
									</li>
									<li>
										<Link to="">Go to post</Link>
									</li>
									<li>
										<Link to="">Share to</Link>
									</li>
									<li>
										<Link to="">Copy link</Link>
									</li>
									<li>
										<Link to="">Embed</Link>
									</li>
									<li>
										<Link to="">About this account</Link>
									</li>
									<li>
										<Link onClick={() =>setShow(false)} to="">Cancel</Link>
									</li>
								</ul>
							</DeleteModal>
						)}
						<div className="card-header d-flex justify-content-between">
							<div className="profile-wrapper d-flex align-items-center gap-2">
								<div className="profile-img">
									<img
										src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
										alt=""
									/>
								</div>
								<div className="name">zoynul_5</div>
								<div className="time">12h</div>
							</div>
							<button onClick={() => setShow(true)} className="btn">
								<BiDotsHorizontalRounded />
							</button>
						</div>
						<div className="card-body">
							<p>{post.status}</p>
							<img src={post.photo} alt="" />
						</div>
						<div className="card-footer">
							<div className="footer-top d-flex justify-content-between">
								<div className="left-icons">
									<button className="btn">
										<svg
											aria-label="Like"
											className="_ab6-"
											color="#8e8e8e"
											fill="#8e8e8e"
											height="24"
											role="img"
											viewBox="0 0 24 24"
											width="24">
											<path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
										</svg>
									</button>
									<button className="btn">
										<svg
											aria-label="Comment"
											className="_ab6-"
											color="#8e8e8e"
											fill="#8e8e8e"
											height="24"
											role="img"
											viewBox="0 0 24 24"
											width="24">
											<path
												d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
												fill="none"
												stroke="currentColor"
												strokeLinejoin="round"
												strokeWidth="2"></path>
										</svg>
									</button>
									<button className="btn">
										<svg
											aria-label="Share Post"
											className="_ab6-"
											color="#8e8e8e"
											fill="#8e8e8e"
											height="24"
											role="img"
											viewBox="0 0 24 24"
											width="24">
											<line
												fill="none"
												stroke="currentColor"
												strokeLinejoin="round"
												strokeWidth="2"
												x1="22"
												x2="9.218"
												y1="3"
												y2="10.083"></line>
											<polygon
												fill="none"
												points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
												stroke="currentColor"
												strokeLinejoin="round"
												strokeWidth="2"></polygon>
										</svg>
									</button>
								</div>
								<div className="right-icons">
									<button className="btn">
										<svg
											aria-label="Save"
											className="_ab6-"
											color="#8e8e8e"
											fill="#8e8e8e"
											height="24"
											role="img"
											viewBox="0 0 24 24"
											width="24">
											<polygon
												fill="none"
												points="20 21 12 13.44 4 21 4 3 20 3 20 21"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"></polygon>
										</svg>
									</button>
								</div>
							</div>
							<div className="footer-bottom">
								<div className="like">15 likes</div>
								<InputEmoji
									className="form-control border shadow-none emojjii"
									type="text"
									value={text}
									onchange={setText}
									onEnter={handleOnEnter}
									placeholder="Add a comment ..."
								/>
							</div>
						</div>
					</div>
				))}
			</>
		);
}
export default Card;