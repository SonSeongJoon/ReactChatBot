import images from "./images";
import videos from "./videos"
const keywordsAnswers = {
    "도슨트영상": videos.Docent,
    "관광지도": images.Map,
    "역사퀴즈": "다음은 경주의 역사와 관련된 문제입니다.<br/>\n" +
        "            보기를 읽고 정답을 고르세요.<br/><br/>\n" +
        "            1. 경주에서 가장 유명한 사찰은 어디인가요?<br/>\n" +
        "            가. 불국사<br/>\n" +
        "            나. 석굴암<br/>\n" +
        "            다.첨성대<br/>\n" +
        "            라.국립경주박물관<br/><br/>\n" +
        "            정답 : 가. 불국사",
    "여행 코스 추천": "경주 1박2일 여행 코스는 다음과 같습니다.<br/>\n" +
        "            1. 첫째 날 : <br/>\n" +
        "            - 아침 : 불국사 방문<br/>\n" +
        "            - 점심 : 경주 시내에서 경주 특산물을 즐길 수 있는 식사<br/>\n" +
        "            - 오후 : 석굴암 방문<br/>\n" +
        "            - 저녁 : 경주에서 유명한 음식을 맛볼 수 있는 식사<br/><br/>\n" +
        "            2. 둘째 날 : <br/>\n" +
        "            - 아침 : 경주 국립박물관 방문<br/>\n" +
        "            - 점심 : 경주에서 유명한 음식을 맛볼 수 있는 식사<br/>\n" +
        "            - 오후 : 첨성대 방문<br/>\n" +
        "            - 저녁 : 경주에서 유명한 음식을 맛볼 수 있는 식사<br/><br/>\n" +
        "            인기 있는 여행 사이트와 URL은 다음과 같습니다.<br/>\n" +
        "            1. [트립어드바이저]https://www.tripadvisor.co.kr/<br/>\n" +
        "            2. [야놀자]https://www.yanolja.com/<br/>\n" +
        "            3. [여기어때]https://www.goodchoice.kr<br/><br/>\n" +
        "            즐거운 여행 되세요!"
};
const replies = [
    {
        question: "경주에 대해 알려줘",
        answer: {
            text: "경주는 대한민국 경상북도에 위치한 도시로, 고려와 신라 시대의 유적지와 " +
                "문화유산으로 유명합니다. 경주는 한국에서 가장 오랜 역사를 가진 도시로, " +
                "신라 왕국의 수도였던 곳으로 알려져 있습니다. 이곳에는 많은 관광명소가 있으며, " +
                "그 중에서도 불국사, 석굴암, 첨성대는 꼭 방문해야 할 곳입니다. 불국사는 대한민국의 " +
                "대표적인 사찰로 유명하며, 석굴암은 세계문화유산으로 등재된 동굴 사찰입니다. 또한, " +
                "첨성대는 세계에서 가장 오래된 천문대로 알려져 있습니다. 경주는 역" +
                "사와 문화를 느낄 수 있는 멋진 도시이니, 방문해보시기를 추천드립니다.!",
            image: images.StonTop,
            video: "/path/to/video.mp4", // 예를 들어 video 속성을 추가하였다.
            keywords: ["도슨트영상", "관광지도", "역사퀴즈", "여행 코스 추천"],
            fromButton: true  // 버튼 클릭으로부터 생성된 답변을 표시


        }
    },
    {
        question: "뭐해?",
        answer: {
            // text: "여기서 당신과 대화하고 있어요."
            image: images.mainIcon
        }  // 이미지가 없으면 image 속성 생략 가능
    },
    // ... 다른 질문과 답변들
];

export {replies, keywordsAnswers}