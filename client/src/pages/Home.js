import { useQuery } from "@apollo/client";
import { QUERY_BLOG } from "../utils/queries";
import MessageCard from "../components/messageCard";

const Home = () => {
    const { loading, data } = useQuery(QUERY_BLOG, {
        fetchPolicy: 'no-cache'
    });

    const messageList = data?.blog || [];

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : (
                <ul>
                    {messageList.map((blog) => {
                        return (
                            <li key={blog._id}>
                                <MessageCard message={blog.message} />
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}