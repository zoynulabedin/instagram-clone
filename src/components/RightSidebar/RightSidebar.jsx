import React from 'react';
import './RightSidebar.scss';
function RightSidebar() {
  return (
		<>
			<div className="right-sdiebar-wrapper pt-5">
				<div className="profile-list">
					<div className="profile-item d-flex justify-content-between">
						<div className="profile-short d-flex gap-3">
							<img
								src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
								alt=""
							/>
							<div className="name-username">
								<span>zoynul_5</span>
								<p>zoynul Abedin</p>
							</div>
						</div>
						<button className="btn">Switch</button>
					</div>
				</div>
				<div className="suggestion d-flex justify-content-between mt-3">
					<p>Suggestions for you</p>
					<button className="btn">See All</button>
				</div>

				<div className="follower d-flex justify-content-between">
					<div className="profile-wrap d-flex align-items-center gap-3">
						<img
							src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
							alt=""
						/>
						<div className="username">
							<span>zoynul5</span>
							<p>Follows you</p>
						</div>
					</div>
					<button className="btn">Follow</button>
				</div>
				<div className="follower d-flex justify-content-between">
					<div className="profile-wrap d-flex align-items-center gap-3">
						<img
							src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
							alt=""
						/>
						<div className="username">
							<span>zoynul5</span>
							<p>Follows you</p>
						</div>
					</div>
					<button className="btn">Follow</button>
				</div>
				<div className="follower d-flex justify-content-between">
					<div className="profile-wrap d-flex align-items-center gap-3">
						<img
							src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
							alt=""
						/>
						<div className="username">
							<span>zoynul5</span>
							<p>Follows you</p>
						</div>
					</div>
					<button className="btn">Follow</button>
				</div>
			</div>
		</>
	);
}

export default RightSidebar