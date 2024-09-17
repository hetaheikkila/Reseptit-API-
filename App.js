import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import RepositoryList from './components/repositoryList';
import fetchRepositories from './components/api';

export default function App() {

const [ruoka, setRuoka] = useState("");
const [repositories, setRepositories] = useState([]);
const [loading, setLoading] = useState(false);

const handleFetch = () => {
  setLoading(true);
  fetchRepositories(ruoka)
    .then(data => {
      if (data && data.meals) {
        setRepositories(data.meals);
      } else {
        console.error("Unexpected API response:", data);
        setRepositories([]);
      }
    })
    .catch(err => {
      console.error("Error fetching data:", err);
      setRepositories([]);
    })
    .finally(() => {
      setRuoka("");
      setLoading(false);
    });
}

return (
  <View style={styles.container}>
    <TextInput
      style={styles.normalText}
      placeholder='Type ingredient here...'
      value={ruoka}
      onChangeText={text => setRuoka(text)}
    />
    <Button disabled={loading} title="Search" onPress={handleFetch} />
    <RepositoryList repositories={repositories} />
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: 50,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
normalText: {
  fontSize: 20
}
});