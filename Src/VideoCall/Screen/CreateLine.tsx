import { Button, Text, View,StyleSheet } from 'react-native';
import {ScrollView,ZStack, Box, Center, NativeBaseProvider,HStack , VStack} from 'native-base';
import Video from 'react-native-video'; 

import {
    MeetingProvider,
    useMeeting,
    useParticipant,
    MediaStream,
    RTCView,
  } from "@videosdk.live/react-native-sdk";
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default function App({ navigation }) {
    const [meetingId, setMeetingId] = useState(null);

    const getMeetingId = async (id) => {
      const meetingId = id == null ? await createMeeting({ token }) : id;
      setMeetingId(meetingId);
    };
    return ( 
            <NativeBaseProvider config={config}>

      <Center flex={1} px="5">

        { 
            meetingId ? (

      
  
    
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: "Test User",
        }}
        token={token}
      >
        <MeetingView />
        </MeetingProvider>
    ):(
        <JoinScreen getMeetingId={getMeetingId} />
      )
    }  

      </Center>

    </NativeBaseProvider>
      )
  }
  
  function JoinScreen(props) {
    const [meetingVal, setMeetingVal] = useState("");
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F6F6FF",
          justifyContent: "center",
          paddingHorizontal: 6 * 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.getMeetingId();
          }}
          style={{ backgroundColor: "#1178F8", padding: 12, borderRadius: 6 }}
        >
          <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
            Create Meeting
          </Text>
        </TouchableOpacity>
  
        <Text
          style={{
            alignSelf: "center",
            fontSize: 22,
            marginVertical: 16,
            fontStyle: "italic",
            color: "grey",
          }}
        >
  
        </Text>
        <TextInput
          value={meetingVal}
          onChangeText={setMeetingVal}
          placeholder={"XXXX-XXXX-XXXX"}
          style={{
            padding: 12,
            borderWidth: 1,
            borderRadius: 6,
            fontStyle: "italic",
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#1178F8",
            padding: 12,
            marginTop: 14,
            borderRadius: 6,
          }}
          onPress={() => {
            props.getMeetingId(meetingVal);
          }}
        >
          <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
            Join Meeting
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const Button = ({ onPress, buttonText, backgroundColor }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          padding: 12,
          borderRadius: 4,
        }}
      >
        <Text style={{ color: "white", fontSize: 12 }}>{buttonText}</Text>
      </TouchableOpacity>
    );
  };
  
  function ControlsContainer({ join, leave, toggleWebcam, toggleMic }) {
    return (
      <View
        style={{
          padding: 24,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          onPress={() => {
            join();
          }}
          buttonText={"Join"}
          backgroundColor={"#1178F8"}
        />
        <Button
          onPress={() => {
            toggleWebcam();
          }}
          buttonText={"Toggle Webcam"}
          backgroundColor={"#1178F8"}
        />
        <Button
          onPress={() => {
            toggleMic();
          }}
          buttonText={"Toggle Mic"}
          backgroundColor={"#1178F8"}
        />
        <Button
          onPress={() => {
            leave();
          }}
          buttonText={"Leave"}
          backgroundColor={"#FF0000"}
        />
      </View>
    );
  }
  function ParticipantView() {
    return null;
  }
  
  function ParticipantList({ participants }) {
    return participants.length > 0 ? (
      <FlatList
        data={participants}
        renderItem={({ item }) => {
          return <ParticipantView participantId={item} />;
        }}
      />
    ) : (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6FF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
      </View>
    );
  }
  
  function MeetingView() {
    // Get `participants` from useMeeting Hook
    const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});
    const participantsArrId = [...participants.keys()]; // Add this line
  
    return (
      <View style={{ flex: 1 }}>
        <ParticipantList participants={participantsArrId} /> // Pass participants
        <ControlsContainer
          join={join}
          leave={leave}
          toggleWebcam={toggleWebcam}
          toggleMic={toggleMic}
        />
      </View>
    );
  }
  
  
  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });


