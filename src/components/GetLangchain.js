import lang from "../api/langchain";
import {useEffect, useState} from "react";

function SomeComponent(userinput) {
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
        try {
            const result = await lang(userinput);
            setResponse(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {/* response를 화면에 표시하는 코드 */}
            {response && <div>{response.text}</div>}
        </div>
    );
}

export default SomeComponent;