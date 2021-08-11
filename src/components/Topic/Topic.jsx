import React from "react";

import "./Topic.css";

export const Topic = ({ topic }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h4>{topic.name}</h4>
                <span>{topic.stargazerCount}</span>
            </div>
            <div className="card-body">
                {topic.stargazers.nodes.map((node, index) => (
                    <div key={`user-${index}`} className="sub-row">
                        <img alt="avatar" className="avatar" src={node.avatarUrl} />
                        <span>{node.name || "N/A"}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}