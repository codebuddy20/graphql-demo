import React from "react";

import { useApolloClient } from '@apollo/client';

import { STATUS, QUERY_LIMIT } from "../utils/constants";
import { GET_TOPICS } from "../gql/topic.gql";

export const useQueryTopics = () => {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState();
    const [status, setStatus] = React.useState(STATUS.NONE);
    const [loading, setLoading] = React.useState(false);

    const client = useApolloClient();

    const queryTopics = React.useCallback(async (topic) => {
        setLoading(true);

        try {
            const { data: topics } = await client.query({
                query: GET_TOPICS,
                variables: { topic, first: QUERY_LIMIT }
            });

            setData(topics.topic);
            setError(null);
            setStatus(STATUS.SUCCESS);
        } catch (err) {
            setError(err);
            setData(null);
            setStatus(STATUS.FAILURE);
        } finally {
            setLoading(false);
        }
    }, [client]);

    return { data, error, status, loading, queryTopics }
}