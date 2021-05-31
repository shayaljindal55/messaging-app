import styled from "styled-components";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";
import moment from "moment";

function Message({user, message}) {
  const [userLoggedIn] = useAuthState(auth);
const TypeOMessage = user === userLoggedIn.emai? Sender : Reciever;

  return <Container>
      <TypeOMessage>{message.message}
    <Timestamp>      {message.timestamp ? moment(message.timestamp).format('LT') : "..." }</Timestamp>
</TypeOMessage>
  </Container>;
}

export default Message;

const Container = styled.div`

`;

const MessageElement = styled.p`
width: fit-content;
padding: 15px;
border-radius: 8px;
margin: 10px;
min-width: 60px;
padding-bottom: 26px;
position: relative;
text-align: right;
`;

const Sender = styled(MessageElement)`
margin-left: auto;
background-color: #dcf8c6;
`;

const Reciever = styled(MessageElement)`
background-color: whitesmoke;
text-align: left;
`;

const Timestamp = styled.span``;