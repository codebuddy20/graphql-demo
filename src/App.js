import React from "react";

import { TOPIC } from "./utils/constants";
import { useQueryTopics } from "./hooks/useQueryTopics";

import { Topic } from "./components";

import './App.css';

function App() {
  const { data, loading, queryTopics } = useQueryTopics();

  React.useEffect(() => {
    queryTopics(TOPIC);
  }, [queryTopics]);

  console.log(data);

  return (
    <>
      <div className="container">
        {loading ? (
          <span className="loader">Loading</span>
        ) : (
          <>
            <div className="row">
              <h2 className="topic-title">React</h2>
              <span className="badge">{data?.stargazerCount}</span>
            </div>
            <div className="row">
              {(data?.relatedTopics || []).map((topic, index) => (
                <Topic topic={topic} key={`topic-${index}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </>    
  );
}

export default App;
