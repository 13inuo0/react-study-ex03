import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState("about");
  return (
    <div>
      <div>
        <button onClick={() => setTab("about")}>소개</button>
        <button onClick={() => setTab("photos")}>사진</button>
        <button onClick={() => setTab("comment")}>댓글</button>
      </div>
      {/* 탭 내용 */}
      <div>
        {tab === "about" && <p>저는 ㅇㅇㅇ 입니다.</p>}
        {tab === "photos" && <p>사진들이 있어요.</p>}
        {tab === "comment" && <p>댓글들이 있어요.</p>}
      </div>
    </div>
  );
}
