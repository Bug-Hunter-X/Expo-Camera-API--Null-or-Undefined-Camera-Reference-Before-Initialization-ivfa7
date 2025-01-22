import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

// ... other imports

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

if (hasPermission === null) {
    return <View><Text>Requesting permission...</Text></View>;
  }
if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      // ... handle photo
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef} onCameraReady={() => console.log('Camera Ready!')}>
      </Camera>
      <Button title="Take Picture" onPress={takePicture} />
    </View>
  );
}
