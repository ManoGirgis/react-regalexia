import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";

const Comment = (props) => {

    return (
        <div key={props.comment.id} className="comment-container">
            <Row>
                <Col span={1}>
                    <img src={props.comment.node.author.node.avatar.url} className="Comment-img"></img>
                </Col>
                <Col span={23}>
                    <h1>{props.comment.node.author.node.name}</h1>
                    <p dangerouslySetInnerHTML={{ __html: props.comment.node.content }}></p></Col>
            </Row>


        </div>
    );
};

export default Comment;
