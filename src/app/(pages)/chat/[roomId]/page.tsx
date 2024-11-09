"use client";

import ChatRoomMessageSection from "@/_components/chat/ChatRoomMessageSection";
import ChatRoomTitleSection from "@/_components/chat/ChatRoomTitleSection";
import {
  useChatRoomMessage,
  useChatRoomTitle
} from "@/_components/chat/hooks/useChatRoom";
import useUser from "@/hooks/useUser";
import React from "react";

type Props = {
  params: {
    roomId: string;
  };
};

const ChatRoom = ({ params }: Props) => {
  // 미들웨어에서 접근 차단 및 roomId NaN 같은거 나와도 차단
  const roomId = Number(params.roomId);
  const user = useUser();
  const { chatRoomTitle } = useChatRoomTitle(roomId);
  const { chatMessage } = useChatRoomMessage(roomId);

  if (!user) return <></>;

  return (
    <div>
      <ChatRoomTitleSection chatRoomTitle={chatRoomTitle} />
      <ChatRoomMessageSection chatMessage={chatMessage} loginUserId={user.id} />
    </div>
  );
};

export default ChatRoom;
