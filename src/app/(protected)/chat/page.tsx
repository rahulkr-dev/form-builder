import { ScrollArea } from "@/components/ui/scroll-area";
import { chatList, chatMsg } from "./seed";
import { PaperPlaneIcon, FaceIcon } from "@radix-ui/react-icons";

interface IChatObj {
  profileImage: string;
  username: string;
  lastMessage: string;
  lastDate: string;
  notification: number;
}
interface IChatListProps {
  chatList: IChatObj[];
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AvatarProfile({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}

const ChatListWrapper = ({ chatList }: IChatListProps) => {
  return (
    <ScrollArea className=" px-2 h-[calc(100vh-4rem)] ">
      {chatList.map((chat, index) => {
        return <ChatListItem key={index} chat={chat} />;
      })}
    </ScrollArea>
  );
};
const ChatListItem = ({ chat }: { chat: IChatObj }) => {
  return (
    <div className="cursor-pointer mt-2 grid grid-cols-12 text-sm bg-gray-100 hover:bg-blue-100 transition-colors py-3 px-3 rounded-md">
      <div className="col-span-2">
        <AvatarProfile
          src={chat.profileImage}
          alt={chat.username}
          fallback={chat.username}
        />
      </div>
      <div className="col-span-7">
        <div className="font-semibold">{chat.username}</div>
        <div>{chat.lastMessage}</div>
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <div className="text-xs">{chat.lastDate}</div>
        <div className="w-4 self-end text-end h-4 rounded-full bg-blue-600 flex justify-center items-center text-white">
          {chat.notification}
        </div>
      </div>
    </div>
  );
};

const ChatBody = () => {
  return (
    <ScrollArea className="px-12 h-[calc(100vh-11rem)]">
      <div className="flex flex-col gap-3">
      {chatMsg.map((chat, index) => {
        return (
          <Chat
            key={index}
            type={chat.type}
            text={chat.text}
            createdAt={chat.createdAt}
          />
        );
      })}
      </div>
      
    </ScrollArea>
  );
};

const ChatHeader = ({
  username,
  status,
  profileImage,
}: {
  username: string;
  status: boolean;
  profileImage: string;
}) => {
  return (
    <div className="border-b-2">
      <div className="flex gap-3">
        <AvatarProfile src={profileImage} alt={username} fallback={username} />
        <div>
          <div>{username}</div>
          <div className={cn("text-gray-500")}>
            {status ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
};
const Chat = ({
  type,
  text,
  createdAt,
}: {
  type: string;
  text: string;
  createdAt: string;
}) => {
  const isSentMsg = type == "sent";
  return (
    <div className={cn("w-max",{"self-end ":isSentMsg})}>
      <div className={cn("py-2 px-4 bg-gray-100  text-sm rounded-xl",{"bg-green-600 bg-opacity-70 text-white":isSentMsg})}>
        {text}
      </div>
      {/* <div className="text-xs text-gray-500">{createdAt.slice(0, 10)}</div> */}
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="h-16 px-12   border-t-2 grid grid-cols-8 gap-2 w-full justify-center items-center ">
      <div className="col-span-6 py-2 px-4 rounded-xl bg-gray-100 flex gap-2 items-center">
        <span className="text-5xl">
          <FaceIcon className="text-pink-400 cursor-pointer" />
        </span>
        <input
          type="text"
          className="w-full focus:outline-none bg-transparent "
        />
      </div>
      <div className="col-span-1">
        <div className="w-8 h-8 cursor-pointer bg-blue-500 text-white rounded-full flex justify-center items-center from-blue-600">
          <PaperPlaneIcon className="" />
        </div>
      </div>
    </div>
  );
};

const ChatContainer = () => {
  return (
    <div className="h-full">
      <ChatHeader
        username="rahulkr"
        status={true}
        profileImage="https://via.placeholder.com/150"
      />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

const ChatPage = () => {
  return (
    <div className=" bg-gray-50 grid grid-cols-12">
      <div className="col-span-3">
        <ChatListWrapper chatList={chatList} />
      </div>
      <div className="col-span-9 ">
        <ChatContainer />
      </div>
    </div>
  );
};

export default ChatPage;
