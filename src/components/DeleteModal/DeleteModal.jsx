
import { FaTimes } from "react-icons/fa";


import './DeleteModal.scss';
function DeleteModal({children, hide}) {
	
    return (
			<div className="dmodal-blur">
				<button onClick={() => hide(false)} className="btn position-right-btn">
					<FaTimes />
				</button>
				<div className="modal-wraper">
					<div className="modal-main">
						<div className="modal-body-part">
							<div className="button-list">
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		);

}
export default DeleteModal;