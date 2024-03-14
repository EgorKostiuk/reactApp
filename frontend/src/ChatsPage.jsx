import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '0d707114-84ec-4ea9-a708-718ee336bb83', 
    props.user.username, 
    props.user.secret
  );
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  )
}

export default ChatsPage