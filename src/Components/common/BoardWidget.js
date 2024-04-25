import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./BoardWidget.scss";
import { Input, Modal } from "antd";
import { apiClient } from "../../Services";
import { DeleteOutlined, PlusCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { alertErrors, alertSuccess, MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from "../../Contains/Config";
import { useParams } from "react-router-dom";
import ConfirmModal from "../../Components/common/ConfirmModals";
function BoardWidget({ largeWidget, avt, title, id }) {

	const confirmDel = (id) => {
		confirm({
			title: 'Do you Want to delete these project?',
			icon: <ExclamationCircleOutlined />,
			content: 'Some descriptions',
			onOk() {

				console.log("user", userID)
				console.log("project id", id)
				// apiClient.fetchApiDeleteProject(id).then(res => {
				// 	if (res) {
				// 		alertSuccess("Delete success.", 3000)
				// 	} else {
				// 		alertErrors("Delete Fail.", 3000)
				// 	}
				// })

				// setTimeout(() => {


				// }, 1000)
			},
			onCancel() {
				// console.log('Cancel');
			},
		});
	}
	return (
		<div className="main-lable">
			<Link to={`/board/${id}/schedule`}>
				<div className={`content-wrapper ${largeWidget ? "large" : "small"}`}>
					{avt ? (
						<img src={avt} alt=""></img>
					) : (
						<FontAwesomeIcon
							className="icon-trello"
							icon="fa-brands fa-trello"
						/>
					)}
					<span>{title}</span>
				</div>
			</Link>
			<div className="remove-project">
				<DeleteOutlined onClick={() => confirmDel(id)} />
			</div>
		</div>
	);
}

export default BoardWidget;
