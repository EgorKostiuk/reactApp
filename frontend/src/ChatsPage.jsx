import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow 
        projectId='0d707114-84ec-4ea9-a708-718ee336bb83'
        username={props.user.username}
        secret={props.user.username}
        style={{ height: '100%' }}
      />
    </div>
  )
}

export default ChatsPage